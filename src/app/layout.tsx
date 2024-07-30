import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import Container from "./_components/container";
import { Section } from "./_components/section";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      className="overflow-y-auto bg-darkSlate text-darkText"
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </head>
      <body className={cn(inter.className)}>
        <section className="text-center mt-20 mb-8">
          <h1 className="text-3xl font-bold">davidoh</h1>
          <h2 className="mt-2">IPA - /ˈdeɪvɪd oʊ/</h2>
          <h2 className="mt-2">
            davidoh2018 <b>[at]</b> gmail <b>[dot]</b> com
          </h2>
        </section>
        <div className="flex-grow">{children}</div>
      </body>
    </html>
  );
}
