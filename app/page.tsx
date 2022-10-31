import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <main>
        <Link href='/register'>Register</Link>
        <br />
        <Link href='/login'>Login</Link>
        <h1>home</h1>
      </main>
    </div>
  );
}
