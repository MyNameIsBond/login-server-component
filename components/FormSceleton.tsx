interface FormSceletonProps {
  children: React.ReactNode;
  action: string;
  method: string;
}

export default function FormSceleton({
  children,
  action,
  method,
  ...props
}: FormSceletonProps): JSX.Element {
  return (
    <form
      action={action}
      method={method}
      {...props}
      className="flex flex-col max-w-md gap-y-4 w-96"
    >
      {children}
    </form>
  );
}
