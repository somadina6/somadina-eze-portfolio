import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Somadina Eze's Portfolio",
  description: "A developer with skilled in modern technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <main className="dark dark:text-white dark:bg-black text-black w-screen font-normal px-6 md:px-12 pb-4 min-h-lvh overflow-x-hidden">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
