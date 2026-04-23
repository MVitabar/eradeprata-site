'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'

export default function Admin() {
  const { isLoggedIn, login, logout } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (login(username, password)) {
      // Login successful
    } else {
      alert('Credenciais inválidas!')
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="bg-black text-white p-8 rounded-lg max-w-md w-full mx-4">
          <h1 className="font-old-english text-3xl text-center mb-8">
            Painel Admin
          </h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="username" className="block font-bold mb-2">
                Usuário
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white text-black rounded-lg focus:outline-none font-typewriter"
                placeholder="admin"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block font-bold mb-2">
                Senha
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white text-black rounded-lg focus:outline-none font-typewriter"
                placeholder="••••••••"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-white text-black py-3 font-bold hover:bg-silver-200 transition"
            >
              Entrar
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm text-silver-400">
            <p>Demo: admin / eradeprata2024</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="font-old-english text-3xl">Painel Administrativo</h1>
            <button
              onClick={logout}
              className="bg-black text-white px-4 py-2 hover:bg-silver-800 transition"
            >
              Sair
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-black text-white p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Total de Produtos</h3>
              <p className="text-3xl font-bold">156</p>
            </div>
            <div className="bg-silver-200 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Pedidos Hoje</h3>
              <p className="text-3xl font-bold">23</p>
            </div>
            <div className="bg-silver-100 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Clientes</h3>
              <p className="text-3xl font-bold">1,247</p>
            </div>
            <div className="bg-silver-800 text-white p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Faturamento Mês</h3>
              <p className="text-3xl font-bold">R$ 45.678</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-silver-200 rounded-lg p-6">
              <h2 className="font-bold text-xl mb-4">Produtos Recentemente Adicionados</h2>
              <div className="space-y-4 font-typewriter">
                <div className="flex justify-between items-center py-2 border-b border-silver-200">
                  <span>Anel Prata Elegante</span>
                  <span className="text-silver-600">R$ 299,90</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-silver-200">
                  <span>Colar Dourado Premium</span>
                  <span className="text-silver-600">R$ 599,90</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Bracelete Moderno</span>
                  <span className="text-silver-600">R$ 199,90</span>
                </div>
              </div>
              <div className="space-x-4">
                <Link 
                  href="/admin/produtos"
                  className="bg-black text-white px-4 py-2 hover:bg-silver-800 transition"
                >
                  Gerenciar Produtos
                </Link>
                <Link 
                  href="/admin/categorias"
                  className="bg-black text-white px-4 py-2 hover:bg-silver-800 transition"
                >
                  Gerenciar Categorias
                </Link>
              </div>
            </div>
            
            <div className="bg-white border border-silver-200 rounded-lg p-6">
              <h2 className="font-bold text-xl mb-4">Pedidos Recentes</h2>
              <div className="space-y-4 font-typewriter">
                <div className="flex justify-between items-center py-2 border-b border-silver-200">
                  <span>Pedido #1234</span>
                  <span className="text-green-600">Concluído</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-silver-200">
                  <span>Pedido #1235</span>
                  <span className="text-yellow-600">Processando</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Pedido #1236</span>
                  <span className="text-blue-600">Pendente</span>
                </div>
              </div>
              <button className="mt-4 bg-black text-white px-4 py-2 hover:bg-silver-800 transition">
                Ver Todos os Pedidos
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
