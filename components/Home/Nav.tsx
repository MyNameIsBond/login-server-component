import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="flex items-center content-center justify-between w-full px-10 py-5 bg-white dark:bg-neutral-900 border-b dark:border-neutral-50 dark:border-opacity-10">
      <Link
        href="/"
        className="text-2xl font-semibold dark:text-neutral-200 text-gray-800"
      >
        The Happy Notes
      </Link>
      <div className="group relative float-left">
        <div className="absolute inset-y-0 left-0 ml-3.5 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            height="16"
            width="16"
            className="stroke-current text-gray-500 group-hover:text-gray-600 dark:text-neutral-500 dark:group-hover:text-neutral-50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"
            ></path>
          </svg>
        </div>
        <input
          className="focus:outline-none rounded-full border border-gray-900 border-opacity-10 dark:border-opacity-10 py-2 pl-10 pr-3 text-sm text-gray-900 focus:border-gray-900 group-hover:border-gray-600 dark:border-neutral-50 dark:bg-neutral-900 dark:text-neutral-50 dark:group-hover:border-gray-50 focus:ring focus:ring-gray-900 focus:ring-opacity-10"
          type="search"
          id="site-search"
          name="q"
          placeholder="search..."
        />
      </div>
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
