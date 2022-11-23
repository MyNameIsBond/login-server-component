import Link from 'next/link';
import { use } from 'react';
import DeleteBtn from '../../../components/notes/DeleteBtn';
import EditBtn from '../../../components/notes/EditBtn';
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
    <div className="float-right">
      <div className="bg-gray-50">
        <div className="flex flex-row gap-x-3 w-full">
          <Link
            className="dark:bg-gray-50 bg-gray-900 rounded-md bg-opacity-5 dark:bg-opacity-5 hover:bg-opacity-20 cursor-pointer p-2"
            href={`/note/edit/${id}`}
          >
            <EditBtn />
          </Link>
          <DeleteBtn id={id} />
        </div>
      </div>
      <div className="py-5 px-10 dark:bg-neutral-900 bg-gray-100 float-right">
        <div className="flex flex-row justify-between my-8">
          <h1 className="font-semibold text-3xl capitalize dark:text-neutral-50">
            {title}
          </h1>
        </div>
        <div className="sticky overflow-y-scroll top-0">
          <div
            className="prose-sm dark:prose-invert prose max-w-md"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  );
}
