import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import "./globals.css";
import "@radix-ui/themes/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David Oh",
  description: "trader and digital builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="rn">
      <body className={inter.className}>
        <Theme
          accentColor="crimson"
          grayColor="sand"
          radius="large"
          scaling="95%"
        >
          {children}
        </Theme>
      </body>
    </html>
  );
}
