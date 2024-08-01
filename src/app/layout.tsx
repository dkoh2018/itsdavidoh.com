import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";
import HeaderSection from "./_components/headersection";
import "./globals.css";

export const metadata: Metadata = {
  title: `davidoh`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistMono.className}`}
      suppressHydrationWarning
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </head>
      <body className="overflow-y-auto bg-darkSlate text-darkText">
        <ThemeProvider attribute="class">
          <HeaderSection />
          <div className="flex-grow">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
