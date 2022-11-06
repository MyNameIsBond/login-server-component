import { ReactNode } from 'react';
import { supabase } from '../../utils/supabaseclient';

interface LoginProps {
  children: ReactNode;
}
const mynotes = async () => {
  const { data: notes, error } = await supabase.from('notes').select('id');
  console.log('noteds', notes);
  return { notes, error };
};

export default async function LoginLayout({ children }: LoginProps) {
  const { notes, error } = mynotes();

  return (
    <section className="flex flex-row">
      <div className="flex flex-col">
        {error && <div>{error?.message}</div>}
        {notes?.map((note) => (
          <p>{note.id}</p>
        ))}
      </div>
      {children}
    </section>
  );
}
