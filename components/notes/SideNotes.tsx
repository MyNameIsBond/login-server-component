import { use } from 'react';
import { queryClient } from '../../utils/query/search';
import Note from './Note';

async function getAllNotes(): Promise<Note[]> {
  const notes = await fetch('http://localhost:3000/api/notes');
  return notes.json();
}
const dataPromise = getAllNotes();

async function getSearchNotes(search: string) {
  const notes = await fetch(`${process.env.BASE_API_URL}/search/${search}`);
  return await notes.json();
}
const allPromise = (search: string) => getSearchNotes(search);

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
    const notes = queryClient('notes', () =>
      fetch('http://localhost:3000/api/notes').then((res) => res.json())
    );
    return <Itteration notes={notes} />;
  } else {
    const notes = queryClient('search', () =>
      fetch(`${process.env.BASE_API_URL}/search/${search}`).then((res) =>
        res.json()
      )
    );
    console.log('DOLORES:', `${process.env.BASE_API_URL}/search/${search}`);
    return <Itteration notes={notes} />;
  }
}
