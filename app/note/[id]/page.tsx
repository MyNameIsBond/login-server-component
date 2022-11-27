import { use } from 'react';
import NoteBar from '../../../components/notes/NoteBar';
import { textToRemark } from '../../../utils/textToRemark';

const fetchNote = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/note/${id}`);
  const res = await response.json();
  const { title, data, created_at } = res[0];
  const content = await textToRemark(data);
  return { title, data, created_at, content };
};

export default function SearchNotes({ params }: { params: { id: string } }) {
  const { id } = params;
  const res = use(fetchNote(id));
  const { title, data, created_at, content } = res;
  const ela = new Date(created_at).toDateString();

  return (
    <>
      <NoteBar id={id} />
      <div className="py-5 px-10 dark:bg-neutral-900 bg-gray-100">
        <div className="flex flex-row justify-between my-8">
          <span className="text-sm text-gray-900 text-opacity-60">{ela}</span>
        </div>
        <div className="sticky overflow-y-scroll top-0">
          <div
            className="prose-sm dark:prose-invert prose max-w-md"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </>
  );
}
