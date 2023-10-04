import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    console.log("layout for logged in header group is used")
  return (
    <>
      <header>Header (For Logged-In Users Only)</header>
      {children}
    </>
  );
}
