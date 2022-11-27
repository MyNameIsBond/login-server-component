'use client';
import { useRouter } from 'next/navigation';

export default function SaveBtn({ id, data }: { id: string; data: string }) {
  const router = useRouter();
  const saveNew = async () => {
    const title = data.split(/\r?\n/)[0].replace('#', '');
    const e = fetch('/api/note/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data, title }),
    });
  };

  const updateNote = () => {
    const title = data.split(/\r?\n/)[0].replace('#', '');
    fetch(`http://localhost:3000/api/note/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data, title }),
    });
  };
  return (
    <div
      onClick={(e) => {
        if (id === '' || id === undefined || id === null) {
          saveNew();
        } else {
          updateNote();
        }
      }}
      className="dark:bg-gray-50 bg-gray-900 rounded-md bg-opacity-5 dark:bg-opacity-5 hover:bg-opacity-20 cursor-pointer p-2 backdrop-blur-md"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="13"
        viewBox="0 0 13 13"
      >
        <path
          id="Icon_awesome-save"
          data-name="Icon awesome-save"
          d="M12.592,5.092,10.158,2.658a1.393,1.393,0,0,0-.985-.408H1.393A1.393,1.393,0,0,0,0,3.643V13.857A1.393,1.393,0,0,0,1.393,15.25H11.607A1.393,1.393,0,0,0,13,13.857V6.077a1.393,1.393,0,0,0-.408-.985ZM6.5,13.393a1.857,1.857,0,1,1,1.857-1.857A1.857,1.857,0,0,1,6.5,13.393ZM9.286,4.556V7.473a.348.348,0,0,1-.348.348H2.205a.348.348,0,0,1-.348-.348V4.455a.348.348,0,0,1,.348-.348H8.837a.348.348,0,0,1,.246.1l.1.1A.348.348,0,0,1,9.286,4.556Z"
          transform="translate(0 -2.25)"
          fill="var(--color-svg-100)"
        />
      </svg>
    </div>
  );
}
