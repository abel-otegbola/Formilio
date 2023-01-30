import Head from "@/app/head"
import RootLayout from "@/app/layout"

export default function MyApp({ Component, pageProps }) {
  return (
    <html>
      <Head />
      <body>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </body>
    </html>
  )
}