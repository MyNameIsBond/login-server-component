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
      <MyButton type='submit' dark={false}><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 0C6.26875 0 0 6.43125 0 14.3563C0 20.7 4.0125 26.075 9.575 27.975C9.65302 27.9919 9.73266 28.0003 9.8125 28C10.3313 28 10.5312 27.6188 10.5312 27.2875C10.5312 26.9438 10.5187 26.0438 10.5125 24.8438C10.0494 24.9523 9.57564 25.0089 9.1 25.0125C6.40625 25.0125 5.79375 22.9188 5.79375 22.9188C5.15625 21.2625 4.2375 20.8188 4.2375 20.8188C3.01875 19.9625 4.23125 19.9375 4.325 19.9375H4.33125C5.7375 20.0625 6.475 21.425 6.475 21.425C7.175 22.65 8.1125 22.9937 8.95 22.9937C9.50377 22.9827 10.049 22.8549 10.55 22.6187C10.675 21.6937 11.0375 21.0625 11.4375 20.7C8.33125 20.3375 5.0625 19.1062 5.0625 13.6062C5.0625 12.0375 5.60625 10.7563 6.5 9.75625C6.35625 9.39375 5.875 7.93125 6.6375 5.95625C6.73978 5.93178 6.8449 5.92126 6.95 5.925C7.45625 5.925 8.6 6.11875 10.4875 7.43125C12.781 6.78957 15.2065 6.78957 17.5 7.43125C19.3875 6.11875 20.5313 5.925 21.0375 5.925C21.1426 5.92126 21.2477 5.93178 21.35 5.95625C22.1125 7.93125 21.6312 9.39375 21.4875 9.75625C22.3812 10.7625 22.925 12.0437 22.925 13.6062C22.925 19.1187 19.65 20.3313 16.5312 20.6875C17.0312 21.1312 17.4813 22.0063 17.4813 23.3438C17.4813 25.2625 17.4625 26.8125 17.4625 27.2812C17.4625 27.6188 17.6562 28 18.175 28C18.259 28.0004 18.3428 27.992 18.425 27.975C23.9937 26.075 28 20.6938 28 14.3563C28 6.43125 21.7312 0 14 0Z" fill="black"/>
</svg>
 Log in with GitHub</MyButton>
      <AlreadyUser text="You are not a member?" hreftext="sign up" href="/register" />
    </form>
  );
}
