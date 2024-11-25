'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinkProps = {
  href: string
  label: string
  onClick?: () => void
}

export const NavLink = ({ href, label, onClick }: NavLinkProps) => {
  const pathname = usePathname()
  return (
    <Link
      href={href}
      className={`${
        pathname === href ? 'text-blue-300' : 'text-gray-300'
      } hover:text-white transition-colors duration-200`}
      onClick={onClick}
    >
      {label}
    </Link>
  )
}
