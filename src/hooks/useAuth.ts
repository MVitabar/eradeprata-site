'use client'

import { useState, useEffect } from 'react'

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Verificar se está logado ao carregar a página
    const auth = localStorage.getItem('isAdminLoggedIn')
    setIsLoggedIn(auth === 'true')
    
    // Adicionar listener para mudanças no localStorage
    const handleStorageChange = () => {
      const newAuth = localStorage.getItem('isAdminLoggedIn')
      setIsLoggedIn(newAuth === 'true')
    }
    
    window.addEventListener('storage', handleStorageChange)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  const login = (username: string, password: string) => {
    if (username === 'admin' && password === 'eradeprata2024') {
      setIsLoggedIn(true)
      localStorage.setItem('isAdminLoggedIn', 'true')
      // Disparar evento para outras abas/janelas
      window.dispatchEvent(new Event('storage'))
      return true
    }
    return false
  }

  const logout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('isAdminLoggedIn')
    // Disparar evento para outras abas/janelas
    window.dispatchEvent(new Event('storage'))
  }

  return { isLoggedIn, login, logout }
}
