'use client'

import Link from 'next/link'

interface ObraCardProps {
  title: string
  description: string
  icon: string
  gradient: string
  iconColor: string
  textColor: string
}

export default function ObraCard({ title, description, icon, gradient, iconColor, textColor }: ObraCardProps) {
  return (
    <div className="text-center group cursor-pointer" onClick={() => window.location.href = '/produtos'}>
      <div className="relative mb-6 overflow-hidden rounded-lg">
        <div className={`w-full h-64 ${gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
          <div className="text-center">
            <div className={`text-6xl mb-2 ${iconColor}`}>{icon}</div>
            <p className={`${textColor} font-bold`}>{title}</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>
      <h3 className="font-bold text-xl mb-2">{description}</h3>
      <p className="font-typewriter text-silver-400 text-sm">
        Peças que expressam a essência desta época
      </p>
    </div>
  )
}
