import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { inter } from "@/app/ui/fonts";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NexusAI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body className="overflow-hidden bg-gradient-to-bl from-[#020308] via-[#00010a] to-[#2e0202] text-white font-display">
        <div className="flex h-screen md:flex-row">
        
        

          {/* Main content area (scrolls independently) */}
          <div className="flex-grow  md:overflow-y-auto ">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
