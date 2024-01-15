import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HomeContainer from "@/containers/HomeContaniner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Developed by RubikMH",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen p-4 relative bg-[#7EB5A6] text-[#86340A]  w-full`}
      >
        <HomeContainer>{children}</HomeContainer>
      </body>
    </html>
  );
}
