import type { Metadata } from 'next'
import {  Montserrat } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
// import Providers from '@/components/Providers'
import Footer from '@/components/Footer'
// import Navbar from '@/components/Navbar'
import { Toaster } from 'sonner'
import Navbar from '@/components/Navbar'

const fonts = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Littlebox',
  description: 'Littlebox India - A brand for GenZ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='h-full'>
      <head>
        <link rel="shortcut icon" href="/lbi.avif" type="image/x-icon" />
      </head>
    <body
      className={cn(
        'relative h-full antialiased',
        fonts.className
      )}>
      <main className='relative flex flex-col min-h-screen'>
      
        <Navbar/>
          <div className='flex-grow flex-1'>
            {children}
          </div>
          <Footer />
       
      </main>

      <Toaster position='top-center' richColors />
    </body>
  </html>
  )
}
