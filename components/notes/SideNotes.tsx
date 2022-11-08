import { use } from 'react';
import Note from './Note';

async function getAllNotes(): Promise<Note[]> {
  const notes = await fetch('http://localhost:3000/api/notes');
  console.log('NOTES:', notes);
  return notes.json();
}
const dataPromise = getAllNotes();

async function getSearchNotes(string): Promise<Note[]> {
  const notes = await fetch(`${process.env.BASE_API_URL}/search/${string}`);
  console.log('NOTES:', notes);
  return notes.json();
}
const allPromise = (search) => getSearchNotes(search);

function Itteration({ notes }) {
  return (
    <div className="p-5 flex flex-col gap-y-3">
      {notes?.map((note) => (
        <Note key={note.id} {...note} />
      ))}
    </div>
  );
}

export default function SideNotes({ search }: { search: string }) {
  if (typeof search === 'string' && search.length === 0) {
    const notes = use(dataPromise);
    return <Itteration notes={notes} />;
  } else {
    const notes = use(allPromise(search));
    return <Itteration notes={notes} />;
  }
}
