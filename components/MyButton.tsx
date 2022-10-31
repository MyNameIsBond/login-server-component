interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    dark: boolean;
}

export default function MyButton({ children, dark, ...props  }: ButtonProps): JSX.Element {
  return (
    <button
      className={`${ dark ? 'bg-gray-900 text-gray-200' :  'bg-white text-gray-800' } bg-opacity-95 font-medium hover:bg-opacity-100  py-3 rounded-lg`}
      {...props}
    >
      {children}
    </button>
  );
}