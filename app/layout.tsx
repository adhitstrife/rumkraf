import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rumkraf - Transforming Spaces, Inspiring Possibilities',
  description: 'Exciting changes are underway at Rumkraf. Stay tuned for our grand unveil!',
  icons: {
    icon: '/image/rumkraf-logo.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
