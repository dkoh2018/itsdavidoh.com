import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import cn from "classnames";
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
      className={`overflow-y-auto bg-darkSlate text-darkText ${GeistMono.className}`}
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </head>
      <body>
        <HeaderSection />
        <div className="flex-grow">{children}</div>
      </body>
    </html>
  );
}
