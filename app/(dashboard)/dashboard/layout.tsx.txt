import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../app/globals.css";
import { Toaster } from "sonner";
import ReactQueryProvider from "@/lib/ReactQueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pump 360",
  description: "Powered by Moksha Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          {children}
          <Toaster position="top-center" richColors />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
