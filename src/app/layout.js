import { DM_Sans, Archivo } from "next/font/google";
import "@/styles/app.min.css";
import "@/styles/fontawesome.min.css";
import "@/styles/style.css";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  shrinkToFit: "no",
};

export const metadata = {
  title: {
    default: "Indian Best Packers & Movers | Professional Shifting Services",
    template: "%s | Indian Best Packers & Movers",
  },
  description: "Indian Best Packers & Movers Jaipur offers reliable house shifting, office relocation, car shipping, and packing services in Jaipur and all over India.",
  metadataBase: new URL("https://www.indianbestpackersmovers.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Indian Best Packers & Movers | Professional Shifting Services",
    description: "Indian Best Packers & Movers Jaipur offers reliable house shifting, office relocation, car shipping, and packing services in Jaipur and all over India.",
    url: "https://www.indianbestpackersmovers.com",
    siteName: "Indian Best Packers & Movers",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/img/logo.png",
        width: 800,
        height: 600,
        alt: "Indian Best Packers & Movers Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Best Packers & Movers | Professional Shifting Services",
    description: "Indian Best Packers & Movers Jaipur offers reliable house shifting, office relocation, car shipping, and packing services in Jaipur and all over India.",
    images: ["/assets/img/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/img/favicon.png",
    shortcut: "/assets/img/favicon.png",
    apple: "/assets/img/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
