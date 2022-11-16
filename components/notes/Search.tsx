interface SearchProps {
  search: string;
  setSearch: (search: string) => void;
}

export default function Search({ search, setSearch }: SearchProps) {
  return (
    <div className="group relative float-left w-full">
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
        maxLength={60}
        className="w-full focus:outline-none rounded-full border border-gray-900 border-opacity-10 dark:border-opacity-10 py-2 pl-10 pr-3 text-sm text-gray-900 focus:border-gray-900 group-hover:border-gray-600 dark:border-neutral-50 dark:bg-neutral-900 dark:text-neutral-50 dark:group-hover:border-gray-50 focus:ring focus:ring-gray-900 focus:ring-opacity-10"
        type="search"
        id="site-search"
        name="q"
        placeholder="search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
