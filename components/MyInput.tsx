interface MyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  placeholder: string;
  label: string;
  minLength?: number;
}

export default function MyInput({
  name,
  type,
  placeholder,
  label,
  minLength,
  ...props
}: MyInputProps): JSX.Element {
  return (
    <label
      htmlFor={name}
      className="flex flex-col gap-y-1 text-gray-900 dark:text-neutral-50 text-opacity-95 capitalize font-medium"
    >
      {label}
      <input
        minLength={minLength}
        {...props}
        required
        className="border font-normal p-3 rounded-lg focus:ring-gray-900 focus:ring-opacity-10 focus:outline-none focus:border-gray-900 dark:focus:border-neutral-300 dark:bg-neutral-700 dark:border-neutral-50 dark:border-opacity-20 focus:ring"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </label>
  );
}
