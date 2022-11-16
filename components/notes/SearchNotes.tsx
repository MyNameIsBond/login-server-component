'use client';
import { use, useState, useEffect } from 'react';
import Note from './Note';

export default function SearchNotes({ search }: { search: string }) {
  const [notes, setNotes] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/search/${search}`);
      const newData = await response.json();
      if (newData.error) {
        setNotes([]);
      } else {
        setNotes(newData);
      }
    };

    fetchData();
  }, [search]);

  if (notes?.length === 0) {
    return (
      <div className="m-auto max-w-[18rem] min-w-full">
        Nothing for search "{search}"{' '}
      </div>
    );
  }

  return (
    <div className="p-5 flex flex-col gap-y-5">
      {notes?.map((note: any) => (
        <Note key={note.id} {...note} />
      ))}
    </div>
  );
}
