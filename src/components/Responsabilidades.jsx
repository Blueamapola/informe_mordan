import { Scale } from 'lucide-react'
function Responsabilidades() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="flex items-center gap-3 mb-6">
                <Scale className="text-red-500" size={28} />
                <h2 className="text-2xl font-semibold text-zinc-100">Responsabilidades</h2>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6 mb-4">
                <h2 className="inline-block text-zinc-100 text-xl font-semibold mb-3 border-b border-red-500 pb-2">Responsabilidades legales de los actores</h2>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6 mb-4 text-zinc-300 space-y-4">
                <h2 className="inline-block text-zinc-100 text-xl font-semibold mb-3 border-b border-red-500 pb-2">Grupo REvil: Los atacantes ⚠</h2>
                <p>Son los responsables directos del ataque. Bajo la Ley 19.223, que era la vigente en 2020, el cifrado de unos 12.000 equipos configura el delito de sabotaje informático (Art. 1°). Además, el presidente Sichel reconoció públicamente que sí hubo robo de datos, lo que también configura el Art. 3° sobre interceptación de datos.</p>

<p>Si se aplicara la Ley 21.459 de forma hipotética, les corresponderían los Arts. 1°, 2°, 3°, 4°, 7° y 8°, más el agravante del Art. 10° inciso final por afectar servicios financieros de utilidad pública. En materia civil, el Art. 2314 del Código Civil los obliga a indemnizar todos los daños causados.</p>

<p>El problema práctico es que REvil operaba desde Rusia, un país que no coopera con investigaciones internacionales. En enero de 2022 el FSB ruso desmanteló al grupo, pero ningún miembro fue extraditado ni procesado en Chile. La responsabilidad existe legalmente, pero ejecutarla es prácticamente imposible.</p>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6 mb-4 text-zinc-300 space-y-4">
                <h2 className="inline-block text-zinc-100 text-xl font-semibold mb-3 border-b border-red-500 pb-2">BancoEstado: Víctima y responsable al mismo tiempo🏦</h2>
                <p>Esta es la parte más compleja del caso: BancoEstado es víctima del ataque, pero también es responsable de no haber tenido los controles básicos que podrían haberlo prevenido.</p>

                <p>Bajo la **Ley 19.628**, el Art. 11° le exige adoptar las medidas técnicas necesarias para proteger los datos personales de sus clientes. Que un solo correo de phishing haya podido propagarse a 12.000 equipos sin ser detectado es difícil de compatibilizar con ese estándar. El Art. 23° además establece que el banco responde por los daños causados a los titulares de los datos afectados por la exfiltración.</p>

                <p>En el plano regulatorio, la **RAN Capítulo 1-13**, vigente en septiembre de 2020, exigía identificar y controlar los riesgos tecnológicos. La propagación del malware a 12.000 equipos desde uno solo es difícilmente compatible con ese estándar.</p>

                <p>Y como empresa pública, aplica además la **Ley 18.575 (Art. 4°)**: el Estado responde por los daños que causen sus órganos. El cierre de 410 sucursales interrumpió un servicio público esencial, lo que puede configurar falta de servicio sin necesidad de acreditar culpa individual.</p>
                </div>
                <div className="bg-zinc-900 rounded-lg p-6 mb-4 text-zinc-300 space-y-4">
                <h2 className="inline-block text-zinc-100 text-xl font-semibold mb-3 border-b border-red-500 pb-2">Directorio y alta dirección 👨‍💼</h2>
                <p>El directorio tiene el deber de asegurarse de que el banco cuente con los controles necesarios para prevenir este tipo de incidentes. La **Ley 20.393 (Art. 3°)** establece responsabilidad penal para quienes dirigen una institución cuando no implementaron modelos de prevención adecuados, y no requiere demostrar intención, basta la omisión.</p>

                <p>Un antecedente relevante: Sodinokibi ya había atacado a Telecom Argentina en julio de 2020, dos meses antes del incidente en Chile. Eso significa que había señales de alerta previas que el directorio podría haber considerado para reforzar las defensas.</p>

                <p>En cuanto a consecuencias concretas, la CMF puede sancionar individualmente a los directores con multas e inhabilitación para ejercer cargos en instituciones financieras.</p>
                </div>
                <div className="bg-zinc-900 rounded-lg p-6 mb-4 text-zinc-300 space-y-4">
                <h2 className="inline-block text-zinc-100 text-xl font-semibold mb-3 border-b border-red-500 pb-2">El funcionario que abrió el archivo malicioso 👨🏻</h2>
                <p>Es el actor con menor responsabilidad del caso. El phishing está diseñado para engañar incluso a personas atentas, no hubo intención de causar daño, y sin dolo no se configura el delito según el Art. 1° del Código Penal.</p>

                <p>En materia administrativa podría enfrentar un sumario bajo el Estatuto Administrativo (Ley 18.834, Art. 119°), pero la sanción depende de si el banco tenía políticas de ciberseguridad documentadas y capacitación formal. Si no las tenía, la responsabilidad se traslada al banco. Si las tenía y el funcionario las ignoró, podría haber una sanción menor.</p>
                </div>
                <div className="bg-zinc-900 rounded-lg p-6 mb-4 text-zinc-300 space-y-4">
                <h2 className="inline-block text-zinc-100 text-xl font-semibold mb-3 border-b border-red-500 pb-2">CMF: El regulador 👩🏻‍⚖️</h2>
                <p>La CMF tiene el deber de supervisar que los bancos cumplan los estándares de seguridad (Ley 21.000, Art. 5°). En este caso actuó bien, se instaló físicamente en el banco durante el incidente y coordinó la respuesta de forma activa.</p>

                <p>Hay una tensión que vale mencionar: el Capítulo 20-10 fue publicado en julio de 2020 con vigencia diferida al 1 de diciembre. El ataque ocurrió exactamente en esa ventana. Podría analizarse si la CMF debió adelantar la vigencia o emitir instrucciones de emergencia, aunque en la práctica actuó dentro de sus atribuciones y no hubo inacción.</p>

                <p>El problema mayor del caso es que el grupo con mayor responsabilidad legal (REvil) tiene la menor ejecutabilidad práctica por operar desde Rusia. En cambio, Banco Estado y su directorio, que son más fáciles de alcanzar legalmente, son al mismo tiempo víctimas del ataque y responsables de las fallas que lo hicieron posible.</p>
                </div>
                <div className="bg-zinc-900 rounded-lg p-6 mb-4 text-zinc-300">
            <h2 className="text-zinc-100 font-semibold mt-6 mb-6 border-b border-red-500 pb-2">Tabla comparativa</h2>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="border-b border-zinc-700">
                        <th className="border border-zinc-700 p-2 text-left">Actor</th>
                        <th className="border border-zinc-700 p-2 text-left">Penal</th>
                        <th className="border border-zinc-700 p-2 text-left">Civil</th>
                        <th className="border border-zinc-700 p-2 text-left">Administrativa</th>
                        <th className="border border-zinc-700 p-2 text-left">Estatal</th>
                        <th className="border border-zinc-700 p-2 text-left">Ejecutabilidad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border border-zinc-700 p-2 text-left">
                        <td className="border border-zinc-700 p-2">Grupo REvil</td>
                        <td className="border border-zinc-700 p-2">Alta</td>
                        <td className="border border-zinc-700 p-2">Alta</td>
                        <td className="border border-zinc-700 p-2">-</td>
                        <td className="border border-zinc-700 p-2">-</td>
                        <td className="border border-zinc-700 p-2">Muy baja</td>
                        </tr>
                    <tr className="border border-zinc-700 p-2 text-left">
                        <td className="border border-zinc-700 p-2">Banco Estado</td>
                        <td className="border border-zinc-700 p-2">-</td>
                        <td className="border border-zinc-700 p-2">Media</td>
                        <td className="border border-zinc-700 p-2">Alta</td>
                        <td className="border border-zinc-700 p-2">Ata</td>
                        <td className="border border-zinc-700 p-2">Media</td>
                        </tr>
                        <tr className="border border-zinc-700 p-2 text-left">
                        <td className="border border-zinc-700 p-2">Directorio</td>
                        <td className="border border-zinc-700 p-2">Media</td>
                        <td className="border border-zinc-700 p-2">Media</td>
                        <td className="border border-zinc-700 p-2">Alta</td>
                        <td className="border border-zinc-700 p-2">Media</td>
                        <td className="border border-zinc-700 p-2">Media</td>
                    </tr>
                    <tr className="border border-zinc-700 p-2 text-left">
                        <td className="border border-zinc-700 p-2">Funcionario</td>
                        <td className="border border-zinc-700 p-2">Nula</td>
                        <td className="border border-zinc-700 p-2">Baja</td>
                        <td className="border border-zinc-700 p-2">Media</td>
                        <td className="border border-zinc-700 p-2">-</td>
                        <td className="border border-zinc-700 p-2">Baja</td>
                    </tr>
                    <tr className="border border-zinc-700 p-2 text-left">
                        <td className="border border-zinc-700 p-2">CMF</td>
                        <td className="border border-zinc-700 p-2">-</td>
                        <td className="border border-zinc-700 p-2">-</td>
                        <td className="border border-zinc-700 p-2">Media</td>
                        <td className="border border-zinc-700 p-2">Media</td>
                        <td className="border border-zinc-700 p-2">Baja</td>
                    </tr>
                </tbody>
                </table>
                </div>
        </div>
    )
}

export default Responsabilidades