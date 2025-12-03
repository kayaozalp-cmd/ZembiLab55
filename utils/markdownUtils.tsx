import React from 'react';

/**
 * A simple markdown parser that converts [Text](URL) into <a href="URL" target="_blank">Text</a>
 * and handles basic line breaks.
 */
export const renderMarkdownWithLinks = (text: string) => {
  if (!text) return null;

  // Split by newlines to handle paragraphs
  const lines = text.split('\n');

  return lines.map((line, lineIndex) => {
    // Regex to match [Title](URL)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(line)) !== null) {
      // Text before the link
      if (match.index > lastIndex) {
        parts.push(line.substring(lastIndex, match.index));
      }
      
      // The link itself
      parts.push(
        <a 
          key={`${lineIndex}-${match.index}`} 
          href={match[2]} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-primary hover:underline font-bold inline-flex items-center gap-1"
        >
          {match[1]}
          <span className="material-symbols-outlined text-sm">open_in_new</span>
        </a>
      );
      
      lastIndex = linkRegex.lastIndex;
    }

    // Remaining text after last link
    if (lastIndex < line.length) {
      parts.push(line.substring(lastIndex));
    }

    // Render the line (if empty, it's just a spacer)
    return (
      <p key={lineIndex} className="mb-2 text-black dark:text-white leading-relaxed">
        {parts.length > 0 ? parts : <br />}
      </p>
    );
  });
};