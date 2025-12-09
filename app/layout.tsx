import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Mangoblyss | Mango Sticky Rice & Pudding",
  description: "Authentic Mango Sticky Rice & Homemade Pudding di Sawojajar, Malang. Fresh, Tropical, & Creamy desserts.",
  keywords: "mango sticky rice, pudding, dessert malang, kuliner sawojajar, mangoblyss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${outfit.variable} font-sans antialiased text-text-gray bg-white flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
