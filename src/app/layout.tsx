import { ReactNode } from "react";

export default function Layout({
  children,
  a,
  b,
}: {
  children: ReactNode;
  a: ReactNode;
  b: ReactNode;
}) {
  return (
    <html lang="en">
      <div>
        <h1>children</h1>
        {children}
      </div>

      <div>
        <h1>a</h1>
        {a}
      </div>

      <div>
        <h1>b</h1>
        {b}
      </div>
    </html>
  );
}
