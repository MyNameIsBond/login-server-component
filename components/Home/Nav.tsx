'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import AddBtn from './AddBtn';

export default function Nav() {
  const router = useRouter();
  const addNote = () => {
    router.push('/note/add');
  };
  return (
    <nav className="flex items-center content-center justify-between w-full px-10 py-3 bg-gray-50 dark:bg-neutral-900 border-b dark:border-neutral-50 dark:border-opacity-10 sticky top-0 z-10">
      <Link
        href="/"
        className="text-md font-semibold dark:text-neutral-200 text-gray-800"
      >
        The Happy Notes
      </Link>
      <div className="flex items-center gap-x-4">
        <div
          className="dark:bg-gray-50 bg-gray-900 rounded-md bg-opacity-5 dark:bg-opacity-5 hover:bg-opacity-20 cursor-pointer"
          onClick={addNote}
        >
          <AddBtn />
        </div>
      </div>
    </nav>
  );
}
