import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
      <body className={`${outfit.className} antialiased`}>{children}</body>
    </html>
  );
}
