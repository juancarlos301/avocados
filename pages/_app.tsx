import type { AppProps } from 'next/app'
import { Layout } from '../components'
export default function MyApp({ Component, pageProps }: AppProps) {
  // here we can use providers by context of react
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
