import type { Metadata } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amirhossein Jamshidi",
  description:
    "Personal Portfolio — Web Developer specializing in React and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${vazirmatn.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black font-sans text-base text-zinc-300">
        {children}
      </body>
    </html>
  );
}
