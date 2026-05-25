import { Shield } from 'lucide-react'
import { useState } from 'react'
import Resumen from './components/Resumen'
import MarcoNormativo from './components/Marco'
function App() {
  const [seccionActiva, setSeccionActiva] = useState('resumen')
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      <header className="bg-zinc-800 text-white py-10 px-6">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Shield size={40} className="text-red-400" />
          <div>
            <h1 className="text-3xl font-bold">
              Análisis Legal — Caso BancoEstado 2020
            </h1>
            <p className="text-zinc-400 mt-1">
              TI3034 — Fundamentos de Seguridad de la Información · INACAP Valparaíso
            </p>
          </div>
        </div>
      </header>
<nav className="bg-zinc-800 border-t border-zinc-700 px-6">
  <div className="max-w-8xl mx-auto flex gap-2">
    <button onClick={() => setSeccionActiva('resumen')} className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors ${seccionActiva === 'resumen' ? 'border-red-500 text-white' : 'border-transparent text-zinc-400 hover:text-white'}`}>
      Resumen
    </button>
    <button onClick={() => setSeccionActiva('marco')} className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors ${seccionActiva === 'marco' ? 'border-red-500 text-white' : 'border-transparent text-zinc-400 hover:text-white'}`}>
      Marco Normativo
    </button>
  </div>
</nav>
      <main className="flex-1 max-w-8xl mx-auto px-6 py-12">
        {seccionActiva === 'resumen' && <Resumen />}
{seccionActiva === 'marco' && <MarcoNormativo />}
      </main>

      <footer className="bg-zinc-900 text-zinc-400 text-sm py-4 px-6">
        <div className="max-w-4xl mx-auto flex justify-between">
          <span>Daniela Morales Zucco</span>
          <span>Docente: Rubén Schnettler L. — INACAP Valparaíso</span>
        </div>
      </footer>
    </div>
  )
}

export default App