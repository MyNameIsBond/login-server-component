import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <main>
        <Link href='/register' className='underline text-blue-500'>Register</Link>
        <br />
        <Link href='/login' className='underline text-blue-500'>Login</Link>
        <h1>home</h1>
      </main>
    </div>
  );
}
