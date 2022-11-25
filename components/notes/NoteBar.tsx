import Link from 'next/link';
import DeleteBtn from './DeleteBtn';
import EditBtn from './EditBtn';

export default function NoteBar({ id }: { id: string }) {
  return (
    <div className="bg-gray-100 dark:bg-neutral-900 dark:bg-opacity-40  bg-opacity-40 sticky p-3 top-12 z-10 w-full backdrop-blur-md border-b dark:border-neutral-50 border-gray-900 dark:border-opacity-10 border-opacity-10">
      <div className="flex flex-row gap-x-10 pl-5">
        <Link
          className="dark:bg-gray-50 backdrop-blur-md bg-gray-900 rounded-md bg-opacity-5 dark:bg-opacity-5 hover:bg-opacity-20 cursor-pointer p-2"
          href={`/note/edit/${id}`}
        >
          <EditBtn />
        </Link>
        <DeleteBtn id={id} />
      </div>
    </div>
  );
}
