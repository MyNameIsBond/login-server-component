import MyForm from '../../components/MyForm';
import MyHeader from '../../components/MyHeader'

export default function Home() {
  return (
    <div className=''>
      <main className='flex flex-col items-center pt-52 gap-y-20 w-full h-screen'>
        <MyHeader title='Welcome Back' subtitle='enter your credentials to connect'/>
        <MyForm />
      </main>
    </div>
  );
}
