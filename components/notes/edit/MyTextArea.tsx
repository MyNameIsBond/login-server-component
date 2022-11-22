'use client';
import { useEffect, useState } from 'react';
import MdPreview from './MdPreview';

export default function MyTextArea({ data }: { data?: string }) {
  const [value, setValue] = useState<string>(data || '');

  useEffect(() => {}, [value]);
  return (
    <div className="flex flex-row max-w-5xl h-fit">
      <textarea
        onChange={(e) => setValue(e.target.value)}
        className=" dark:bg-neutral-900 min-w-max w-screen p-10 dark:text-gray-50 text-gray-900 focus:outline-none"
        value={value}
      />
      <div className="h-screen border-r dark:border-neutral-50 border-gray-50 dark:border-opacity-10 border-opacity-10" />
      <MdPreview value={value} />
    </div>
  );
}
