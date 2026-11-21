import type { Metadata } from "next";
import { Noto_Serif_Gujarati } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Providers } from "@/components/Providers";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

// to applay the font Noto Serif Gujarati to our application
const notoSerifGujarati = Noto_Serif_Gujarati({
  subsets: ["latin"],
  weight: "400",
});

// meta data of our project
export const metadata: Metadata = {
  title: "Amazon Clone",
  description: "Amazon-style storefront built with Next.js, TypeScript and Redux Toolkit.",
  authors: [{ name: "Abdelrahman Beaih" }],
  keywords: ["Amazon Clone", "Next.js", "TypeScript", "Redux Toolkit"],
  openGraph: {
    title: "Amazon Clone",
    description:
      "Amazon-style storefront built with Next.js, TypeScript and Redux Toolkit.",
    url: "https://your-deployed-link.com",
    siteName: "Amazon Clone",
    images: [
      {
        url: "/public/amazonCard.jpg",
        width: 600,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={notoSerifGujarati.className} suppressHydrationWarning>
        <Providers>
          <div suppressHydrationWarning>
            <header suppressHydrationWarning>
              <Header />
            </header>
            <main suppressHydrationWarning>{children}</main>
            <footer suppressHydrationWarning>
              <Footer />
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
