'use client'
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { usePathname } from 'next/navigation';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  const excludedPages = ['/dashboard', '/login', "/signup"];
  const isExcludedPage = excludedPages.some(path => pathname?.startsWith(path));

  return (
    <>
      <Head>
        <title>ZeroGPT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="ZeroGPT - AI Detection Tool" />
      </Head>
      <LanguageProvider>
        {!isExcludedPage && <Navbar />}
        <main>
          <Component {...pageProps} />
        </main>
        {!isExcludedPage && <Footer />}
      </LanguageProvider>
    </>
  );
}
