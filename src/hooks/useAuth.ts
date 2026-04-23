'use client'

import { useState, useEffect } from 'react'

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Verificar se está logado ao carregar a página
    const auth = localStorage.getItem('isAdminLoggedIn')
    setIsLoggedIn(auth === 'true')
  }, [])

  const login = (username: string, password: string) => {
    if (username === 'admin' && password === 'eradeprata2024') {
      setIsLoggedIn(true)
      localStorage.setItem('isAdminLoggedIn', 'true')
      return true
    }
    return false
  }

  const logout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('isAdminLoggedIn')
  }

  return { isLoggedIn, login, logout }
}
