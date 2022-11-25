import Link from 'next/link';
import { ReactNode } from 'react';
import DeleteBtn from './DeleteBtn';
import EditBtn from './EditBtn';

export default function NoteBar({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-100 dark:bg-neutral-900 dark:bg-opacity-40  bg-opacity-40 sticky p-3 top-12 z-10 w-full backdrop-blur-md border-b dark:border-neutral-50 border-gray-900 dark:border-opacity-10 border-opacity-10">
      <div className="flex flex-row gap-x-10 pl-5">{children}</div>
    </div>
  );
}
