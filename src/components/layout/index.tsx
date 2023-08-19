import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return <div className="flex min-h-screen flex-col">{children}</div>;
}
