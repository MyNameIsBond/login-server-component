'use client';
import { useState } from 'react';
import SideNotes from './SideNotes';
import Search from './Search';
import SearchNotes from './SearchNotes';

export default function SideBar({}: {}) {
  const [search, setSearch] = useState<string>('');

  return (
    <div className="flex flex-col border-r dark:border-neutral-50 dark:border-opacity-10 bg-gray-50 dark:bg-neutral-900 dark:text-neutral-100">
      <div className="border-b border-gray-900 dark:border-gray-50 dark:border-opacity-10 border-opacity-10 p-5 flex">
        <Search search={search} setSearch={setSearch} />
      </div>
      {search ? <SearchNotes search={search} /> : <SideNotes search={search} />}
    </div>
  );
}
