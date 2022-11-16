'use client';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="flex items-center content-center justify-between w-full px-10 py-5 bg-gray-50 dark:bg-neutral-900 border-b dark:border-neutral-50 dark:border-opacity-10 sticky top-0 z-10">
      <Link
        href="/"
        className="text-2xl font-semibold dark:text-neutral-200 text-gray-800"
      >
        The Happy Notes
      </Link>
      <div className="flex items-center gap-x-4">
        <Link className="dark:text-neutral-50 text-gray-800" href="/login">
          Login
        </Link>
        <Link
          className="py-3 bg-gray-900 text-gray-50 px-6 dark:bg-indigo-800 rounded-lg"
          href="/register"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}
