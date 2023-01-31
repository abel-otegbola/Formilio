import Topbar from '@/components/topbar'
import './globals.css'
import AppFooter from '@/components/footer'
import Head from './head'

export default function RootLayout({ children }) {
  return (
    <html>
      <Head />
      <body>
        <Topbar />
        <main>{children}</main>
        <AppFooter />
      </body>
    </html>
  )
}
