'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black text-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img 
              src="/EDP.PNG" 
              alt="Eradeprata" 
              className="h-8 w-auto"
            />
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-silver-400 transition">Início</Link>
            <Link href="/a-era-de-prata" className="hover:text-silver-400 transition">A Era de Prata</Link>
            <Link href="/produtos" className="hover:text-silver-400 transition">Merch</Link>
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
          <div className="fixed inset-0 bg-black bg-opacity-95 z-50 md:hidden transition-opacity duration-300">
            {/* Botão de Fechar */}
            <button 
              className="absolute top-4 right-4 text-white hover:text-silver-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <Link 
                href="/" 
                className="text-white text-2xl hover:text-silver-400 transition-all duration-300 transform hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                href="/a-era-de-prata" 
                className="text-white text-2xl hover:text-silver-400 transition-all duration-300 transform hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
              >
                A Era de Prata
              </Link>
              <Link 
                href="/produtos" 
                className="text-white text-2xl hover:text-silver-400 transition-all duration-300 transform hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
              >
                Merch
              </Link>
              <Link 
                href="/contato" 
                className="text-white text-2xl hover:text-silver-400 transition-all duration-300 transform hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <Link 
                href="/admin" 
                className="text-white text-2xl hover:text-silver-400 transition-all duration-300 transform hover:scale-110"
                onClick={() => setIsMenuOpen(false)}
              >
                Admin
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
