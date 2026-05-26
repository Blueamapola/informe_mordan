import { Bot } from 'lucide-react'
function Prompts() {
    
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="flex items-center gap-3 mb-6">
                <Bot className="text-red-500" size={28} />
                <h2 className="text-2xl font-semibold text-zinc-100">Bitácora de uso de IA</h2>
            </div>

            <div className="bg-zinc-900 rounded-lg p-6 mb-4 text-zinc-300 space-y-4">
                <p>Para este trabajo usé Claude (claude.ai) como herramienta principal y también usé el agente Copilot integrado en VS Code para completar el código rápidamente. Claude lo usé en dos etapas distintas: primero para investigar el caso y después para guiarme en la construcción de la página web en React.</p>
            </div>

            <div className="bg-zinc-900 rounded-lg p-6 mb-4 text-zinc-300 space-y-4">
                <h3 className="text-zinc-100 font-semibold border-b border-red-500 pb-2">Uso de IA en la investigación del caso</h3>

                <div className="space-y-2">
                    <p><strong className="text-zinc-100">Prompt 1 — Contexto técnico del ataque (archivo 01)</strong></p>
                    <p><strong>Herramienta:</strong> Claude (claude.ai)</p>
                    <p className="bg-zinc-800 rounded p-3 italic">"Para un trabajo de la clase de Seguridad de la Información en INACAP, sobre el ataque de ransomware REvil a BancoEstado en septiembre de 2020. Necesito que me expliques: cuál fue el punto de entrada exacto del ataque, qué es QakBot y cómo se relaciona con REvil, cuántas sucursales cerraron y por cuánto tiempo, y qué es el modelo Ransomware-as-a-Service. Por favor sé preciso con las fechas."</p>
                    <p><strong>Para qué se usó:</strong> Aclarar conceptos técnicos como QakBot y el modelo RaaS que no conocía antes de investigar el caso.</p>
                    <p><strong>Qué se usó y qué no:</strong> Usé la explicación de QakBot y el modelo RaaS como punto de partida para entender el ataque. La redacción del resumen y la cronología la hice yo basándome en esa comprensión y en fuentes adicionales.</p>
                </div>

                <hr className="border-zinc-700" />

                <div className="space-y-2">
                    <p><strong className="text-zinc-100">Prompt 2 — Normas aplicables (archivo 02)</strong></p>
                    <p><strong>Herramienta:</strong> Claude (claude.ai)</p>
                    <p className="bg-zinc-800 rounded p-3 italic">"Siguiendo con el caso de BancoEstado 2020, necesito identificar normas nacionales chilenas aplicables. El banco es una institución estatal regulada por la CMF. Las normas que ya tengo son la Ley 21.459 como supuesto hipotético y la Ley 19.628. ¿Qué otras normas chilenas son relevantes considerando que BancoEstado es una empresa del Estado? Justifica cada una con su artículo específico."</p>
                    <p><strong>Para qué se usó:</strong> Verificar si había normas relevantes que me estuviera perdiendo, especialmente relacionadas con el carácter estatal del banco.</p>
                    <p><strong>Qué se usó y qué no:</strong> La lista de normas la usé como referencia para orientar mi investigación. El análisis de cada artículo y su relación con el caso lo desarrollé yo.</p>
                </div>

                <hr className="border-zinc-700" />

                <div className="space-y-2">
                    <p><strong className="text-zinc-100">Prompt 3 — Tipificación de delitos (archivo 03)</strong></p>
                    <p><strong>Herramienta:</strong> Claude (claude.ai)</p>
                    <p className="bg-zinc-800 rounded p-3 italic">"Necesito tipificar 5 acciones del grupo REvil durante el ataque a BancoEstado 2020 usando la Ley 21.459. Las acciones son: diseño y uso de malware QakBot y REvil, acceso remoto no autorizado, cifrado masivo de archivos, paralización del sistema dejando sin operar a 13.000 funcionarios, y posible exfiltración de datos con doble extorsión. Para cada acción indica el artículo exacto, el texto legal y si aplica el agravante por infraestructura crítica."</p>
                    <p><strong>Para qué se usó:</strong> Identificar qué artículos de la Ley 21.459 aplican a cada acción, ya que no tenía experiencia leyendo leyes de delitos informáticos.</p>
                    <p><strong>Qué se usó y qué no:</strong> Los artículos aplicables me sirvieron como punto de partida. El análisis de por qué cada conducta encaja en cada artículo lo desarrollé yo.</p>
                </div>

                <hr className="border-zinc-700" />

                <div className="space-y-2">
                    <p><strong className="text-zinc-100">Prompt 4 — Comparación de marcos regulatorios (archivo 04)</strong></p>
                    <p><strong>Herramienta:</strong> Claude (claude.ai)</p>
                    <p className="bg-zinc-800 rounded p-3 italic">"Necesito una tabla comparativa de marcos regulatorios para los sectores de Banca/Finanzas, Salud y Gobierno/Sector público. Los ejes deben incluir: marco regulatorio principal, plazo de notificación de brechas, tipos de datos más protegidos, sanciones máximas y exigencia de auditoría externa. También necesito un análisis de fortalezas y debilidades de cada sector frente a un ataque equivalente al de BancoEstado."</p>
                    <p><strong>Para qué se usó:</strong> Tener una base de qué normas rigen cada sector para poder comparar.</p>
                    <p><strong>Qué se usó y qué no:</strong> La estructura de la tabla la tomé como referencia. El análisis comparativo y la conclusión final, que incluye un ejemplo reciente de ataque al Registro Civil en Chile, fueron de investigación propia.</p>
                </div>

                <hr className="border-zinc-700" />

                <div className="space-y-2">
                    <p><strong className="text-zinc-100">Prompt 5 — Responsabilidades legales (archivo 05)</strong></p>
                    <p><strong>Herramienta:</strong> Claude (claude.ai)</p>
                    <p className="bg-zinc-800 rounded p-3 italic">"Necesito identificar las responsabilidades legales de los actores del caso BancoEstado 2020: el grupo REvil, BancoEstado como institución, el directorio, el funcionario que ejecutó la macro maliciosa, y la CMF. Para cada actor indica tipo de responsabilidad (penal/civil/administrativa), norma chilena con artículo, y consecuencia legal posible."</p>
                    <p><strong>Para qué se usó:</strong> Entender qué tipo de responsabilidad legal corresponde a cada actor, especialmente la diferencia entre responsabilidad penal, civil y administrativa.</p>
                    <p><strong>Qué se usó y qué no:</strong> Usé la clasificación por tipo de responsabilidad como guía. Se ajustó el análisis según atenuantes, como por ejemplo el caso del funcionario.</p>
                </div>

                <hr className="border-zinc-700" />

                <div className="space-y-2">
                    <p><strong className="text-zinc-100">Prompt 6 — Datos personales y Ley 19.628 (archivo 06)</strong></p>
                    <p><strong>Herramienta:</strong> Claude (claude.ai)</p>
                    <p className="bg-zinc-800 rounded p-3 italic">"Para el tratamiento de datos personales del caso BancoEstado 2020 bajo la Ley 19.628 necesito: categorizar los tipos de datos que procesa el banco, analizar cuáles califican como sensibles bajo el Art. 2 letra g) y por qué los datos financieros no califican formalmente pero son delicados en la práctica, identificar obligaciones incumplidas especialmente el Art. 11, y explicar cada derecho ARCO aplicado al caso."</p>
                    <p><strong>Para qué se usó:</strong> Entender la definición legal de dato sensible y cómo se aplica la Ley 19.628, que no había estudiado antes.</p>
                    <p><strong>Qué se usó y qué no:</strong> La explicación de los derechos ARCO me ayudó a entender el concepto. La aplicación específica al caso BancoEstado y las limitaciones que el caso dejó en evidencia las analicé yo.</p>
                </div>
            </div>

            <div className="bg-zinc-900 rounded-lg p-6 mb-4 text-zinc-300 space-y-4">
                <h3 className="text-zinc-100 font-semibold border-b border-red-500 pb-2">Uso de IA en la construcción de la página web</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Claude (claude.ai):</strong> para aprender conceptos básicos de React y JSX desde cero.</li>
                    <li><strong>Agente Copilot en VS Code:</strong> para completar código más rápidamente una vez que ya entendía la estructura básica de cada componente.</li>
                </ul>
                <p><strong>Prompt principal:</strong></p>
                <p className="bg-zinc-800 rounded p-3 italic">"Guíame para crear una página web con React con JSX llamada Análisis legal caso BancoEstado. Ya tengo todo lo necesario instalado, pero necesito ayuda para crear la página ya que no tengo conocimientos en React. No generes el código completo sino que guíame paso a paso de manera explicativa. Enfócate en qué es un componente, cómo funciona JSX y cómo se realiza la renderización en el navegador."</p>
                <p><strong>Errores relevantes corregidos con ayuda:</strong></p>
                <ul className="list-disc list-inside space-y-2">
                    <li>Subí la carpeta <code>node_modules</code> a GitHub varias veces. Lo resolví con <code>git rm -r --cached node_modules</code>.</li>
                    <li>El primer deploy en Vercel falló porque <code>@tailwindcss/vite</code> no estaba declarado en el <code>package.json</code>.</li>
                    <li>Cometí errores de estructura JSX como anidar <code>&lt;tr&gt;</code> dentro de otro <code>&lt;tr&gt;</code>.</li>
                    <li>Tuve conflictos con git por diferencias entre el historial local y el remoto.</li>
                </ul>
            </div>

            <div className="bg-zinc-900 rounded-lg p-6 mb-4 text-zinc-300 space-y-4">
                <h3 className="text-zinc-100 font-semibold border-b border-red-500 pb-2">Nota sobre el historial de commits</h3>
                <p>Los archivos markdown aparecen subidos juntos en algunos commits debido a un problema técnico: tenía una primera versión del proyecto en un repositorio separado donde sí había ido subiendo los archivos gradualmente. Al reorganizar el proyecto para tener todo en un solo repositorio y resolver los conflictos de historial, los archivos quedaron agrupados en un mismo commit. El trabajo de investigación y redacción de cada sección se hizo de forma progresiva, no de una sola vez.</p>
            </div>

            <div className="bg-zinc-900 rounded-lg p-6 mb-4 text-zinc-300 space-y-4">
                <h3 className="text-zinc-100 font-semibold border-b border-red-500 pb-2">Reflexión final</h3>
                <p>Usar IA en este trabajo me ayudó principalmente en dos cosas: entender conceptos legales que no había visto antes, como los artículos de la Ley 21.459 o los derechos ARCO, y aprender React desde cero en muy poco tiempo.</p>
                <p>Lo que aprendí es que la calidad de lo que obtienes depende directamente de qué tan bien entiendes el tema. Los prompts que funcionaron mejor fueron los que mencionaban el caso específico, las leyes exactas y los artículos concretos. Eso me obligó a investigar primero para poder preguntar bien.</p>
            </div>
        </div>
    )
}

export default Prompts