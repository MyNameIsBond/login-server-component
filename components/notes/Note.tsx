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
    <div className="dark:bg-neutral-800 rounded-3xl border bg-gray-100 dark:border-neutral-50 dark:border-opacity-10 py-2 px-5 max-w-[18rem] group">
      <div className="flex flex-row justify-between">
        <Link
          href={`/note/${id}`}
          className="overflow-hidden truncate text-ellipsis max-w-xs text-sm flex items-center"
        >
          {title}
        </Link>
        <div className="invisible group-hover:visible transition-transform">
          <div
            onClick={(e) => setOpen(!open)}
            className="dark:bg-neutral-50 dark:bg-opacity-10 bg-opacity-10 bg-gray-900 p-2 flex items-center rounded-full ml-2"
          >
            <div
              className={`
            ${open ? 'rotate-180 ' : null}
            transition-transform`}
            >
              <Arrow />
            </div>
          </div>
        </div>
      </div>
      {open && (
        <p className="pt-4 dark:text-neutral-50 dark:text-opacity-60 overflow-hidden truncate text-ellipsis text-sm font-light">
          {data}
        </p>
      )}
    </div>
  );
}
