import { use } from 'react';
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

  return (
    <div className="py-5 px-10 dark:bg-neutral-900  bg-gray-100  w-full">
      <h1 className="font-semibold text-3xl capitalize py-4 dark:text-neutral-50">
        {title}
      </h1>
      <div className="sticky overflow-y-scroll top-0">
        <div
          className="prose-sm dark:prose-invert prose max-w-md"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}
