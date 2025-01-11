import type { AppProps } from 'next/app'
import Head from 'next/head'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const getServerSideProps = () => {
  return {
    props: {}
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ZeroGPT</title>
      </Head>
      <LanguageProvider>
        <Navbar />
        <div key={Math.random()}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </LanguageProvider>
    </>
  )
}
