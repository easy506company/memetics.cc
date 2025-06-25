'use client';

import { useEffect, useState } from 'react';
import { marked } from 'marked';

export default function Page() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/easy506company/awesome-meme/refs/heads/main/README.md')
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className="prose dark:prose-invert max-w-4xl mx-auto py-12">
      <div dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }} />
    </div>
  );
}