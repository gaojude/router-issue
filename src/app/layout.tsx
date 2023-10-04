import { ReactNode } from "react";

export const metadata = {
  title: "Learn next.js router",
  description: "Learn next.js router",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
