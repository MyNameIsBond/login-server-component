import Note from './Note';

export default function SideNotes({ notes }) {
  return (
    <div className="p-5 flex flex-col gap-y-5">
      {notes?.map((note: any) => (
        <Note key={note.id} {...note} />
      ))}
    </div>
  );
}
