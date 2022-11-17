import { use } from 'react';
import MyTextArea from '../../../../components/notes/edit/MyTextArea';
import { textToRemark } from '../../../../utils/textToRemark';

const fetchNote = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/note/${id}`);
  const res = await response.json();
  const { title, data, created_at } = res[0];
  const content = await textToRemark(data);
  return { title, data, created_at, content };
};

export default function SearchNotes({ params }: { params: { id: string } }) {
  const { id } = params;

  const { data } = use(fetchNote(id));

  return (
    <div className="h-full w-full dark:bg-neutral-900">
      <MyTextArea data={data} />
    </div>
  );
}
