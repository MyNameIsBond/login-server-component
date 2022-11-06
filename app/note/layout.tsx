import { ReactNode } from 'react';
import { supabase } from '../../utils/supabaseclient';

interface LoginProps {
  children: ReactNode;
}

export default async function LoginLayout({ children }: LoginProps) {
  const { data: notes, error } = await supabase.from('notes').select('*');

  return (
    <section className="flex flex-row">
      <div className="flex flex-col bg-gray-200 dark:bg-gray-900">
        {error && <div>{error?.message}</div>}
        {notes?.map((note) => (
          <p>{note.title}</p>
        ))}
      </div>
      {children}
    </section>
  );
}
