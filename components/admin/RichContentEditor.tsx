'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  List,
  ListOrdered,
  Quote,
  Code,
  Link as LinkIcon,
  Unlink,
  Image as ImageIcon,
  Table as TableIcon,
  RemoveFormatting,
  Undo,
  Redo,
  Eye,
  Code2,
  FileEdit,
  Upload,
  Check,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface RichContentEditorProps {
  value: string;
  onChange: (html: string) => void;
  onImageUpload?: (files: File[]) => Promise<string>;
  placeholder?: string;
}

/**
 * Clean pasted HTML from Microsoft Word, Google Docs, and external websites
 * while preserving essential formatting: headings, paragraphs, lists, bold, italics,
 * links, images, blockquotes, and tables.
 */
function cleanPastedHTML(html: string): string {
  if (!html) return '';

  // 1. Remove Word-specific tags, comments, and xml namespaces
  let cleaned = html
    .replace(/<!--[\s\S]*?-->/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<o:p>[\s\S]*?<\/o:p>/gi, '')
    .replace(/<\/?m:[^>]*>/gi, '')
    .replace(/<\/?o:[^>]*>/gi, '')
    .replace(/<\/?w:[^>]*>/gi, '');

  // 2. Remove MS Word class attributes and mso styles
  cleaned = cleaned
    .replace(/class="Mso[^"]*"/gi, '')
    .replace(/class='Mso[^']*'/gi, '')
    .replace(/style="[^"]*mso-[^"]*"/gi, '')
    .replace(/style='[^']*mso-[^']*'/gi, '');

  // 3. Create a temporary DOM parser to sanitize and keep clean standard elements
  if (typeof window !== 'undefined') {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(cleaned, 'text/html');

      // Remove meta and link tags
      doc.querySelectorAll('meta, link, title, style, script, noscript').forEach((el) => el.remove());

      // Ensure all images are responsive
      doc.querySelectorAll('img').forEach((img) => {
        img.classList.add('rounded-xl', 'my-4', 'max-w-full', 'h-auto', 'shadow-sm');
        img.setAttribute('loading', 'lazy');
      });

      // Ensure all links open safely in new tab
      doc.querySelectorAll('a').forEach((a) => {
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
        a.classList.add('text-blue-600', 'underline', 'hover:text-blue-800');
      });

      // Ensure tables have clean modern classes
      doc.querySelectorAll('table').forEach((table) => {
        table.classList.add('w-full', 'border-collapse', 'my-4', 'border', 'border-slate-200');
      });
      doc.querySelectorAll('th').forEach((th) => {
        th.classList.add('bg-slate-100', 'p-3', 'text-left', 'font-semibold', 'border', 'border-slate-200');
      });
      doc.querySelectorAll('td').forEach((td) => {
        td.classList.add('p-3', 'border', 'border-slate-200');
      });

      // Return body innerHTML if valid
      if (doc.body && doc.body.innerHTML.trim()) {
        return doc.body.innerHTML;
      }
    } catch {
      // Fallback to regex-cleaned html
    }
  }

  return cleaned;
}

export default function RichContentEditor({
  value,
  onChange,
  onImageUpload,
  placeholder = 'Write or paste your article content here...',
}: RichContentEditorProps) {
  const [activeTab, setActiveTab] = useState<'visual' | 'code' | 'preview'>('visual');
  const [linkModalOpen, setLinkModalOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [pastedNotification, setPastedNotification] = useState(false);

  const editorRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isInternalChangeRef = useRef(false);

  // Sync value from props to editor DOM when value changes externally
  useEffect(() => {
    if (!editorRef.current) return;
    if (isInternalChangeRef.current) {
      isInternalChangeRef.current = false;
      return;
    }
    if (editorRef.current.innerHTML !== (value || '')) {
      editorRef.current.innerHTML = value || '';
    }
  }, [value]);

  const handleInput = useCallback(() => {
    if (!editorRef.current) return;
    isInternalChangeRef.current = true;
    const html = editorRef.current.innerHTML;
    onChange(html);
  }, [onChange]);

  // Execute standard formatting commands
  const exec = (command: string, arg: string | undefined = undefined) => {
    if (typeof document === 'undefined') return;
    editorRef.current?.focus();
    document.execCommand(command, false, arg);
    handleInput();
  };

  // Dedicated Paste Handler
  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();

    const clipboardData = e.clipboardData;
    const html = clipboardData.getData('text/html');
    const text = clipboardData.getData('text/plain');

    let contentToInsert = '';

    if (html && html.trim()) {
      // Clean up the rich HTML
      contentToInsert = cleanPastedHTML(html);
    } else if (text) {
      // Convert plain text paragraphs with line breaks into HTML paragraphs
      contentToInsert = text
        .split(/\r?\n\r?\n/)
        .map((para) => `<p>${para.replace(/\r?\n/g, '<br/>')}</p>`)
        .join('');
    }

    if (contentToInsert) {
      document.execCommand('insertHTML', false, contentToInsert);
      handleInput();

      // Show brief visual feedback that formatting was preserved
      setPastedNotification(true);
      setTimeout(() => setPastedNotification(false), 2500);
    }
  };

  const handleApplyLink = () => {
    if (linkUrl) {
      let formattedUrl = linkUrl.trim();
      if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://') && !formattedUrl.startsWith('/')) {
        formattedUrl = `https://${formattedUrl}`;
      }
      exec('createLink', formattedUrl);
      setLinkUrl('');
      setLinkModalOpen(false);
    }
  };

  const handleImageFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    try {
      setIsUploading(true);
      let imageUrl = '';
      if (onImageUpload) {
        imageUrl = await onImageUpload(Array.from(files));
      } else {
        imageUrl = URL.createObjectURL(files[0]);
      }

      if (imageUrl) {
        exec('insertHTML', `<img src="${imageUrl}" alt="Uploaded image" class="max-w-full h-auto rounded-xl my-4 shadow-sm" />`);
      }
    } catch (err) {
      console.error('Failed to upload image:', err);
      alert('Failed to upload image. Please try again.');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const insertTable = () => {
    const tableHtml = `
      <table class="w-full border-collapse my-4 border border-slate-200">
        <thead>
          <tr class="bg-slate-100">
            <th class="p-3 text-left font-semibold border border-slate-200">Header 1</th>
            <th class="p-3 text-left font-semibold border border-slate-200">Header 2</th>
            <th class="p-3 text-left font-semibold border border-slate-200">Header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-3 border border-slate-200">Data 1</td>
            <td class="p-3 border border-slate-200">Data 2</td>
            <td class="p-3 border border-slate-200">Data 3</td>
          </tr>
          <tr>
            <td class="p-3 border border-slate-200">Data 4</td>
            <td class="p-3 border border-slate-200">Data 5</td>
            <td class="p-3 border border-slate-200">Data 6</td>
          </tr>
        </tbody>
      </table>
      <p></p>
    `;
    exec('insertHTML', tableHtml);
  };

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
      {/* Editor Header / Tab Switcher */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-200 bg-slate-50/80 px-3 py-2 gap-2">
        <div className="flex items-center space-x-1">
          <Button
            type="button"
            variant={activeTab === 'visual' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('visual')}
            className={`h-8 gap-1.5 text-xs font-medium rounded-lg ${
              activeTab === 'visual' ? 'bg-[#1a2957] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileEdit className="w-3.5 h-3.5" />
            Visual Editor
          </Button>

          <Button
            type="button"
            variant={activeTab === 'code' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('code')}
            className={`h-8 gap-1.5 text-xs font-medium rounded-lg ${
              activeTab === 'code' ? 'bg-[#1a2957] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            HTML / Source
          </Button>

          <Button
            type="button"
            variant={activeTab === 'preview' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('preview')}
            className={`h-8 gap-1.5 text-xs font-medium rounded-lg ${
              activeTab === 'preview' ? 'bg-[#1a2957] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            Live Website Preview
          </Button>
        </div>

        <div className="flex items-center gap-2">
          {pastedNotification && (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full animate-fade-in">
              <Check className="w-3 h-3" /> Formatted content pasted!
            </span>
          )}
          <span className="text-xs text-slate-400 font-normal hidden sm:inline">
            Directly paste text, tables & images (Ctrl+V)
          </span>
        </div>
      </div>

      {/* Formatting Toolbar (Active in Visual Mode) */}
      {activeTab === 'visual' && (
        <div className="flex flex-wrap items-center gap-1 p-2 bg-slate-50/50 border-b border-slate-200 text-slate-700">
          {/* Headings */}
          <div className="flex items-center border-r border-slate-200 pr-1.5 mr-1 space-x-0.5">
            <button
              type="button"
              onClick={() => exec('formatBlock', '<h1>')}
              title="Heading 1"
              className="p-1.5 rounded hover:bg-slate-200/70 text-slate-700 transition"
            >
              <Heading1 className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => exec('formatBlock', '<h2>')}
              title="Heading 2"
              className="p-1.5 rounded hover:bg-slate-200/70 text-slate-700 transition"
            >
              <Heading2 className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => exec('formatBlock', '<h3>')}
              title="Heading 3"
              className="p-1.5 rounded hover:bg-slate-200/70 text-slate-700 transition"
            >
              <Heading3 className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => exec('formatBlock', '<h4>')}
              title="Heading 4"
              className="p-1.5 rounded hover:bg-slate-200/70 text-slate-700 transition"
            >
              <Heading4 className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => exec('formatBlock', '<p>')}
              title="Paragraph"
              className="px-2 py-1 text-xs font-semibold rounded hover:bg-slate-200/70 text-slate-700 transition"
            >
              P
            </button>
          </div>

          {/* Text Styles */}
          <div className="flex items-center border-r border-slate-200 pr-1.5 mr-1 space-x-0.5">
            <button
              type="button"
              onClick={() => exec('bold')}
              title="Bold (Ctrl+B)"
              className="p-1.5 rounded hover:bg-slate-200/70 text-slate-700 transition"
            >
              <Bold className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => exec('italic')}
              title="Italic (Ctrl+I)"
              className="p-1.5 rounded hover:bg-slate-200/70 text-slate-700 transition"
            >
              <Italic className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => exec('underline')}
              title="Underline (Ctrl+U)"
              className="p-1.5 rounded hover:bg-slate-200/70 text-slate-700 transition"
            >
              <Underline className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => exec('strikeThrough')}
              title="Strikethrough"
              className="p-1.5 rounded hover:bg-slate-200/70 text-slate-700 transition"
            >
              <Strikethrough className="w-4 h-4" />
            </button>
          </div>

          {/* Lists & Quotes */}
          <div className="flex items-center border-r border-slate-200 pr-1.5 mr-1 space-x-0.5">
            <button
              type="button"
              onClick={() => exec('insertUnorderedList')}
              title="Bullet List"
              className="p-1.5 rounded hover:bg-slate-200/70 text-slate-700 transition"
            >
              <List className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => exec('insertOrderedList')}
              title="Numbered List"
              className="p-1.5 rounded hover:bg-slate-200/70 text-slate-700 transition"
            >
              <ListOrdered className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => exec('formatBlock', '<blockquote>')}
              title="Quote"
              className="p-1.5 rounded hover:bg-slate-200/70 text-slate-700 transition"
            >
              <Quote className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => exec('formatBlock', '<pre>')}
              title="Code Block"
              className="p-1.5 rounded hover:bg-slate-200/70 text-slate-700 transition"
            >
              <Code className="w-4 h-4" />
            </button>
          </div>

          {/* Links, Images, Tables */}
          <div className="flex items-center border-r border-slate-200 pr-1.5 mr-1 space-x-0.5">
            <button
              type="button"
              onClick={() => setLinkModalOpen(true)}
              title="Insert Link"
              className="p-1.5 rounded hover:bg-slate-200/70 text-slate-700 transition"
            >
              <LinkIcon className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => exec('unlink')}
              title="Remove Link"
              className="p-1.5 rounded hover:bg-slate-200/70 text-slate-700 transition"
            >
              <Unlink className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              title="Upload Image"
              disabled={isUploading}
              className="p-1.5 rounded hover:bg-slate-200/70 text-slate-700 transition disabled:opacity-50"
            >
              <ImageIcon className="w-4 h-4" />
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageFileChange}
              accept="image/*"
              className="hidden"
            />
            <button
              type="button"
              onClick={insertTable}
              title="Insert Table"
              className="p-1.5 rounded hover:bg-slate-200/70 text-slate-700 transition"
            >
              <TableIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Utilities */}
          <div className="flex items-center space-x-0.5">
            <button
              type="button"
              onClick={() => exec('removeFormat')}
              title="Clear Formatting"
              className="p-1.5 rounded hover:bg-slate-200/70 text-slate-700 transition"
            >
              <RemoveFormatting className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => exec('undo')}
              title="Undo (Ctrl+Z)"
              className="p-1.5 rounded hover:bg-slate-200/70 text-slate-700 transition"
            >
              <Undo className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => exec('redo')}
              title="Redo (Ctrl+Y)"
              className="p-1.5 rounded hover:bg-slate-200/70 text-slate-700 transition"
            >
              <Redo className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Insert Link Input Bar */}
      {linkModalOpen && (
        <div className="flex items-center gap-2 p-3 bg-blue-50/70 border-b border-blue-200">
          <LinkIcon className="w-4 h-4 text-blue-600 shrink-0" />
          <Input
            type="url"
            placeholder="Paste URL (e.g., https://example.com)"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleApplyLink();
              }
            }}
            className="h-8 text-sm bg-white"
            autoFocus
          />
          <Button type="button" size="sm" onClick={handleApplyLink} className="h-8 bg-blue-600 hover:bg-blue-700 text-white">
            Insert
          </Button>
          <Button type="button" size="sm" variant="ghost" onClick={() => setLinkModalOpen(false)} className="h-8">
            Cancel
          </Button>
        </div>
      )}

      {/* Tab 1: Visual WYSIWYG ContentEditable Area */}
      {activeTab === 'visual' && (
        <div
          ref={editorRef}
          contentEditable
          onInput={handleInput}
          onPaste={handlePaste}
          className="p-5 min-h-[420px] focus:outline-none prose prose-slate max-w-none text-slate-800 leading-relaxed font-sans"
          style={{ minHeight: '420px' }}
          data-placeholder={placeholder}
        />
      )}

      {/* Tab 2: HTML / Raw Source Mode */}
      {activeTab === 'code' && (
        <div className="p-3">
          <div className="text-xs text-slate-500 mb-2 font-mono">
            Paste or edit raw HTML content directly below:
          </div>
          <textarea
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            className="w-full min-h-[420px] p-4 font-mono text-sm bg-slate-900 text-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="<p>Paste or write HTML here...</p>"
          />
        </div>
      )}

      {/* Tab 3: Exact Live Website Preview */}
      {activeTab === 'preview' && (
        <div className="p-6 bg-slate-50/50 min-h-[420px] overflow-y-auto">
          <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 text-xs font-semibold text-blue-600 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" /> Live Website Preview (Identical to sownmark.com)
            </div>
            <div
              className="prose prose-slate prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: value || '<p className="text-gray-400 italic">No content written yet...</p>' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
