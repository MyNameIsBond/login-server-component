import { ReactNode } from 'react';
import SideBar from '../../components/notes/SideBar';

interface LoginProps {
  children: ReactNode;
}

export default async function LoginLayout({ children }: LoginProps) {
  return (
    <section className="flex flex-row h-screen sticky top-10">
      <SideBar />
      {children}
    </section>
  );
}
