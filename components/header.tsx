"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/historia", label: "Historia" },
    { href: "/noticias", label: "Noticias" },
    { href: "/fotos", label: "Fotos" },
    { href: "/contato", label: "Contato" },
  ]

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="header-brand">
          <Image
            src="/logo_jiujitsu.png"
            alt="Logo Jiu-Jitsu UFPR"
            width={56}
            height={56}
            className="header-logo"
          />
          <span className="header-title">Jiu-Jitsu UFPR</span>
        </Link>
        <nav className="header-nav">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
