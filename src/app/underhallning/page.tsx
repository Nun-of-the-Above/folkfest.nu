import Image from 'next/image'
import Layout from '../components/Layout'

type EntertainmentOption = {
  id: string
  title: string
  description: string
  imageUrl: string
}

const entertainmentOptions: EntertainmentOption[] = [
  {
    id: 'show',
    title: 'Show',
    description:
      'Sätt guldkant på kvällen med en sprakande dinner-show som får vem som helst att dra på mungiporna och sjunga med.',
    imageUrl: '/images/entertainment/show.jpg',
  },
  {
    id: 'brollop',
    title: 'Bröllop',
    description:
      'På jakt efter underhållning till bröllopet? Vi löser allt från vigselsång och mingelmusik till partyband och dj till festen. Självklart anpassar vi vår repertoar efter era önskemål!',
    imageUrl: '/images/entertainment/wedding.jpg',
  },
  {
    id: 'quiz',
    title: 'Quiz',
    description:
      'Är ni ett tävlingsinriktat gäng som vill utmana era kunskaper på ett roligt sätt? Vi erbjuder flera olika quizpaket.',
    imageUrl: '/images/entertainment/quiz.jpg',
  },
  {
    id: 'trubadur',
    title: 'Trubadur',
    description:
      'Förgyll er tillställning och låt våra trubadurer bjuda på stämningsfull livemusik till minglet såväl som till lunchen eller middagen. Eller varför inte dra igång festen med lite sköna partylåtar?',
    imageUrl: '/images/entertainment/troubadour.jpg',
  },
  {
    id: 'humor',
    title: 'Humor',
    description:
      'Låt en humorkaraktär som t.ex. "Edward Blom" komma och sätta färg på eventet genom att hälsa välkomna, presentera menyn och dra några fräckisar.',
    imageUrl: '/images/entertainment/humor.jpg',
  },
  {
    id: 'liveband',
    title: 'Liveband',
    description:
      'Det bästa sättet att få igång en fest på är med ett liveband. Vårt liveband består av sångare, gitarrist, pianist, basist och trummis. Garanterat drag på dansgolvet ända inpå småtimmarna!',
    imageUrl: '/images/entertainment/liveband.jpg',
  },
  {
    id: 'dj',
    title: 'DJ',
    description:
      'Ingen fest är komplett utan en bra DJ. Självklart anpassar vi musiken efter ert tycke och smak.',
    imageUrl: '/images/entertainment/dj.jpg',
  },
]

export default function EntertainmentPage() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold text-center mb-12">Underhållning</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {entertainmentOptions.map((option) => (
          <div key={option.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image src={option.imageUrl} alt={option.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{option.title}</h2>
              <p className="text-gray-600">{option.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
