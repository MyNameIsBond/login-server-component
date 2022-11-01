import Link from 'next/link';

interface AlreadyUserProps {
  text: string;
  href: string;
  hreftext: string;
}

export default function AlreadyUser({
  text,
  href,
  hreftext,
}: AlreadyUserProps): JSX.Element {
  return (
    <div className="flex flex-row justify-center gap-x-2">
      <p className="text-gray-900 dark:text-opacity-60 text-opacity-60 font-normal dark:text-gray-50">
        {text}
      </p>
      <Link
        href={href}
        className="hover:underline font-medium dark:text-gray-50"
      >
        {hreftext}
      </Link>
    </div>
  );
}
