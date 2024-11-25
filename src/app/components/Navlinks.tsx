import { NavLink } from '@/app/components/Navlink'
import Link from 'next/link'
import { FacebookIcon } from './icons/FacebookIcon'
import { InstagramIcon } from './icons/InstagramIcon'

export function Navlinks() {
  return (
    <div className="flex gap-8">
      <NavLink href="/underhallning" label="Underhållning" />
      <NavLink href="/om-oss" label="Om oss" />
      <NavLink href="/kontakt" label="Kontakt" />
      {/* Social Media Icons */}
      <Link
        href="https://facebook.com/folkfest"
        target="_blank"
        className="text-gray-400 hover:text-white"
      >
        <FacebookIcon className="w-5 h-5" />
      </Link>
      <Link
        href="https://instagram.com/folkfest"
        target="_blank"
        className="text-gray-400 hover:text-white"
      >
        <InstagramIcon className="w-5 h-5" />
      </Link>
    </div>
  )
}
