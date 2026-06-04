import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif'
});
const sourceSans = Source_Sans_3({ 
  subsets: ["latin"],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Lowcountry Holdings | Business Acquisition & Consulting in Charleston',
  description: 'A Charleston-based holding company helping business owners transition into retirement. We acquire established businesses and offer consulting services to improve profitability.',
  icons: {
    icon: '/palmtree.png',
    apple: '/palmtree.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
