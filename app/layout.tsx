import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Johnson Mwakazi | Senior Software Engineer",
  description: "Portfolio of Johnson Mwakazi - Senior Software Engineer with 5 years of experience in building exceptional digital experiences using React, Next.js, React Native, and Node.js",
  keywords: ["Johnson Mwakazi", "Software Engineer", "Fullstack Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Johnson Mwakazi" }],
  openGraph: {
    title: "Johnson Mwakazi | Senior Software Engineer",
    description: "Portfolio of Johnson Mwakazi - Senior Software Engineer specializing in React, Next.js, and Node.js",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
