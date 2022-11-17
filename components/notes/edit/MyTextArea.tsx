'use client';
import { useEffect, useState } from 'react';
import MdPreview from './MdPreview';

export default function MyTextArea({ data }: { data: string }) {
  const [value, setValue] = useState<string>(data);

  useEffect(() => {}, [value]);

  return (
    <div className="flex flex-row">
      <textarea
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-full"
        value={value}
      />
      <MdPreview value={value} />
    </div>
  );
}
