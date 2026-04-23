'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black text-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-old-english text-2xl font-bold">
            Eradeprata
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-silver-400 transition">Início</Link>
            <Link href="/#primeira-epoca" className="hover:text-silver-400 transition">As Três Épocas</Link>
            <Link href="/produtos" className="hover:text-silver-400 transition">Obras</Link>
            <Link href="/sobre" className="hover:text-silver-400 transition">O Artista</Link>
            <Link href="/contato" className="hover:text-silver-400 transition">Contato</Link>
            <Link href="/admin" className="hover:text-silver-400 transition">Admin</Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link href="/" className="block py-2 hover:text-silver-400 transition">Início</Link>
            <Link href="/#primeira-epoca" className="block py-2 hover:text-silver-400 transition">As Três Épocas</Link>
            <Link href="/produtos" className="block py-2 hover:text-silver-400 transition">Obras</Link>
            <Link href="/sobre" className="block py-2 hover:text-silver-400 transition">O Artista</Link>
            <Link href="/contato" className="block py-2 hover:text-silver-400 transition">Contato</Link>
            <Link href="/admin" className="block py-2 hover:text-silver-400 transition">Admin</Link>
          </div>
        )}
      </nav>
    </header>
  )
}
