export function HeroVideo() {
  return (
    <div>
      <video autoPlay muted loop className="object-cover w-full h-96">
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
      <p className="text-center text-4xl font-bold tracking-widest uppercase text-gray-800 mt-4">
        INSERT SLOGAN
      </p>
    </div>
  )
}
