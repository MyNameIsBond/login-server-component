import { ReactNode } from 'react';
import SideBar from '../../components/notes/SideBar';

interface LoginProps {
  children: ReactNode;
}

export default async function LoginLayout({ children, params }: LoginProps) {
  console.log('PARAMS', params);
  return (
    <section className="flex flex-row w-full">
      <SideBar />
      {children}
    </section>
  );
}
