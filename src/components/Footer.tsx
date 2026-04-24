import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-old-english text-xl font-bold mb-4">Eradeprata</h3>
            <p className="font-typewriter text-silver-400">
              Produtos exclusivos com qualidade excepcional para o mercado brasileiro.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-silver-400 transition">Início</Link></li>
              <li><Link href="/produtos" className="hover:text-silver-400 transition">Produtos</Link></li>
              <li><Link href="/sobre" className="hover:text-silver-400 transition">Sobre</Link></li>
              <li><Link href="/contato" className="hover:text-silver-400 transition">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <div className="font-typewriter text-silver-400 space-y-2">
              <p>Email: contato@eradeprata.com.br</p>
              <p>Telefone: +55 11 9999-9999</p>
              <p>São Paulo, Brasil</p>
            </div>
          </div>

        </div>
        
        <div className="border-t border-silver-800 mt-8 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-silver-400 text-center md:text-left">
              © 2024 Eradeprata. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-silver-500">Desenvolvimento:</span>
              <a 
                href="https://portfolio3d-seven-alpha.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-silver-400 hover:text-white transition"
              >
                M Vitabar
              </a>
              <span className="text-silver-600">|</span>
              <a 
                href="https://www.instagram.com/polaris.studio.3d/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-silver-400 hover:text-white transition"
              >
                Polaris Studio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
