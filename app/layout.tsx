import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kolping Theater Ramsen',
  description: 'Now as next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='h-full w-full'>
      <body className={cn(inter.className, 'w-full', 'h-full')}>
        {children}
      </body>
    </html>
  )
}
