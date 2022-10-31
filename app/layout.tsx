import './global.css';
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-gray-100'>
        {children}
      </body>
      <footer>
        <p className='text-blue-500'>Footer</p>
      </footer>
    </html>
  );
}
