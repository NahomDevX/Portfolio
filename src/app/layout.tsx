import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Nahom Bekele | Full Stack Developer & Designer",
  description:
    "Portfolio of Nahom Bekele — Full Stack Developer, Graphic Designer, and Video Editor specializing in scalable platforms and compelling digital experiences.",
  keywords: [
    "Nahom Bekele",
    "Full Stack Developer",
    "Web Developer",
    "Designer",
    "Video Editor",
    "Portfolio",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Nahom Bekele" }],
  openGraph: {
    title: "Nahom Bekele | Full Stack Developer & Designer",
    description:
      "Portfolio of Nahom Bekele — Full Stack Developer, Graphic Designer, and Video Editor.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nahom Bekele | Full Stack Developer & Designer",
    description:
      "Portfolio of Nahom Bekele — Full Stack Developer, Graphic Designer, and Video Editor.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
        <CustomCursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
