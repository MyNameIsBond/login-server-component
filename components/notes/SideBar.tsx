'use client';
import { useEffect, useState } from 'react';
import SideNotes from './SideNotes';
import Search from './Search';
import SearchNotes from './SearchNotes';
import { supabase } from '../../utils/supabaseclient';

export default async function SideBar({}: {}) {
  const [search, setSearch] = useState<string>('');
  const [notes, setNotes] = useState<any>([]);

  // listen to notes changes
  useEffect(() => {}, [notes]);

  return (
    <div className="flex flex-col border-r dark:border-neutral-50 dark:border-opacity-10 bg-gray-50 dark:bg-neutral-900 dark:text-neutral-100 sticky top-0 overflow-y-scroll h-screen w-96">
      <div className="border-b border-gray-900 dark:border-gray-50 dark:border-opacity-10 border-opacity-10 p-2 flex sticky top-0 dark:bg-neutral-900 dark:bg-opacity-5 backdrop-blur-md">
        <Search search={search} setSearch={setSearch} />
      </div>
      {search ? <SearchNotes search={search} /> : <SideNotes notes={notes} />}
    </div>
  );
}
