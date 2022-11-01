import AlreadyUser from './AlreadyUser';
import FormSceleton from './FormSceleton';
import MyButton from './MyButton';
import MyInput from './MyInput';
export default function MyForm({}): JSX.Element {
  return (
    <FormSceleton action="/api/register" method="post">
      <MyInput
        name="name"
        type="username"
        placeholder="username"
        label="username"
      />
      <MyInput
        name="email"
        type="email"
        placeholder="example@mail.com"
        label="email"
      />
      <MyInput
        name="password"
        type="password"
        placeholder="password"
        label="password"
      />
      <MyButton type="submit" dark={true}>
        Register
      </MyButton>
      <AlreadyUser text="already a member?" hreftext="sign in" href="/login" />
    </FormSceleton>
  );
}
