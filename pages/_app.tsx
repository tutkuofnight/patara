import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Geist, Geist_Mono } from "next/font/google";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} className={`${geist.className} ${geistMono.className}`} />;
}
