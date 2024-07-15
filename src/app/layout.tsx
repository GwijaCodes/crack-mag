import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./variables.css"
import "./globals.css";
import Header from "@/components/Header";

//import aos css
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crack! Magazine",
  description: "Ancora un altro magazine sul DIY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="{inter.className}" >
        <Header/>
        {children}
        </body>
    </html>
  );
}
