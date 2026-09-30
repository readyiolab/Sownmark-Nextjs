'use client';

import React, { useEffect, useRef, useCallback } from 'react';

const validateEditorContent = (content: any) => {
  if (!content || !content.blocks || !Array.isArray(content.blocks)) {
    return { blocks: [], time: Date.now(), version: '2.31.0-rc.7' };
  }

  const validBlocks = content.blocks.filter((block: any) => {
    if (!block || !block.type || !block.data) {
      return false;
    }

    if (block.type === 'paragraph') {
      return block.data.text !== undefined && block.data.text !== null;
    }

    if (block.type === 'header') {
      if (!block.data.text || typeof block.data.text !== 'string') {
        return false;
      }
      if (!block.data.level || block.data.level < 1 || block.data.level > 6) {
        block.data.level = 2;
      }
      return true;
    }

    if (block.type === 'list') {
      if (!block.data.style || !['ordered', 'unordered'].includes(block.data.style)) {
        block.data.style = 'unordered';
      }
      if (!block.data.items || !Array.isArray(block.data.items)) {
        return false;
      }
      block.data.items = block.data.items.filter((item: any) => typeof item === 'string' && item.trim());
      return block.data.items.length > 0;
    }

    if (block.type === 'quote') {
      return typeof block.data.text === 'string';
    }

    if (block.type === 'image') {
      return !!(block.data.file && block.data.file.url);
    }

    return false;
  });

  return {
    ...content,
    blocks: validBlocks,
    time: content.time || Date.now(),
    version: content.version || '2.31.0-rc.7',
  };
};

interface EditorJSEditorProps {
  content: any;
  onChange?: (data: any) => void;
  onImageUpload?: (files: File[]) => Promise<string>;
}

export default function EditorJSEditor({ content, onChange, onImageUpload }: EditorJSEditorProps) {
  const editorHolderId = 'editorjs';
  const editorRef = useRef<HTMLDivElement>(null);
  const editorInstance = useRef<any>(null);
  const lastContentRef = useRef<string | null>(null);
  const isUpdatingRef = useRef<boolean>(false);

  const handleEditorChange = useCallback(async () => {
    if (editorInstance.current && !isUpdatingRef.current) {
      try {
        const outputData = await editorInstance.current.save();
        const contentString = JSON.stringify(outputData);
        if (lastContentRef.current !== contentString) {
          lastContentRef.current = contentString;
          if (onChange) {
            onChange(outputData);
          }
        }
      } catch (error) {
        console.error('Failed to save editor data:', error);
      }
    }
  }, [onChange]);

  useEffect(() => {
    let isMounted = true;

    async function initEditor() {
      if (typeof window === 'undefined' || !editorRef.current || editorInstance.current) return;

      const EditorJS = (await import('@editorjs/editorjs')).default;
      const Header = (await import('@editorjs/header')).default;
      const List = (await import('@editorjs/list')).default;
      const ImageTool = (await import('@editorjs/image')).default;
      const Quote = (await import('@editorjs/quote')).default;
      const Paragraph = (await import('@editorjs/paragraph')).default;

      if (!isMounted) return;

      const initialContent = content ? validateEditorContent(content) : { blocks: [] };

      const instance = new EditorJS({
        holder: editorHolderId,
        tools: {
          header: {
            class: Header,
            config: {
              placeholder: 'Enter a heading',
              levels: [1, 2, 3, 4, 5, 6],
              defaultLevel: 2,
            },
          },
          list: {
            class: List,
            inlineToolbar: true,
            config: {
              defaultStyle: 'unordered',
            },
          },
          quote: {
            class: Quote,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+O',
            config: {
              quotePlaceholder: 'Enter a quote',
              captionPlaceholder: "Quote's author",
            },
          },
          image: {
            class: ImageTool,
            config: {
              uploader: {
                uploadByFile(file: File) {
                  return new Promise((resolve, reject) => {
                    try {
                      if (onImageUpload) {
                        onImageUpload([file])
                          .then((url) => {
                            resolve({
                              success: 1,
                              file: { url },
                            });
                          })
                          .catch(reject);
                      } else {
                        const url = URL.createObjectURL(file);
                        resolve({
                          success: 1,
                          file: { url },
                        });
                      }
                    } catch (error) {
                      reject(error);
                    }
                  });
                },
              },
            },
          },
          paragraph: {
            class: Paragraph as any,
            inlineToolbar: true,
            config: {
              placeholder: 'Start writing...',
              preserveBlank: true,
            },
          },
        } as any,
        data: initialContent,
        onChange: handleEditorChange,
        placeholder: "Let's write an awesome story!",
        minHeight: 300,
      });

      instance.isReady
        .then(() => {
          if (isMounted) {
            editorInstance.current = instance;
            lastContentRef.current = JSON.stringify(initialContent);
          }
        })
        .catch((error) => {
          console.error('Editor initialization failed:', error);
        });
    }

    initEditor();

    return () => {
      isMounted = false;
      if (editorInstance.current && typeof editorInstance.current.destroy === 'function') {
        try {
          editorInstance.current.destroy();
        } catch (error) {
          console.error('Error destroying editor:', error);
        }
        editorInstance.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (editorInstance.current && content) {
      const contentString = JSON.stringify(content);
      if (lastContentRef.current !== contentString && !isUpdatingRef.current) {
        editorInstance.current.isReady
          .then(() => {
            isUpdatingRef.current = true;
            const validatedContent = validateEditorContent(content);
            return editorInstance.current.render(validatedContent);
          })
          .then(() => {
            lastContentRef.current = contentString;
            isUpdatingRef.current = false;
          })
          .catch((error: any) => {
            console.error('Editor render failed:', error);
            isUpdatingRef.current = false;
          });
      }
    }
  }, [content]);

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
      <div
        id={editorHolderId}
        ref={editorRef}
        className="p-4 min-h-[300px] prose max-w-none"
        style={{ outline: 'none' }}
      />
    </div>
  );
}
