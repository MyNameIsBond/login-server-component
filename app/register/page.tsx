import MyHeader from "../../components/MyHeader"
import RegisterForm from "../../components/RegisterForm"

export default function Login() {
  return (
      <main className='flex flex-col items-center pt-52 gap-y-10 w-full h-screen dark:bg-gray-800'>
        <MyHeader title='Register With Us' subtitle='enter your credentials to register'/>
        <RegisterForm />
      </main>
  );
}