import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ViewTransitions } from 'next-view-transitions'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roy Afaryan",
  description: "Personal website showcasing who I am and what I've done!",
};

/* In case routing / transitions fail; check if "next-view-transitions" has been deprecated.
   Link to installation: https://next-view-transitions.vercel.app/#installation */
   
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
    </ViewTransitions>
  );
}
