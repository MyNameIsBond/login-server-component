import { ReactNode } from 'react';
import Note from '../../components/notes/Note';
import { supabase } from '../../utils/supabaseclient';

interface LoginProps {
  children: ReactNode;
}

export default async function LoginLayout({ children }: LoginProps) {
  const { data: notes, error } = await supabase.from('notes').select('*');

  return (
    <section className="flex flex-row h-screen sticky top-10">
      <div className="flex flex-col gap-y-5 border-r dark:border-neutral-50 dark:border-opacity-10 bg-gray-200 dark:bg-neutral-900 dark:text-neutral-100">
        {notes?.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </div>
      {children}
    </section>
  );
}
