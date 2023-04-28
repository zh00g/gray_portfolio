import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="stylesheet" href="dark-mode.css" />
      <script>
        document.body.classList.toggle('dark-mode', localStorage.getItem('isDarkMode') === 'true');
      </script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-ggNz0p+jgduGcHlq/3n3Z6m9nXbMEKjF72lSiQl/xVU8j6BiJw6g/aDZJz7Zu9f6x83FGVZqcYex0HlIwvr0pA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
