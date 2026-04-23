'use client'

import { useState, useEffect } from 'react'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2026-11-01T00:00:00-03:00') // 1º de novembro de 2026, meia-noite, horário de Brasília

    const updateTimer = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0')
  }

  return (
    <div className="bg-red-600 py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-old-english text-2xl md:text-3xl text-white mb-6">
          Contagem Regressiva
        </h2>
        <p className="text-white mb-8 font-typewriter">
          1º de Novembro de 2026
        </p>
        <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto md:max-w-4xl md:gap-6">
          <div className="bg-black p-4 md:p-6 rounded-lg md:rounded-xl">
            <div className="font-typewriter text-white text-3xl md:text-5xl font-bold">
              {formatNumber(timeLeft.days)}
            </div>
            <div className="text-white text-sm md:text-base mt-2">DIAS</div>
          </div>
          <div className="bg-black p-4 md:p-6 rounded-lg md:rounded-xl">
            <div className="font-typewriter text-white text-3xl md:text-5xl font-bold">
              {formatNumber(timeLeft.hours)}
            </div>
            <div className="text-white text-sm md:text-base mt-2">HORAS</div>
          </div>
          <div className="bg-black p-4 md:p-6 rounded-lg md:rounded-xl">
            <div className="font-typewriter text-white text-3xl md:text-5xl font-bold">
              {formatNumber(timeLeft.minutes)}
            </div>
            <div className="text-white text-sm md:text-base mt-2">MIN</div>
          </div>
          <div className="bg-black p-4 md:p-6 rounded-lg md:rounded-xl">
            <div className="font-typewriter text-white text-3xl md:text-5xl font-bold">
              {formatNumber(timeLeft.seconds)}
            </div>
            <div className="text-white text-sm md:text-base mt-2">SEG</div>
          </div>
        </div>
      </div>
    </div>
  )
}
