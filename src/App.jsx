import { Shield } from 'lucide-react'
import { useState } from 'react'
import Resumen from './components/Resumen'
import MarcoNormativo from './components/Marco'
import Delitos from './components/Delitos'
import Comparacion from './components/Comparacion'
import Responsabilidades from './components/Responsabilidades'
function App() {
  const [seccionActiva, setSeccionActiva] = useState(window.location.hash.replace('#', '') || 'resumen')
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      <header className="bg-zinc-800 text-white py-10 px-6">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Shield size={40} className="text-red-400" />
          <div>
            <h1 className="text-3xl font-bold">
              Análisis Legal: Caso BancoEstado 2020
            </h1>
            <p className="text-zinc-400 mt-1">
              TI3034: Fundamentos de Seguridad de la Información · INACAP Valparaíso
            </p>
          </div>
        </div>
      </header>
      <nav className="bg-zinc-800 border-t border-zinc-700 px-6 sticky top-0 z-10">
        <div className="max-w-8xl mx-auto flex gap-2">
          <button onClick={() => { setSeccionActiva('resumen'); window.location.hash = 'resumen'; }} className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors ${seccionActiva === 'resumen' ? 'border-red-500 text-white' : 'border-transparent text-zinc-400 hover:text-white'}`}>
            Resumen
          </button>
          <button onClick={() => { setSeccionActiva('marco'); window.location.hash = 'marco'; }} className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors ${seccionActiva === 'marco' ? 'border-red-500 text-white' : 'border-transparent text-zinc-400 hover:text-white'}`}>
            Marco Normativo
          </button>
          <button onClick={() => { setSeccionActiva('delitos'); window.location.hash = 'delitos'; }} className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors ${seccionActiva === 'delitos' ? 'border-red-500 text-white' : 'border-transparent text-zinc-400 hover:text-white'}`}>
            Delitos
          </button>
          <button onClick={() => { setSeccionActiva('comparacion'); window.location.hash = 'comparacion'; }} className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors ${seccionActiva === 'comparacion' ? 'border-red-500 text-white' : 'border-transparent text-zinc-400 hover:text-white'}`}>
            Comparación
          </button>
          <button onClick={() => { setSeccionActiva('responsabilidades'); window.location.hash = 'responsabilidades'; }} className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors ${seccionActiva === 'responsabilidades' ? 'border-red-500 text-white' : 'border-transparent text-zinc-400 hover:text-white'}`}>
            Responsabilidades
          </button>
        </div>
      </nav>
      <main className="flex-1 max-w-8xl mx-auto px-6 py-12">
        {seccionActiva === 'resumen' && <Resumen />}
{seccionActiva === 'marco' && <MarcoNormativo />}
{seccionActiva === 'delitos' && <Delitos />}
{seccionActiva === 'comparacion' && <Comparacion />}
{seccionActiva === 'responsabilidades' && <Responsabilidades />}
      </main>

      <footer className="bg-zinc-900 text-zinc-400 text-sm py-4 px-6">
        <div className="max-w-4xl mx-auto flex justify-between">
          <span>Daniela Morales Zucco</span>
          <span>INACAP Valparaíso</span>
        </div>
      </footer>
    </div>
  )
}

export default App