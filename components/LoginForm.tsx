import AlreadyUser from './AlreadyUser';
import FormSceleton from './FormSceleton';
import MyButton from './MyButton';
import MyInput from './MyInput';
import Image from 'next/image';

const OrDivider = ({ title }: { title: string }) => (
  <div className="flex items-center">
    <div className="mr-3 flex-grow border-t border-gray-900 border-opacity-5 dark:border-gray-50"></div>
    <div className="text-gray-900 text-opacity-25 dark:text-gray-50">
      {title}
    </div>
    <div className="ml-3 flex-grow border-t border-gray-900 border-opacity-5 dark:border-gray-50"></div>
  </div>
);

export default function MyForm({}): JSX.Element {
  return (
    <FormSceleton action="/api/login" method="post">
      <MyInput
        name="email"
        type="email"
        placeholder="example@mail.com"
        label="Email"
      />
      <MyButton type="submit" dark={true}>
        Send me the magic link
      </MyButton>
      <OrDivider title="or" />
      <MyButton type="submit" dark={false}>
        <Image src="/github.svg" alt="github" width={20} height={20} />
        Log in with GitHub
      </MyButton>
      <AlreadyUser
        text="You are not a member?"
        hreftext="sign up"
        href="/register"
      />
    </FormSceleton>
  );
}
