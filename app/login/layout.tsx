import { ReactNode } from "react";

interface LoginProps {
  children: ReactNode;
}

export default function LoginLayout({ children }: LoginProps) {
  return <section>{children}</section>;
}
