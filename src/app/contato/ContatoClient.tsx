'use client'

import { useState } from 'react'

export default function ContatoClient() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Aqui você implementaria o envio para o Supabase
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
    setFormData({ nome: '', email: '', telefone: '', mensagem: '' })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
      <div>
        <h2 className="font-bold text-2xl mb-6">Envie-nos uma mensagem</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nome" className="block font-bold mb-2">
              Nome Completo
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-silver-300 rounded-lg focus:outline-none focus:border-black font-typewriter"
              placeholder="Seu nome completo"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block font-bold mb-2">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-silver-300 rounded-lg focus:outline-none focus:border-black font-typewriter"
              placeholder="seu@email.com"
            />
          </div>
          
          <div>
            <label htmlFor="telefone" className="block font-bold mb-2">
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-silver-300 rounded-lg focus:outline-none focus:border-black font-typewriter"
              placeholder="(00) 00000-0000"
            />
          </div>
          
          <div>
            <label htmlFor="mensagem" className="block font-bold mb-2">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-silver-300 rounded-lg focus:outline-none focus:border-black font-typewriter"
              placeholder="Como podemos ajudar você?"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-black text-white py-3 font-bold hover:bg-silver-800 transition"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
      
      <div>
        <h2 className="font-bold text-2xl mb-6">Informações de Contato</h2>
        <div className="space-y-6 font-typewriter text-silver-600">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-sm">📍</span>
            </div>
            <div>
              <h3 className="font-bold text-black mb-1">Endereço</h3>
              <p>Av. Paulista, 1000 - 7º andar</p>
              <p>Bela Vista, São Paulo - SP</p>
              <p>CEP: 01310-100</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-sm">📞</span>
            </div>
            <div>
              <h3 className="font-bold text-black mb-1">Telefone</h3>
              <p>+55 11 9999-9999</p>
              <p>+55 11 3333-3333</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-sm">✉️</span>
            </div>
            <div>
              <h3 className="font-bold text-black mb-1">E-mail</h3>
              <p>contato@eradeprata.com.br</p>
              <p>suporte@eradeprata.com.br</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-sm">⏰</span>
            </div>
            <div>
              <h3 className="font-bold text-black mb-1">Horário de Atendimento</h3>
              <p>Segunda a Sexta: 9h às 18h</p>
              <p>Sábado: 9h às 13h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
