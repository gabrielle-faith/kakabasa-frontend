import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import Seo from 'next-seo-config'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...Seo} />
      <Component {...pageProps} />
    </>
  )
}
