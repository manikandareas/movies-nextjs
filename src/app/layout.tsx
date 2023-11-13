import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider as NextThemesProvider } from "@/components/provider/theme-provider";
import ReactQueryProvider from "@/components/provider/query-provider";
import { myMetadata } from "@/components/meta/Metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...myMetadata,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <NextThemesProvider attribute="class" defaultTheme="system">
            {/* <AppHeader /> */}
            {children}
          </NextThemesProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
