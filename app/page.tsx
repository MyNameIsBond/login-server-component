import Link from 'next/link';

export default function Home() {
  return (
    <main className="dark:bg-gray-900 h-full">
      <Link href="/note" className="text-blue-500">
        Go To Notes
      </Link>
      <div>what</div>
      <div>ever</div>
    </main>
  );
}
