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
      className={`${pathname === href ? 'text-blue-600' : 'text-gray-600'} hover:text-gray-900`}
      onClick={onClick}
    >
      {label}
    </Link>
  )
}
