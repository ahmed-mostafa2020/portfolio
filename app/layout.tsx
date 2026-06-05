import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// ========================================
// Font Configuration
// ========================================
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// ========================================
// SEO Metadata
// ========================================
export const metadata: Metadata = {
  title: "Ahmed Mostafa | Senior Frontend Developer – React.js & Next.js",
  description:
    "Impact-driven Senior Frontend Developer specializing in the React.js and Next.js ecosystem. Proven track record of architecting scalable enterprise applications, optimizing web performance, and mentoring engineering teams.",
  keywords: [
    "Ahmed Mostafa",
    "Frontend Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Senior Developer",
    "Portfolio",
    "Cairo",
    "Egypt",
  ],
  authors: [{ name: "Ahmed Mostafa" }],
  creator: "Ahmed Mostafa",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ahmed Mostafa | Senior Frontend Developer",
    description:
      "Architecting scalable enterprise applications with React.js & Next.js. View my portfolio and featured projects.",
    siteName: "Ahmed Mostafa Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Mostafa | Senior Frontend Developer",
    description:
      "Architecting scalable enterprise applications with React.js & Next.js.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

// ========================================
// Root Layout
// ========================================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-midnight text-text-primary font-sans">
        {children}
      </body>
    </html>
  );
}
