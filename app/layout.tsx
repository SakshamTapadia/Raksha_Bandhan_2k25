import type { Metadata } from 'next'
import { Dancing_Script, Poppins } from 'next/font/google'
import './globals.css'

const dancingScript = Dancing_Script({ 
  subsets: ['latin'],
  variable: '--font-dancing-script'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Happy Raksha Bandhan - For My Sister',
  description: 'A heartfelt Raksha Bandhan message for my beloved sister',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dancingScript.variable} ${poppins.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
