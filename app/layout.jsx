import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { ThemeProvider } from "@/components/ThemeProvider"; // تأكد من وجود هذا الملف

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Islam Heriez | ERP & SAP Consultant Portfolio",
  description:
    "Portfolio of Islam Heriez – SAP S/4HANA Project Manager & ERP Consultant. Expert in SME digital transformation in Egypt & the Gulf.",
  keywords: [
    "ERP",
    "SAP",
    "S/4HANA",
    "Portfolio",
    "Islam Heriez",
    "Project Manager",
    "Business Analyst",
  ],
  authors: [{ name: "Islam Heriez", url: "https://islamheriez.vercel.app" }],
  openGraph: {
    title: "Islam Heriez | ERP & SAP Consultant Portfolio",
    description:
      "Discover the portfolio of Islam Heriez, an experienced SAP S/4HANA Project Manager & ERP Consultant.",
    url: "https://islamheriez.vercel.app",
    type: "website",
    siteName: "Islam Heriez Portfolio",
    images: [
      {
        url: "/assets/loki.jpg",
        width: 800,
        height: 600,
        alt: "Islam Heriez",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Islam Heriez | ERP & SAP Consultant Portfolio",
    description:
      "ERP Project Manager & SAP Consultant focused on SME digital transformation.",
    images: ["/assets/loki.jpg"],
    creator: "@IslamHeriez",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
