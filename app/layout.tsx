import { ReactNode } from 'react';
import Footer from '../components/Home/Footer'
import Nav from '../components/Home/Nav'
import './global.css';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className='bg-gray-100'>
      <body>
        <Nav />
        {children}
      <Footer/>
      </body>
    </html>
  );
}
