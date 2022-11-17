'use client';
import { useRouter } from 'next/router';

export default function DeleteBtn({ id }: { id: string }) {
  const router = useRouter();
  const deleteNote = async () => {
    const response = await fetch(
      `http://localhost:3000/api/note/delete/${id}`,
      {
        method: 'DELETE',
      }
    );
    const res = await response.json();
    if (res.success) {
      router.push('/note');
    }
  };
  return (
    <button
      className="border-2 border-red-500 hover:bg-red-500 hover:text-gray-50 text-red-500 py-1 px-4 rounded-full"
      onClick={deleteNote}
    >
      Delete
    </button>
  );
}
