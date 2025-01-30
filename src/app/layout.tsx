import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TEMU - Modern E-commerce Platform for Affordable Fashion & Electronics",
  description: "Shop TEMU's modern e-commerce marketplace for trending fashion, electronics, home goods, and lifestyle products. Enjoy fast shipping, easy returns, and competitive prices.",
  keywords: ["e-commerce", "online shopping", "affordable fashion", "electronics", "home decor", "trending products"],
  openGraph: {
    images: '/og-image.jpg',
    url: 'https://your-store-url.com',
  },
  twitter: {
    card: 'summary_large_image',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
