import { NavLink } from '@/app/components/Navlink'

export function Navlinks({ toggleMenu }: { toggleMenu?: () => void }) {
  return (
    <>
      <NavLink href="/aktuellt" label="Aktuellt" onClick={toggleMenu} />
      <NavLink href="/boka-oss" label="Boka oss" onClick={toggleMenu} />
      <NavLink href="/galleri" label="Galleri" onClick={toggleMenu} />
      <NavLink href="/om-oss" label="Om oss" onClick={toggleMenu} />
      <NavLink href="/kontakt" label="Kontakt" onClick={toggleMenu} />
    </>
  )
}
