import AlreadyUser from "./AlreadyUser"
import MyButton from "./MyButton"
import MyInput from "./MyInput"
import RememberMe from "./RememberMe"

export default function MyForm({}) : JSX.Element {
  return (
    <form
      action='/api/login'
      method='post'
      className='flex flex-col max-w-md gap-y-4 w-96'
    >
      <MyInput name='email' type='email' placeholder='example@mail.com' label='Email' />
      <MyInput name='password' type='password' placeholder='password' label='password' />
      <RememberMe />
      <MyButton type='submit' dark={true}>Log in</MyButton>
      <MyButton type='submit' dark={false}>Log in with GitHub</MyButton>
      <AlreadyUser text="You are not a member?" hreftext="sign up" href="/register" />
    </form>
  );
}
