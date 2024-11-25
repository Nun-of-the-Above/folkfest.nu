'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export function PartnerSlideshow() {
  const partners = [
    {
      name: 'Loka Brunn',
      image: '/images/partners/example.jpg',
    },
    {
      name: 'Eztrad',
      image: '/images/partners/example.jpg',
    },
    {
      name: 'Partner 3',
      image: '/images/partners/example.jpg',
    },
    {
      name: 'Partner 4',
      image: '/images/partners/example.jpg',
    },
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  const duplicatedPartners = [...partners, ...partners]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1
        return nextIndex >= partners.length ? 0 : nextIndex
      })
    }, 3000)

    return () => clearInterval(timer)
  }, [partners.length])

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {duplicatedPartners.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex-shrink-0 w-full px-4 flex items-center justify-center flex-col"
          >
            <div className="relative w-72 h-72">
              <Image
                src={partner.image}
                alt={partner.name}
                fill
                className="object-scale-down"
                sizes="(max-width: 768px) 100vw, 288px"
              />
            </div>
            <h3 className="text-xl font-semibold mt-4">{partner.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
