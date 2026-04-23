'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { useAuth } from '@/hooks/useAuth'

export default function AdminClient() {
  const { isLoggedIn, login, logout } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (login(username, password)) {
      router.push('/admin/produtos')
    } else {
      alert('Credenciais inválidas')
    }
  }

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-black">
        
        <main className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h1 className="font-old-english text-3xl md:text-4xl text-white">
                Painel Administrativo
              </h1>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Sair
              </button>
            </div>
            
            <div className="text-center text-white mb-8">
              <p className="text-xl">Bem-vindo!</p>
              <div className="space-x-4">
                <Link 
                  href="/admin/produtos"
                  className="bg-white text-black px-4 py-2 rounded hover:bg-silver-200 transition"
                >
                  Produtos
                </Link>
                <Link 
                  href="/admin/categorias"
                  className="bg-white text-black px-4 py-2 rounded hover:bg-silver-200 transition"
                >
                  Categorias
                </Link>
                <Link 
                  href="/contato"
                  className="bg-white text-black px-4 py-2 rounded hover:bg-silver-200 transition"
                >
                  Contato
                </Link>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
  
      
      <main className="flex items-center justify-center py-8">
        <div className="text-center max-w-md px-4">
          <h1 className="font-old-english text-4xl md:text-5xl text-white mb-8">
            Painel Administrativo
          </h1>
          <p className="text-silver-300 mb-8">
            Entre com suas credenciais para acessar o painel administrativo
          </p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-silver-300 rounded-lg focus:outline-none focus:border-black bg-white text-black font-typewriter"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-silver-300 rounded-lg focus:outline-none focus:border-black bg-white text-black font-typewriter"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 font-bold hover:bg-silver-800 transition"
            >
              Entrar
            </button>
          </form>
        </div>
      </main>
      
    </div>
  )
}
