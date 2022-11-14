import { ReactNode } from 'react';
import Footer from '../components/Home/Footer';
import Nav from '../components/Home/Nav';
import './global.css';
import { Providers } from './providers';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-gray-100">
      <body>
        <Providers>
          <Nav />
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
