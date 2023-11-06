import './globals.css'
import { Inter } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.min.css"
import Wrapper from '@/components/wrapper/Wrapper'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Employe / Student Collab',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  )
}
