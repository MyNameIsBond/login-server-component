import Link from 'next/link';
import DeleteBtn from './DeleteBtn';
import EditBtn from './EditBtn';

export default function NoteBar({ id }: { id: string }) {
  return (
    <div className="bg-gray-100 dark:bg-neutral-900 dark:bg-opacity-40  bg-opacity-40 sticky py-3 h-full top-14 z-10 w-full backdrop-blur-md">
      <div className="flex flex-row gap-x-3">
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
