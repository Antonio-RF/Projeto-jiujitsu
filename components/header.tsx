"use client"

import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="top-nav">
      <Image
        src="/logo_jiujitsu.png"
        alt="Logo"
        width={70}
        height={70}
        className="nav-logo"
      />
      <nav>
        <Link href="/">Início</Link>
        <Link href="/historia">História</Link>
        <Link href="/noticias">Notícias</Link>
        <Link href="/fotos">Fotos</Link>
        <Link href="/contato">Contato</Link>
      </nav>
    </header>
  )
}
