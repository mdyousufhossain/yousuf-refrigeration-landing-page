import Link from 'next/link'
import { ThermometerSnowflake } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-900 text-white p-4">
      <ThermometerSnowflake size={80} className="text-orange-500 mb-6 animate-pulse" />
      <h1 className="text-6xl font-bold font-montserrat mb-2">404</h1>
      <h2 className="text-2xl mb-6 text-slate-300">System Overheated. Page Not Found.</h2>
      <p className="text-slate-400 mb-8 text-center max-w-md">
        The component you are looking for has been moved or melted down. 
        Let's get you back to a cooler temperature.
      </p>
      <Link 
        href="/"
        className="px-8 py-3 bg-orange-600 hover:bg-orange-700 transition-colors text-white font-bold rounded-sm uppercase tracking-wider"
      >
        Return to Home
      </Link>
    </div>
  )
}