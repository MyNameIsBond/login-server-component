import LoginForm from '../../components/LoginForm';
import MyHeader from '../../components/MyHeader';

export default function Login() {
  return (
    <div className="">
      <main className="flex flex-col items-center pt-52 gap-y-10 w-full h-screen dark:bg-neutral-900 dark:bg-opacity-95">
        <MyHeader
          title="Welcome Back"
          subtitle="enter your credentials to connect"
        />
        <LoginForm />
      </main>
    </div>
  );
}
