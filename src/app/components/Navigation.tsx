import { Navlinks } from '@/app/components/Navlinks'
import Link from 'next/link'

export function Navigation() {
  return (
    <div className="z-20 sticky top-0">
      <div className="bg-gray-900 w-full">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center items-center h-16">
            <Link href="/" className="text-xl font-bold text-white">
              FOLKFEST LOGO
            </Link>
          </div>
        </div>
      </div>

      <nav className="bg-gray-800 shadow-lg w-full">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center items-center h-12">
            <Navlinks />
          </div>
        </div>
      </nav>
    </div>
  )
}
