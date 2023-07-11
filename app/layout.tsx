import './globals.css'
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({ weight: ['300', '400', '500', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Edson Lucas Links',
  description: 'Links que podem ser úteis para você',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}
