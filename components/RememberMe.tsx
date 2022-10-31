import Link from "next/link"

export default function RememberMe({}) : JSX.Element {
    return (
        <div className='flex flex-row place-content-between items-center gap-x-2 py-2'>
        <div className="flex flex-row gap-x-2 items-center">
        <input type='checkbox' id='remember-me' name='remember-me' />
        <label htmlFor='remember-me' className="text-gray-900 text-opacity-60 font-normal">Remember me</label>
        </div>
        <Link href='/forgot-password' className="hover:underline font-semibold">Forgot Password</Link>
        </div>
    );
}