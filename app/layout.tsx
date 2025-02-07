import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import Footer from "@/components/layouts/footer";
import { cn } from "@/lib/utils";

import { Analytics } from "@vercel/analytics/next";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://darshandhakal.vercel.app"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Darshan Dhakal",
    template: "%s | Darshan Dhakal ",
  },
  description: "Fullstack Webdeveloper | React, Next, Wordpress and others",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn("antialiased tracking-tight font-sans", inter.variable)}
        >
          <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-background text-gray-900">
            <main className="max-w-[60ch] mx-auto w-full space-y-6 prose">
              {children}
            </main>
            <Footer />
          </div>

          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
}
