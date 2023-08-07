import Script from 'next/script'

export default function Head() {
  return (
    <head>
      <title>Formilio</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Mail form submission API" />
      <meta name="keyword" content="form submission" />
      <link rel="icon" href="/favicon.ico" />
      
      <Script id="darkmode" strategy="afterInteractive">

        {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }`}
      </Script>
    </head>
  )
}
