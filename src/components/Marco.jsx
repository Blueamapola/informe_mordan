import { Scale } from 'lucide-react'
function MarcoNormativo() {

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="flex items-center gap-3 mb-6">
                <Scale className="text-red-500" size={28} />
                <h2 className="text-2xl font-semibold text-zinc-100">Marco Normativo</h2>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6 mb-4">
                <h2 className="inline-block text-zinc-100 text-xl font-semibold mb-3 border-b border-red-500 pb-2">Normas Nacionales 🌎</h2>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-zinc-900 rounded-lg p-6 space-y-4 text-zinc-300 mb-4">
            <h3 className="inline-block text-zinc-100 font-semibold mb-3 border-b border-red-500 pb-2">1. Ley N° 19.223: Delitos informáticos (1993)</h3>

<p>Esta es la ley con la que BancoEstado presentó la querella en septiembre de 2020. Fue la única herramienta penal disponible en ese momento, aunque tenía hartas limitaciones porque fue escrita en 1993 y no pensaba en el ransomware moderno.</p>

<p>Los artículos que aplican al caso son dos:</p>

<p>Art. 1° (Sabotaje informático): sanciona destruir o inutilizar un sistema de tratamiento de información. El ransomware cifró unos 12.000 computadores, lo que inutilizó toda la red interna del banco. El mismo artículo incluye una agravante cuando se sustraen datos, que aplica porque el presidente del banco reconoció públicamente que sí hubo robo de información.
Art. 3° (Interceptación de datos): sanciona apoderarse de información contenida en un sistema. Sebastián Sichel declaró que "este ataque lo que buscaba era tomar datos y tomó datos", así que esta figura también se configura.</p>

<p>El problema es que esta ley quedó corta para describir la doble extorsión de REvil, el robo previo de datos antes de cifrarlos no estaba contemplado de forma precisa. Eso fue parte de lo que motivó la creación de la Ley 21.459.</p>
        </div>
        <div className="bg-zinc-900 rounded-lg p-6 space-y-4 text-zinc-300 mb-4">
            <h3 className="inline-block text-zinc-100 font-semibold mb-3 border-b border-red-500 pb-2">2. Ley N° 21.459: Nueva ley de delitos informáticos (2022)</h3>
            <p>(Aplicación hipotética)</p>

<p>Esta ley reemplazó a la 19.223 e incorporó el Convenio de Budapest al sistema legal chileno. Si hubiera estado vigente en 2020, habría cubierto el caso con mucho más precisión:</p>

<p>Art. 1°: tipifica explícitamente obstaculizar el funcionamiento de un sistema informático, encaja directo con el cifrado masivo de equipos.</p>
<p>Art. 2°: sanciona el acceso no autorizado a un sistema. La instalación del backdoor a través del documento Word malicioso es exactamente eso.</p>
<p>Art. 5°: habría cubierto con más precisión la exfiltración de datos, que en la Ley 19.223 era difícil de encuadrar en el contexto del ransomware.</p>
<p>Art. 8° (agravante por infraestructura crítica): como el único banco del Estado, BancoEstado habría calificado aquí, lo que habría aumentado significativamente las penas.</p>

<p>El caso BancoEstado fue uno de los más citados en el debate parlamentario que aceleró la tramitación de esta ley.</p>
    </div>
    <div className="bg-zinc-900 rounded-lg p-6 space-y-4 text-zinc-300 mb-4">
            <h3 className="inline-block text-zinc-100 font-semibold mb-3 border-b border-red-500 pb-2">3. Ley N° 19.628: Protección de datos personales (1999)</h3>
            <p>BancoEstado es responsable de los datos personales de unos 13 millones de clientes. La Ley 19.628 le exige protegerlos, y el ataque expuso varias obligaciones incumplidas:</p>

            <ul className="list-disc list-inside text-zinc-300">
                <li><strong>Art. 11° (deber de seguridad):</strong> el banco debe adoptar las medidas técnicas necesarias para proteger los datos que almacena. Que un solo correo de phishing haya podido propagarse a 12.000 equipos sin ser detectado no es compatible con ese estándar.</li>
                <li><strong>Art. 23° (responsabilidad civil):</strong> si un tratamiento indebido de datos causa daño a los titulares, el banco responde. La exfiltración confirmada por Sichel abre esa posibilidad.</li>
                <li><strong>Art. 19° (transferencia de datos):</strong> los datos exfiltrados hacia los servidores de REvil constituyeron una transferencia no autorizada fuera del país.</li>
            </ul>

            <p>Una limitación importante de esta ley es que no obliga a notificar a los afectados cuando hay una brecha, no tiene plazos definidos y sus sanciones son bastante débiles. Por eso el banco no tuvo que avisarle a cada cliente que sus datos habían sido comprometidos.</p>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6 space-y-4 text-zinc-300 mb-4">
            <h3 className="inline-block text-zinc-100 font-semibold mb-3 border-b border-red-500 pb-2">4. DFL N° 3/1997: Ley General de Bancos + RAN Capítulo 1-13 CMF</h3>
            <p>BancoEstado, como banco regulado por la CMF, está sujeto a la Ley General de Bancos. Dos artículos aplican al caso:</p>
<ul className="list-disc list-inside text-zinc-300">
<li><strong>Art. 69°:</strong> los bancos deben administrar sus operaciones con prudencia y proteger los depósitos del público. Que el malware se haya propagado desde un solo equipo a 12.000 es difícil de compatibilizar con eso.</li>
<li><strong>Arts. 14° y 15°:</strong> son los que fundamentaron la presencia inmediata de la CMF en las dependencias del banco después del ataque.</li>
</ul>

<p>En cuanto a la <strong>RAN Capítulo 1-13</strong>, era la norma vigente en septiembre de 2020 y exigía a los bancos identificar y controlar sus riesgos tecnológicos. La falta de filtros de correo, capacitación anti-phishing y segmentación adecuada de red son incumplimientos concretos de esas obligaciones.</p>

<p>El nuevo Capítulo 20-10 de la RAN, que es la norma de ciberseguridad más específica que ha tenido la banca chilena, se publicó en julio de 2020 pero entró en vigor recién el 1 de diciembre de 2020. O sea, el ataque ocurrió exactamente en la ventana entre la publicación y la entrada en vigencia.</p>
            </div>
            <div className="col-span-2 max-w-[50%] mx-auto w-full bg-zinc-900 rounded-lg p-6 space-y-4 text-zinc-300 mb-4">
            <h3 className="inline-block text-zinc-100 font-semibold mb-3 border-b border-red-500 pb-2">5. Ley N° 18.575: Bases Generales de la Administración del Estado</h3>
            <p>Este es un punto que distingue el caso de cualquier otro banco: BancoEstado es del Estado, así que tiene una capa adicional de responsabilidad frente a la ciudadanía.</p>

            <ul className="list-disc list-inside text-zinc-300">
                <li><strong>Art. 3°:</strong> la Administración debe prestar servicios en forma continua y permanente. El cierre de 410 sucursales por un día completo es justo lo que este principio busca evitar.</li>
                <li><strong>Art. 4°:</strong> el Estado responde por los daños que causen sus órganos. Esto abre la posibilidad de responsabilidad frente a clientes que hayan sufrido perjuicios por no poder operar.</li>
                <li><strong>Art. 5°:</strong> las autoridades deben velar por la eficiente administración de los recursos públicos, lo que se puede cuestionar dado que las fallas internas permitieron la propagación del ransomware.</li>
            </ul>
            </div>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6 mb-4">
                <div className="bg-zinc-900 rounded-lg p-6 mb-4">
                <h2 className="inline-block text-zinc-100 text-xl font-semibold mb-3 border-b border-red-500 pb-2">Normas Internacionales 🌍</h2>
                </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-zinc-900 rounded-lg p-6 space-y-4 text-zinc-300 mb-4">
            <h3 className="inline-block text-zinc-100 font-semibold mb-3 border-b border-red-500 pb-2">6. Convenio de Budapest sobre Ciberdelincuencia (2001)</h3>
            <p>Este convenio es un tratado internacional que obliga a los países a tipificar ciertos delitos informáticos y a cooperar entre sí en las investigaciones. Los artículos más relevantes para el caso:</p>

            <ul className="list-disc list-inside text-zinc-300">
                <li><strong>Art. 2°:</strong> exige tipificar el acceso no autorizado a sistemas informáticos, algo que en 2020 Chile cumplía solo de forma parcial con la Ley 19.223.</li>
                <li><strong>Art. 5°:</strong> exige tipificar obstaculizar gravemente el funcionamiento de un sistema, el cifrado masivo de equipos encaja acá.</li>
                <li><strong>Art. 29°:</strong> establece mecanismos de cooperación para preservar evidencia digital. Fue clave en este caso porque REvil operaba desde Rusia, lo que requería coordinación internacional para investigar.</li>
            </ul>

<p>En la práctica, la investigación no llegó a condenas porque Rusia no coopera con extradiciones. En enero de 2022 el FSB ruso desmanteló al grupo, pero ningún miembro fue procesado en Chile.</p>    
            </div>
            <div className="bg-zinc-900 rounded-lg p-6 space-y-4 text-zinc-300 mb-4">
            <h3 className="inline-block text-zinc-100 font-semibold mb-3 border-b border-red-500 pb-2">7.ISO/IEC 27001:2013: Seguridad de la Información</h3>
            <p>Esta norma internacional define un sistema de gestión de seguridad de la información. Varios de sus controles no se estaban cumpliendo en BancoEstado al momento del ataque:</p>

            <ul className="list-disc list-inside text-zinc-300">
                <li><strong>Control A.12.2 (protección contra malware):</strong> exige controles de detección y capacitación a usuarios. El phishing pasó sin ser detectado.</li>
                <li><strong>Control A.7.2.2 (capacitación en seguridad):</strong> todos los empleados deben recibir formación regular. El hecho de que el funcionario haya abierto el adjunto sin sospechar nada sugiere que esa formación no era efectiva.</li>
                <li><strong>Control A.16.1 (gestión de incidentes):</strong> exige detectar y responder a incidentes. La demora entre la infección y la detección indica problemas en el monitoreo.</li>
                <li><strong>Control A.17.1 (continuidad del negocio):</strong> exige tener un plan para incidentes graves. El cierre total de 410 sucursales muestra que el plan no era suficiente para este escenario.</li>
            </ul>
            </div>
            <div className="col-span-2 max-w-[50%] mx-auto w-full bg-zinc-900 rounded-lg p-6 space-y-4 text-zinc-300 mb-4">
            <h3 className="inline-block text-zinc-100 font-semibold mb-3 border-b border-red-500 pb-2">8. Principios del Comité de Basilea: Riesgo Operacional</h3>
            <p>El Comité de Basilea define el riesgo operacional como pérdidas que resultan de procesos, personas, sistemas o eventos externos, lo que incluye los ciberataques. Los principios que más aplican al caso:</p>

<ul className="list-disc list-inside text-zinc-300">
                <li><strong>Principio 1 (responsabilidad del directorio):</strong> el directorio debe revisar periódicamente el marco de gestión de riesgos. La magnitud del ataque pone en duda si eso se hacía con la profundidad necesaria.</li>
                <li><strong>Principio 6 (identificación de riesgos):</strong> los bancos deben evaluar el riesgo en todos sus sistemas. Que el malware se propagara a 12.000 equipos desde uno solo refleja una evaluación insuficiente.</li>
                <li><strong>Principio 7 (monitoreo del riesgo):</strong> exige monitoreo regular. La detección tardía durante el fin de semana es consistente con un monitoreo que no funcionó bien.</li>
            </ul>
            </div>
            </div>
        </div>
    )
}

export default MarcoNormativo
