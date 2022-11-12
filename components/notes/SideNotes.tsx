import { use } from 'react';
import Note from './Note';

const fetcher = async () => {
  const data = await fetch('http://localhost:3000/api/notes');
  return await data.json();
};

const datafech = fetcher();

export default function SideNotes({ search }: { search: string }) {
  const notes = use(datafech);
  return (
    <div className="p-5 flex flex-col gap-y-5">
      {notes?.map((note: any) => (
        <Note key={note.id} {...note} />
      ))}
    </div>
  );
}
