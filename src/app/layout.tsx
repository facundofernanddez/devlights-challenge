import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import TotalPriceProvider from "@/components/providers/TotalPriceProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} bg-[#090908] text-white h-full max-w-full`}
      >
        <TotalPriceProvider>
          <Navbar />

          {children}

          <Footer />
        </TotalPriceProvider>
      </body>
    </html>
  );
}
