import Nav from '../components/Home/Nav'
import './global.css';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='bg-gray-100'>
      <Nav />
      <body >
        {children}
      </body>
      <footer className='py-10'>
        <p className='text-blue-500'>Footer</p>
      </footer>
    </html>
  );
}
