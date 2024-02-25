import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/base/AuthProvider";
import Header from "@/components/base/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb-Clone",
  description: "Hotel Booking site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
