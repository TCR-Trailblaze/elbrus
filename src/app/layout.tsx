import { Inter, Josefin_Sans, Jost } from 'next/font/google'
import './globals.css'
import Footer from './components/layout/Footer'
import { TailwindIndicator } from './components/utils/breakpoint-indicator'
import Navbar from './components/layout/navigation/navbar-clone'
import DrawerComponent from './components/layout/navigation/Drawer'

const josefin_sans = Josefin_Sans({ subsets: ['latin', 'latin-ext'] })
const jost = Jost({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Tricora Trailblaze</title>
        <meta charSet="utf-8" />
        <meta name="google" content="notranslate" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body className={jost.className}>
        <Navbar />
        <TailwindIndicator />
          {children}
        <Footer />
      </body>
    </html>
  )
}
