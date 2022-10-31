interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function MyHeader({ title, subtitle }: HeaderProps): JSX.Element {
  return (
    <header className='tracking-wide flex flex-col gap-y-2 text-center'>
      <h1 className='text-5xl text-gray-900 text-opacity-90 font-bold dark:text-gray-50'>{title}</h1>
      <h2 className="text-gray-900 dark:text-gray-50 text-opacity-70">{subtitle}</h2>
    </header>
  );
}
