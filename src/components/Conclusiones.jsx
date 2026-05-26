import { Lightbulb } from 'lucide-react'
function Conclusiones() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="text-red-500" size={28} />
                <h2 className="text-2xl font-semibold text-zinc-100">Conclusiones</h2>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6 mb-4">
                <h2 className="inline-block text-zinc-100 text-xl font-semibold mb-3 border-b border-red-500 pb-2">Conclusiones y recomendaciones: Caso BancoEstado 2020</h2>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6 mb-4 text-zinc-300">
                <h3 className="inline-block text-zinc-300 text-xl font-semibold mb-3 border-b border-red-500 pb-2">Reflexión final</h3>
                <p>Lo que más me llama la atención de este caso es que BancoEstado no era un banco descuidado, tenía la red segmentada, tenía respaldos, tenía un ciberseguro. Y aun así, un solo correo de phishing fue suficiente para paralizar 410 sucursales y dejar a 13.000 funcionarios sin poder trabajar durante días.</p>

                <p>Eso dice algo importante: la ciberseguridad no es solo tener tecnología, es también capacitar a las personas que la usan. El eslabón más débil de toda la cadena fue un trabajador que abrió un archivo adjunto sin sospechar nada, algo que le podría pasar a cualquiera si no recibe la formación adecuada.</p>

                <p>Desde el punto de vista legal, el caso también expuso varios vacíos que existían en Chile en 2020: la Ley 19.223 era demasiado antigua para cubrir el ransomware moderno, la Ley 19.628 no obligaba a notificar a los afectados ni tenía una agencia que la hiciera cumplir, y la RAN Capítulo 1-13 era demasiado genérica. El ataque aceleró cambios concretos: la Ley 21.459 (2022), el Capítulo 20-10 de la RAN (diciembre 2020) y la Ley 21.663 (2024) llegaron en buena parte porque este caso demostró que las herramientas legales existentes no eran suficientes.</p>

                <h3 className="inline-block text-zinc-300 text-xl font-semibold mt-6 mb-3 border-b border-red-500 pb-2">Recomendaciones de seguridad</h3>
                <p>Basándome en los puntos débiles que identificó el caso, estas son las medidas que habrían marcado la diferencia:</p>

                <ul className="list-disc list-inside text-zinc-300 space-y-2">
                    <li><strong>Capacitación regular en phishing:</strong> el ataque entró por un correo. Entrenar a los funcionarios para reconocer correos sospechosos es la medida más barata y más efectiva que existe. No basta con hacerlo una vez al año, tiene que ser continuo y con simulaciones reales.</li>
                    <li><strong>Filtros de correo con detección de macros maliciosas:</strong> un documento Office con macro debería levantar alertas automáticas antes de llegar a la bandeja de entrada del usuario. En 2020 ese filtro no existía o no funcionó.</li>
                    <li><strong>Segmentación de red más granular:</strong> la segmentación que tenía el banco protegió los cajeros y la app, pero no impidió que el malware se propagara a 12.000 equipos internos. Una segmentación más fina habría contenido el daño.</li>
                    <li><strong>Monitoreo continuo, incluyendo fines de semana:</strong> el ataque ocurrió un viernes y se detectó el sábado. Un sistema de monitoreo 24/7 con alertas automáticas habría acortado el tiempo de propagación significativamente.</li>
                    <li><strong>Plan de continuidad operacional actualizado:</strong> el cierre total de 410 sucursales sugiere que el plan de continuidad no contemplaba un escenario de esta magnitud. Tener procedimientos claros para seguir operando en modo degradado es esencial para una institución de este tamaño.</li>
                    <li><strong>Política de notificación a usuarios:</strong> aunque la ley no lo exigía, comunicar proactivamente a los clientes afectados habría sido lo correcto. La falta de información generó incertidumbre innecesaria.</li>
                </ul>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6 mb-4 text-zinc-300">
                <h3 className="inline-block text-zinc-300 text-xl font-semibold mb-3 border-b border-red-500 pb-2">Lo que aprendí con este análisis</h3>
                <p>Antes de hacer este análisis, la ciberseguridad me parecía un tema principalmente técnico. Después de revisar el caso en detalle, me queda claro que tiene una dimensión legal igual de importante: qué dice la ley, qué exige, qué sanciona y sobre todo qué no cubre todavía.

El caso BancoEstado es un buen ejemplo de cómo un incidente concreto puede mover el sistema legal completo. Las leyes que llegaron después no fueron casualidad, fueron respuesta directa a lo que este ataque dejó al descubierto.</p>
            </div>
        </div>
    )
}

export default Conclusiones