'use client'
import Topbar from '@/components/general/topbar'
import './globals.css'
import AppFooter from '@/components/general/footer'
import { SessionProvider } from "next-auth/react";
import { useEffect } from 'react';

export default function RootLayout({ children, session }) {

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

  return (
    <html lang='en'>
      <body className='text-gray-900 dark:text-white dark:bg-black'>
        <SessionProvider session={session}>
            <Topbar />
              <main className='pt-[60px]' >{children}</main>
            <AppFooter />
        </SessionProvider>
      </body>
    </html>
  )
}
