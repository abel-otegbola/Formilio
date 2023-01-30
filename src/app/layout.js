import Topbar from '@/components/topbar'
import './globals.css'
import { Inter } from '@next/font/google'
import AppFooter from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <>
        <Topbar />
        {children}
        <AppFooter />
    </>
  )
}
