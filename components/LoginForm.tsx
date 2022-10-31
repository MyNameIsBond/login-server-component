import AlreadyUser from "./AlreadyUser"
import FormSceleton from "./FormSceleton"
import MyButton from "./MyButton"
import MyInput from "./MyInput"
import RememberMe from "./RememberMe"
import Image from 'next/image'
export default function MyForm({}) : JSX.Element {
  return (
    <FormSceleton
      action='/api/login'
      method='post'
    >
      <MyInput name='email' type='email' placeholder='example@mail.com' label='Email' />
      <MyInput name='password' type='password' placeholder='password' label='password' />
      <RememberMe />
      <MyButton type='submit' dark={true}>Log in</MyButton>
      <MyButton type='submit' dark={false}>
      <Image src='/github.svg' alt='github' width={20} height={20} />
 Log in with GitHub</MyButton>
      <AlreadyUser text="You are not a member?" hreftext="sign up" href="/register" />
    </FormSceleton>
  );
}
