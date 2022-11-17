import Link from 'next/link';
import { use } from 'react';
import DeleteBtn from '../../../components/notes/DeleteBtn';
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
      <div className="flex flex-row justify-between my-8">
        <h1 className="font-semibold text-3xl capitalize dark:text-neutral-50">
          {title}
        </h1>
        <div className="flex flex-row gap-x-3">
          <Link
            className="border-2 border-blue-500 hover:bg-blue-500 hover:text-gray-50 text-blue-500 py-1 px-4 rounded-full"
            href={`/note/edit/${id}`}
          >
            Edit
          </Link>
          <DeleteBtn id={id} />
        </div>
      </div>
      <div className="sticky overflow-y-scroll top-0">
        <div
          className="prose-sm dark:prose-invert prose max-w-md"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}
