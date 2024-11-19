import Link from 'next/link'
import Layout from './components/Layout'

export default function HomePage() {
  return (
    <Layout>
      <h1 className="text-center text-4xl font-bold text-gray-900 mb-8">Välkommen till Folkfest</h1>
      <div className="relative h-96 mb-12">
        {/* Placeholder för hero-bild */}
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">
            Huvudbild: Folkfest uppträder på scen i 80-tals outfit
          </span>
        </div>
      </div>
      <p className="text-lg text-gray-700 mb-6">
        Just nu sätter vi upp en produktion på showkrogen Eztrad i Örebro, en show vi även medverkar
        i själva. Dessförinnan har vi jobbat med underhållning på 2-entertain, moment group,
        Wallmans Gruppen i Stockholm, ving, Astrid Lindgrens värld och flera andra ställen runt om i
        landet. <br />
        <br />
        På jakt efter underhållning? Det fixar vi!
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Vi gör er middag till en oförglömlig show! Med temakvällar från 80-tal till rock garanterar
        vi en kväll fylld av musik, dans och underhållning.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Våra Shower</h2>
          <p className="text-gray-600">
            Från ABBA till Queen, från Madonna till Guns N&apos; Roses - vi anpassar showen efter
            era önskemål. Våra mest populära teman inkluderar:
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>• 80-talets Greatest Hits</li>
            <li>• 90-tals Nostalgi</li>
            <li>• Rock Classics</li>
            <li>• Disco Fever</li>
            <li>• Svenska Hits genom tiderna</li>
          </ul>
          <div className="relative h-48 mt-4">
            {/* Placeholder för performancebild */}
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Bild: Showbilder från olika teman</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Boka Din Showkväll</h2>
          <p className="text-gray-600">
            Perfekt för företagsevent, jubileum, större middagar och fester. Vi skräddarsyr showen
            efter era önskemål och gör kvällen minnesvärd för alla gäster. Vårt koncept kombinerar
            professionell underhållning med möjlighet för gästerna att delta i festen.
          </p>
          <div className="mt-6 space-y-4">
            <Link
              href="/boka-oss"
              className="inline-block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Boka Show
            </Link>
            <Link
              href="/galleri"
              className="inline-block w-full text-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Se Bildgalleri
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
