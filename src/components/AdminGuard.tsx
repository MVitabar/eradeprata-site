'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'

interface AdminGuardProps {
  children: React.ReactNode
}

export default function AdminGuard({ children }: AdminGuardProps) {
  const { isLoggedIn } = useAuth()
  const router = useRouter()
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    // Dar tiempo para que el estado se estabilice
    const timer = setTimeout(() => {
      setIsChecking(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isLoggedIn && !isChecking) {
      // Solo redirigir si no está logado y ya terminó la verificación inicial
      router.push('/admin')
    }
  }, [isLoggedIn, isChecking, router])

  if (isChecking) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-black">Verificando autenticación...</div>
      </div>
    )
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-black">Redirecionando...</div>
      </div>
    )
  }

  return <>{children}</>
}
