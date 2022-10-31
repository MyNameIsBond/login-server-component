import Link from "next/link"

export default function Nav() {
    return (
        <nav className='flex items-center justify-between w-full px-10 py-4 bg-white shadow-md'>
        <Link href='/' className='text-2xl font-bold text-blue-500'>
            The Happy Programmer
        </Link>
        <div className='flex items-center gap-x-4'>
            <Link className='underline text-blue-500' href='/login'>
            Login
            </Link>
            <Link className='underline text-blue-500' href='/register'>
            Register
            </Link>
        </div>
        </nav>
    );
}