'use client'

export default function MusicCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {/* Armadilha do Ego */}
      <div className="bg-silver-900 bg-opacity-20 rounded-lg overflow-hidden backdrop-blur-sm border border-silver-700">
        <div className="relative">
          <img 
            src="/EGO.jpeg"
            alt="Armadilha do Ego"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg">
            <div className="text-center text-white">
              <h3 className="font-old-english text-2xl md:text-3xl font-bold mb-2">
                "Armadilha do Ego"
              </h3>
              <p className="font-typewriter text-sm text-silver-300">
                A jornada para além do eu
              </p>
            </div>
          </div>
        </div>
        <div className="p-6">
          <p className="font-typewriter text-silver-300 mb-4">
            A melodia que dissolve as barreiras do ego, revelando a essência pura da existência.
          </p>
          <a 
            href="https://open.spotify.com/intl-pt/album/6Y9KUDWPa81PZt0fFBt2J4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 font-bold hover:bg-green-700 transition w-full rounded-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            Ouvir no Spotify
          </a>
        </div>
      </div>

      {/* Alquimista */}
      <div className="bg-silver-900 bg-opacity-20 rounded-lg overflow-hidden backdrop-blur-sm border border-silver-700">
        <div className="relative">
          <img 
            src="/ALQUIMISTA.jpeg"
            alt="Alquimista"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg">
            <div className="text-center text-white">
              <h3 className="font-old-english text-2xl md:text-3xl font-bold mb-2">
                "Alquimista"
              </h3>
              <p className="font-typewriter text-sm text-silver-300">
                A transformação através do som
              </p>
            </div>
          </div>
        </div>
        <div className="p-6">
          <p className="font-typewriter text-silver-300 mb-4">
            A trilha sonora que transforma o silêncio em revelação e o tempo em eternidade.
          </p>
          <a 
            href="https://youtu.be/j2dHQ-wj96Q?si=qpicZV-xMrBlKj5e"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-red-600 text-white px-6 py-3 font-bold hover:bg-red-700 transition w-full rounded-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Ouvir no YouTube
          </a>
        </div>
      </div>
    </div>
  )
}
