import { ReactNode } from 'react';
import { supabase } from '../../utils/supabaseclient';

interface LoginProps {
  children: ReactNode;
}

export default async function LoginLayout({ children }: LoginProps) {
  const { data: notes, error } = await supabase.from('notes').select('*');

  return (
    <section className="flex flex-row">
      <div className="flex flex-col">
        {error && <div>{error?.message}</div>}
        {notes?.map((note) => (
          <p>{note}</p>
        ))}
      </div>
      {children}
    </section>
  );
}
