import Link from 'next/link';
import MyForm from '../../components/MyForm';

export default function Home() {
  return (
    <div>
      <main>
        <Link href='/register'>register</Link>
        <MyForm />
      </main>
    </div>
  );
}
