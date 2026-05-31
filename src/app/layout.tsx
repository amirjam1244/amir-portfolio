import type { Metadata } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import { AuthProvider } from "@/context/AuthProvider";
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
    "Frontend Developer building modern, fast and responsive web applications with React and Next.js. I help businesses and individuals turn ideas into high-quality digital products.",
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
      <body className="min-h-full bg-[#08080d] font-sans text-base text-zinc-300">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
