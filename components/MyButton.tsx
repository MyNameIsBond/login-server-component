interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  dark: boolean;
}

export default function MyButton({
  children,
  dark,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className={`${
        dark
          ? 'bg-gray-900 text-gray-200'
          : 'bg-white text-gray-800 border hover:bg-opacity-20'
      } bg-opacity-95 font-medium hover:bg-opacity-100  py-3 rounded-lg flex flex-row justify-center items-center gap-x-2 w-full`}
      {...props}
    >
      {children}
    </button>
  );
}
