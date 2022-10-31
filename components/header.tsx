interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: HeaderProps): JSX.Element {
  return (
    <header className=''>
      <h1 className='text-6xl text-white font-bold'>{title}</h1>
      <h2>{subtitle}</h2>
    </header>
  );
}
