import { ContactForm } from './components/ContactForm'
import { HeroVideo } from './components/HeroVideo'
import { InstagramFeed } from './components/InstagramFeed'
import Layout from './components/Layout'
import { PartnerSlideshow } from './components/PartnerSlideshow'

export default function HomePage() {
  return (
    <Layout>
      <section className="relative w-full mb-12">
        <HeroVideo />
      </section>

      <section className="container mx-auto grid md:grid-cols-2 gap-8 mb-12">
        <div className="h-[600px] bg-white rounded-lg shadow-md overflow-hidden">
          <InstagramFeed />
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Kontakta oss</h2>
          <ContactForm />
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Våra Samarbetspartners
          </h2>
          <PartnerSlideshow />
        </div>
      </section>
    </Layout>
  )
}
