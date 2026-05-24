import { Shield } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-slate-900 text-white py-10 px-6">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Shield size={40} className="text-red-400" />
          <div>
            <h1 className="text-3xl font-bold">
              Análisis Legal — Caso BancoEstado 2020
            </h1>
            <p className="text-slate-300 mt-1">
              TI3034 — Fundamentos de Seguridad de la Información · INACAP Valparaíso
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-6 py-12">
        <p className="text-slate-600">Las secciones del informe se irán agregando aquí.</p>
      </main>

      <footer className="bg-slate-100 text-slate-500 text-sm py-4 px-6">
        <div className="max-w-4xl mx-auto flex justify-between">
          <span>Daniela Morales Zucco</span>
          <span>Docente: Rubén Schnettler L. — INACAP Valparaíso</span>
        </div>
      </footer>
    </div>
  )
}

export default App