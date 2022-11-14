import { use } from 'react';

const fetchNote = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/note/${id}`);
  const data = await response.json();
  return data;
};

export default function SearchNotes({ params }: { params: { id: string } }) {
  const { id } = params;
  const res = use(fetchNote(id));
  const { title, data, created_at } = res[0];
  return (
    <div className="p-3 dark:bg-neutral-900">
      <h1>{title}</h1>
      <p>{data}</p>
    </div>
  );
}
