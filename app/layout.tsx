import './global.css';
export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-gray-50 flex-row flex'>
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen w-1/2 m-2 rounded-lg'></div>
        <div className='w-1/2 h-full'>{children}</div>
      </body>
      <footer>
        <p className='text-blue-500'>Footer</p>
      </footer>
    </html>
  );
}
