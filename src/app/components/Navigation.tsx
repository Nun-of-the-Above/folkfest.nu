import { MobileMenu } from '@/app/components/MobileMenu'
import { Navlinks } from '@/app/components/Navlinks'
import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="bg-white shadow-lg w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Folkfest
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Navlinks />
          </div>

          {/* Mobile menu */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}
