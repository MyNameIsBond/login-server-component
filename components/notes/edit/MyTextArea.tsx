'use client';
import { useEffect, useState } from 'react';
import MdPreview from './MdPreview';

export default function MyTextArea({
  data,
  id,
}: {
  data?: string;
  id?: string;
}) {
  const [value, setValue] = useState<string>(data || '');
  console.log('first', id);

  const updateNote = ({ id, value }: { id: string; value: string }) => {
    fetch(`http://localhost:3000/api/note/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: value }),
    });
  };

  useEffect(() => {}, [value]);
  return (
    <div className="flex flex-row max-w-5xl h-fit">
      <textarea
        onChange={(e) => {
          console.log('first', id);
          if (id) {
            console.log('second');

            updateNote(id, e.target.value);
          }
          setValue(e.target.value);
        }}
        className=" dark:bg-neutral-900 min-w-max w-screen p-10 dark:text-gray-50 text-gray-900 focus:outline-none bg-gray-100"
        value={value}
      />
      <div className="h-screen border-r dark:border-neutral-50 border-gray-900 dark:border-opacity-10 border-opacity-10" />
      <MdPreview value={value} />
    </div>
  );
}
