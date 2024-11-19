import { Navigation } from '@/app/components/Navigation'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="w-full">{children}</div>
      </main>
    </div>
  )
}

export default Layout
