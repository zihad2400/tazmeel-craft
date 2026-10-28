import { Inter, Playfair_Display, Italianno } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const italianno = Italianno({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-italianno",
});

export const metadata = {
  title: "Tazmeel Craft — Islamic & Modest Garments Manufacturer",
  description:
    "Dhaka-based manufacturer of premium Islamic and modest clothing since 2020. Thobes, Panjabis, Abayas, Hijabs, and custom apparel for brands.",
  keywords: [
    "Tazmeel Craft",
    "Islamic clothing manufacturer",
    "modest wear Bangladesh",
    "Thobe manufacturer",
    "Panjabi exporter",
    "Abaya manufacturer Dhaka",
  ],
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#0F3D2E" />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${playfair.variable} ${italianno.variable} font-sans antialiased`}
      >
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
