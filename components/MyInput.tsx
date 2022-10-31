export default function MyInput({ name, type, placeholder, label }: { name: string, type: string, placeholder:string, label: string }) : JSX.Element {
    return (
        <label className="flex flex-col gap-y-1 text-gray-900 text-opacity-95 capitalize font-medium">
            {label}
        <input
        className='border font-normal p-3 rounded-lg focus:ring-red-600 focus:outline-none focus:border-gray-900'
        type={type}
        name={name} 
        placeholder={placeholder}
        />
        </label>
    );
}