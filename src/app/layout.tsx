import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodePath - CS Graduation Planner",
  description: "Smart graduation planner for Computer Science students at MSU Denver",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
