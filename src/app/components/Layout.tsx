import Link from 'next/link'
import React from 'react'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                Folkfest
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Hem
              </Link>
              <Link href="/boka-oss" className="text-gray-600 hover:text-gray-900">
                Boka oss
              </Link>
              <Link href="/galleri" className="text-gray-600 hover:text-gray-900">
                Galleri
              </Link>
              <Link href="/om-oss" className="text-gray-600 hover:text-gray-900">
                Om oss
              </Link>
              <Link href="/kontakt" className="text-gray-600 hover:text-gray-900">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-6xl mx-auto px-4 py-12">{children}</main>
    </div>
  )
}

export default Layout
