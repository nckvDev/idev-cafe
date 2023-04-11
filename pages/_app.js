import Layout from '@/components/_App/Layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  )
}
