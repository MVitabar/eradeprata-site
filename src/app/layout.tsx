import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Geist({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Era de Prata | Jornada Artística Abstrata",
  description: "Era de Prata é uma composição artística abstrata que explora os ciclos da consciência humana através de três épocas: Descoberta, Transformação e Eternidade. Uma jornada filosófica materializada em prata.",
  keywords: ["era de prata", "arte abstrata", "jornada artística", "consciência", "metafora", "filosofia", "prata", "três épocas", "descoberta", "transformação", "eternidade"],
  authors: [{ name: "Era de Prata" }],
  creator: "Era de Prata",
  publisher: "Era de Prata",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://eradeprata.com"),
  alternates: {
    canonical: "https://eradeprata.com",
  },
  openGraph: {
    title: "Era de Prata | Jornada Artística Abstrata",
    description: "Uma composição artística abstrata que explora os ciclos da consciência humana através de três épocas fundamentais.",
    url: "https://eradeprata.com",
    siteName: "Era de Prata",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://eradeprata.com/IMGCONFONDO.PNG",
        width: 1200,
        height: 630,
        alt: "Era de Prata - Jornada Artística",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Era de Prata | Jornada Artística Abstrata",
    description: "Uma composição artística abstrata que explora os ciclos da consciência humana através de três épocas fundamentais.",
    images: ["https://eradeprata.com/IMGCONFONDO.PNG"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
