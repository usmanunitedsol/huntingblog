import Navbar from '@/Components/Navbar'
import '@/styles/globals.css'
import '@/styles/styles.scss'

export default function App({ Component, pageProps }) {
  return <>
  <Navbar/>
  <Component {...pageProps} />
  </>
}
