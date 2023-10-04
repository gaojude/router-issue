import { ReactNode } from "react";

export const metadata = {
  title: "Learn next.js router",
  description: "Learn next.js router",
};

export default function RootLayout({
  children,
  retailer,
  visitor,
}: {
  children: ReactNode;
  retailer: ReactNode;
  visitor: ReactNode;
}) {
  return (
    <html lang="en">
      <h1>ROOT</h1>
      <body>{visitor}</body>
    </html>
  );
}
