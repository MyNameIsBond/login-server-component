import { ReactNode } from 'react';
import Nav from '../components/Home/Nav';
import './global.css';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-gray-100 overflow-y-auto">
      <body className="bg-gray-100 overflow-y-auto h-screen w-screen dark:bg-neutral-900">
        <Nav />
        <>{children}</>
      </body>
    </html>
  );
}
