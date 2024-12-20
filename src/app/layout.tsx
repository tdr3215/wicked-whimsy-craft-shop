import type { Metadata } from "next";
import { Outfit, Grenze_Gotisch } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const LogoFont = Grenze_Gotisch({
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Wicked Whimsy Craft Shop",
    absolute: "Wicked Whimsy Craft Shop",
  },
  description: "A Knit, Crochet, and Fiber Arts Online Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/wicked-whimsy-fav-icon.png"
          sizes="any"
        />
      </head>
      <body className={`${outfit.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
