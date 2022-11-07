'use client';
import Link from 'next/link';
import { useState } from 'react';
import Arrow from './Arrow';

interface NoteProps {
  title: string;
  user: string;
  data: string;
  date: string;
  id: string;
}

export default function Note({
  title,
  user,
  data,
  date,
  id,
}: NoteProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="dark:bg-neutral-800 rounded-3xl border dark:border-neutral-50 dark:border-opacity-10 p-5">
      <div className="flex flex-row justify-between">
        <Link
          href={`/note/${id}`}
          className="text-lg font-semibold overflow-hidden truncate text-ellipsis max-w-xs"
        >
          {title}
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="bg-neutral-50 dark:bg-opacity-10 p-2 flex items-center rounded-full mx-4"
        >
          <div
            className={
              open ? 'rotate-180 transition-transform' : 'transition-transform'
            }
          >
            <Arrow />
          </div>
        </div>
      </div>
      {open && (
        <p className="pt-4 dark:text-neutral-50 dark:text-opacity-60 overflow-hidden truncate text-ellipsis">
          {data}
        </p>
      )}
    </div>
  );
}
