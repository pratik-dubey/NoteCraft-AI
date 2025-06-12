import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { url } from "inspector";
import { ThemeProvider } from "@/components/Providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NoteCraft AI",
  description: "Supportive workspace for innovation and growth",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/hexagon-letter-n.svg",
        href: "/hexagon-letter-n.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/n.svg",
        href: "/n.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="NoteCraft-2"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
