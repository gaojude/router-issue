import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  console.log("layout for logged in dynamic header is used");
  return (
    <>
      <header>HEADER | /[dynamic]/(header)/layout.tsx</header>
      {children}
    </>
  );
}
