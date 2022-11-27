'use client';
import { useEffect, useState } from 'react';
import NoteBarSkeleton from '../NoteBarSkeleton';
import SaveBtn from '../SaveBtn';
import MdPreview from './MdPreview';

export default function MyTextArea({
  data,
  id,
  save,
}: {
  data?: string;
  id?: string;
  save?: boolean;
}) {
  const [value, setValue] = useState<string>(data || '');
  const [noteid, setNoteid] = useState<string>(id || '');
  useEffect(() => {}, [value]);
  return (
    <>
      {save && (
        <NoteBarSkeleton>
          <SaveBtn id={noteid} data={value} />
        </NoteBarSkeleton>
      )}
      <div className="flex flex-row max-w-5xl h-fit">
        <textarea
          onChange={(e) => setValue(e.target.value)}
          className=" dark:bg-neutral-900 min-w-max w-screen p-10 dark:text-gray-50 text-gray-900 focus:outline-none bg-gray-100"
          value={value}
        />
        <div className="h-screen border-r dark:border-neutral-50 border-gray-900 dark:border-opacity-10 border-opacity-10" />
        <MdPreview value={value} />
      </div>
    </>
  );
}
