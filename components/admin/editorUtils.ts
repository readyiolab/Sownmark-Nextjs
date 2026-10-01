export interface EditorJSBlock {
  type: string;
  data: any;
}

export interface EditorJSData {
  time?: number;
  blocks: EditorJSBlock[];
  version?: string;
}

/**
 * Converts any blog content (HTML string, JSON string, or EditorJS data object)
 * into clean, responsive HTML for website rendering.
 */
export const editorJSToHtml = (content: any): string => {
  if (!content) {
    return '<p>No content available</p>';
  }

  // If already an HTML string, check if it's JSON-serialized or raw HTML
  if (typeof content === 'string') {
    const trimmed = content.trim();
    if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
      try {
        const parsed = JSON.parse(trimmed);
        return editorJSToHtml(parsed);
      } catch {
        return content;
      }
    }
    return content;
  }

  // If it's an object with blocks
  if (content && typeof content === 'object' && Array.isArray(content.blocks)) {
    return content.blocks
      .map((block: any) => {
        if (!block || !block.type) return '';
        switch (block.type) {
          case 'paragraph':
            return `<p class="text-gray-700 leading-relaxed my-3">${block.data?.text || ''}</p>`;

          case 'header': {
            const level = block.data?.level || 2;
            const sizeClass =
              level === 1 ? 'text-3xl font-extrabold' :
              level === 2 ? 'text-2xl font-bold' :
              level === 3 ? 'text-xl font-bold' : 'text-lg font-semibold';
            return `<h${level} class="text-gray-900 ${sizeClass} mt-6 mb-3 tracking-tight">${block.data?.text || ''}</h${level}>`;
          }

          case 'list': {
            const tag = block.data?.style === 'ordered' ? 'ol' : 'ul';
            const listClass = block.data?.style === 'ordered' ? 'list-decimal' : 'list-disc';
            const items = (block.data?.items || [])
              .map((item: any) => {
                const text = typeof item === 'object' && item !== null ? (item.content || '') : String(item || '');
                return `<li class="text-gray-700 my-1 leading-relaxed">${text}</li>`;
              })
              .join('');
            return `<${tag} class="${listClass} pl-6 my-4 space-y-1">${items}</${tag}>`;
          }

          case 'quote':
            return `
              <blockquote class="border-l-4 border-blue-600 bg-blue-50/40 pl-4 pr-3 py-2 italic text-gray-700 my-4 rounded-r-lg">
                <p class="mb-1">${block.data?.text || ''}</p>
                ${block.data?.caption ? `<cite class="block text-xs font-semibold text-gray-500 not-italic uppercase tracking-wide">— ${block.data.caption}</cite>` : ''}
              </blockquote>`;

          case 'image':
            return `
              <figure class="my-6">
                <img src="${block.data?.file?.url || block.data?.url || ''}" alt="${block.data?.caption || 'Blog image'}" class="w-full max-w-2xl h-auto rounded-xl shadow-md my-2 mx-auto object-cover" loading="lazy" />
                ${block.data?.caption ? `<figcaption class="text-center text-xs text-gray-500 mt-2">${block.data.caption}</figcaption>` : ''}
              </figure>`;

          case 'table': {
            const rows = block.data?.content || [];
            if (!Array.isArray(rows) || rows.length === 0) return '';
            const withHeadings = block.data?.withHeadings;
            let tableHtml = '<div class="overflow-x-auto my-6"><table class="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">';
            
            rows.forEach((row: string[], rowIndex: number) => {
              tableHtml += '<tr>';
              row.forEach((cell: string) => {
                if (rowIndex === 0 && withHeadings) {
                  tableHtml += `<th class="bg-gray-100 p-3 text-left font-semibold text-gray-900 border border-gray-200">${cell}</th>`;
                } else {
                  tableHtml += `<td class="p-3 border border-gray-200 text-gray-700">${cell}</td>`;
                }
              });
              tableHtml += '</tr>';
            });

            tableHtml += '</table></div>';
            return tableHtml;
          }

          case 'code':
            return `<pre class="bg-slate-900 text-slate-100 p-4 rounded-xl overflow-x-auto my-4 font-mono text-sm leading-normal"><code>${block.data?.code || ''}</code></pre>`;

          case 'delimiter':
            return `<hr class="my-8 border-gray-200 border-t-2" />`;

          case 'raw':
            return block.data?.html || '';

          default:
            return block.data?.text ? `<p class="text-gray-700 leading-relaxed my-3">${block.data.text}</p>` : '';
        }
      })
      .join('');
  }

  return String(content);
};
