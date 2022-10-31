import Link from "next/link"

interface AlreadyUserProps {
    text: string
    href: string
    hreftext: string
}

export default function AlreadyUser({text, href, hreftext} : AlreadyUserProps) : JSX.Element {
    return (
        <div className='flex flex-row justify-center gap-x-2'>
            <p className="text-gray-900 text-opacity-60 font-normal">{text}</p>
            <Link href={href} className="hover:underline font-medium">{hreftext}</Link>
        </div>
    );
}