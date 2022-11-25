import Link from 'next/link';
import DeleteBtn from './DeleteBtn';
import EditBtn from './EditBtn';
import NoteBarSkeleton from './NoteBarSkeleton';

export default function NoteBar({ id }: { id: string }) {
  return (
    <NoteBarSkeleton>
      <Link
        className="dark:bg-gray-50 backdrop-blur-md bg-gray-900 rounded-md bg-opacity-5 dark:bg-opacity-5 hover:bg-opacity-20 cursor-pointer p-2"
        href={`/note/edit/${id}`}
      >
        <EditBtn />
      </Link>
      <DeleteBtn id={id} />
    </NoteBarSkeleton>
  );
}
