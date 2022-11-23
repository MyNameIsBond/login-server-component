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
      className="dark:bg-gray-50 bg-gray-900 rounded-md bg-opacity-5 dark:bg-opacity-5 hover:bg-opacity-20 cursor-pointer p-2"
      onClick={deleteNote}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="11.856"
        height="13.646"
        viewBox="0 0 11.856 13.646"
      >
        <path
          id="Path_910"
          d="M10.877,6.627l-.224,5.836m-3.1,0L7.323,6.627m6.464-2.082c.222.034.442.069.663.108m-.663-.107-.693,9A1.459,1.459,0,0,1,11.639,14.9H6.561a1.459,1.459,0,0,1-1.455-1.347l-.693-9m9.374,0q-1.123-.17-2.255-.257M3.75,4.652c.22-.038.441-.074.663-.107m0,0q1.123-.17,2.255-.257m4.864,0V3.694a1.412,1.412,0,0,0-1.355-1.427q-1.076-.034-2.153,0A1.412,1.412,0,0,0,6.668,3.694v.594m4.864,0a31.56,31.56,0,0,0-4.864,0"
          transform="translate(-3.172 -1.749)"
          fill="none"
          stroke="var(--color-svg-100)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
      </svg>
    </button>
  );
}
