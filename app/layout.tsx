import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata = {
  title: 'Yousuf Refrigeration | Industrial Cooling & Manufacturing',
  description: 'Premier manufacturer of commercial kitchen equipment, food carts, and HVAC solutions in Dhaka.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${montserrat.variable} font-sans bg-slate-50 text-slate-900 antialiased`}>
      <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  )
}