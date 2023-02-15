'use client'
import Topbar from '@/components/topbar'
import './globals.css'
import AppFooter from '@/components/footer'
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children, session }) {
  return (
    <html lang='en'>
      <body>
        <SessionProvider session={session}>
          <Topbar />
            <main className='pt-[55px]' >{children}</main>
          <AppFooter />
        </SessionProvider>
      </body>
    </html>
  )
}
