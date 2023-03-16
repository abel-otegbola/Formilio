'use client'
import Topbar from '@/components/general/topbar'
import './globals.css'
import AppFooter from '@/components/general/footer'
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children, session }) {
  return (
    <html lang='en'>
      <body className='text-black dark:text-white dark:bg-gray-900'>
        <SessionProvider session={session}>
          <Topbar />
            <main className='pt-[55px]' >{children}</main>
          <AppFooter />
        </SessionProvider>
      </body>
    </html>
  )
}
