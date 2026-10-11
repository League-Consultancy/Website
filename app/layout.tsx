import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leagueconsultancy.com"),
  title: {
    default: "LEAGUE Consultancy | AI, Robotics, Software & Product Engineering",
    template: "%s | LEAGUE Consultancy",
  },
  description:
    "LEAGUE Consultancy engineers custom technology solutions across AI, software, computer vision, robotics, IoT and mechanical engineering. Based in Ahmedabad, serving clients globally.",
  keywords: [
    "AI consultancy",
    "robotics engineering",
    "computer vision",
    "IoT",
    "software development",
    "product engineering",
    "Ahmedabad",
    "India",
    "machine learning",
    "automation",
    "mechanical engineering",
  ],
  authors: [{ name: "LEAGUE Consultancy" }],
  creator: "LEAGUE Consultancy",
  publisher: "LEAGUE Consultancy",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://leagueconsultancy.com",
    siteName: "LEAGUE Consultancy",
    title: "LEAGUE Consultancy | AI, Robotics, Software & Product Engineering",
    description:
      "LEAGUE Consultancy engineers custom technology solutions across AI, software, computer vision, robotics, IoT and mechanical engineering.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LEAGUE Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LEAGUE Consultancy | AI, Robotics & Product Engineering",
    description:
      "Custom technology solutions engineered across AI, software, computer vision, robotics, IoT and mechanical engineering.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/logo-white.svg",
    shortcut: "/logo-white.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
