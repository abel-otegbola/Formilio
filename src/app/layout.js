import Topbar from '@/components/topbar'
import './globals.css'
import AppFooter from '@/components/footer'
import Head from './head'
import AuthContext from './AuthContext'

export default function RootLayout({ children, session }) {
  return (
    <html>
      <Head />
      <body>
        <AuthContext session={session}>
          <Topbar />
            <main className='pt-[50px]' >{children}</main>
          <AppFooter />
        </AuthContext>
      </body>
    </html>
  )
}
