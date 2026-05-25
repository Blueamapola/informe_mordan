import { Gavel } from 'lucide-react'
function Delitos() {

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="flex items-center gap-3 mb-6">
                <Gavel className="text-red-500" size={28} />
                <h2 className="text-2xl font-semibold text-zinc-100">Delitos</h2>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6 mb-4 text-zinc-300 space-y-4">
                <h2 className="inline-block text-zinc-100 text-xl font-semibold mb-3 border-b border-red-500 pb-2">Acción 1: Diseño y distribución del malware</h2>
                <p>El grupo REvil creó y distribuyó dos programas diseñados específicamente para cometer delitos: QakBot, que instaló la puerta trasera en la red del banco, y el ransomware REvil/Sodinokibi, que ejecutó el cifrado masivo de archivos. Esto cae en el **Art. 8°** de la Ley 21.459.</p>

                <p>"El que para la perpetración de los delitos previstos en los artículos 1° a 4° de esta ley [...] entregare u obtuviere para su utilización, importare, difundiere o realizare otra forma de puesta a disposición uno o más dispositivos, programas computacionales, contraseñas, códigos de seguridad o de acceso u otros datos similares, creados o adaptados principalmente para la perpetración de dichos delitos."</p>

                <p>Un punto importante de este artículo es que no solo sanciona al que crea el malware, sino también al que lo obtiene y lo usa. Eso afecta directamente al modelo RaaS que usaba REvil: tanto los creadores del código como los afiliados que pagaron por usarlo son responsables del delito, no solo cómplices.</p>

                <ul className="list-disc list-inside text-zinc-300">
                    <li><strong>Pena base:</strong> Presidio menor grado mínimo (61 días a 540 días) + multa de 5 a 10 UTM</li>
                    <li><strong>Con agravante Art. 10°:</strong> Presidio menor grado medio (541 días a 3 años) + multa</li>
                </ul>

                <p>El agravante del Art. 10° aplica porque el malware fue el instrumento que interrumpió los servicios de la única banca pública del país, afectando 410 sucursales y unos 13 millones de clientes.</p>

                <h2 className="inline-block text-zinc-100 text-xl font-semibold mb-3 border-b border-red-500 pb-2">Acción 2: Acceso no autorizado a la red interna</h2>
                <p>A través del documento Word malicioso que llegó por phishing, los atacantes instalaron un backdoor que les dio acceso remoto a la red interna del banco, saltándose los controles de seguridad. Esto aplica al Art. 2°, en su forma agravada porque el acceso claramente buscaba apoderarse de información, algo que quedó confirmado cuando Sichel reconoció públicamente que sí hubo robo de datos.</p>

                <p>"El que, sin autorización o excediendo la autorización que posea y superando barreras técnicas o medidas tecnológicas de seguridad, acceda a un sistema informático [...] Si el acceso fuere realizado con el ánimo de apoderarse o usar la información contenida en el sistema informático."</p>

                <ul className="list-disc list-inside text-zinc-300">
                    <li><strong>Pena base:</strong> Presidio menor grado mínimo a medio (61 días a 3 años)</li>
                    <li><strong>Con agravante del Art. 10°:</strong> Presidio menor grado medio a máximo (541 días a 5 años)</li>
                </ul>
                <h2 className="inline-block text-zinc-100 text-xl font-semibold mb-3 border-b border-red-500 pb-2">Acción 3: Cifrado masivo de archivos con ransomware</h2>
                <p>El ransomware cifró los archivos de unos 12.000 equipos, dejándolos ilegibles. Esto vulnera dos artículos al mismo tiempo:</p>

                <p><strong>Art. 1°:</strong> sanciona obstaculizar o impedir el funcionamiento de un sistema informático. El cifrado masivo paralizó completamente la red interna del banco.</p>

                <p><strong>Art. 4°:</strong> sanciona alterar, dañar o suprimir datos informáticos causando un daño grave. El cifrado alteró irreversiblemente los datos de miles de equipos, y el cierre de 410 sucursales acredita ese daño.</p>

                <p>Cuando una sola acción vulnera dos artículos al mismo tiempo, el Código Penal (Art. 75) indica que se aplica la pena más alta, que en este caso es la del Art. 1°.</p>

                <ul className="list-disc list-inside text-zinc-300">
                    <li><strong>Pena base Art. 1°:</strong> Presidio menor grados medio a máximo (541 días a 5 años)</li>
                    <li><strong>Con agravante Art. 10°:</strong> Presidio menor máximo a presidio mayor mínimo (3 años 1 día a 10 años)</li>
                </ul>
            <h2 className="inline-block text-zinc-100 text-xl font-semibold mb-3 border-b border-red-500 pb-2">Acción 4: Paralización total del sistema</h2>
            <p>Que 13.000 funcionarios no pudieran acceder a ninguna aplicación interna durante días no es solo consecuencia del cifrado, es una conducta de obstaculización con resultado propio. El <strong>Art. 1°</strong> protege el funcionamiento normal del sistema como bien jurídico independiente, y el hecho de que nadie pudiera operar durante días acredita la obstaculización total que exige el tipo.</p>

<p>El agravante del <strong>Art. 10° inciso final</strong> aplica con especial fuerza aquí: la ley menciona expresamente los servicios financieros como categoría que activa el aumento de pena, y lo hace de forma obligatoria, dice "se aumentará", no "podrá aumentarse". BancoEstado paga pensiones y atiende a los segmentos más vulnerables del país, así que no hay mucho espacio para discutirlo.</p>

            <ul className="list-disc list-inside text-zinc-300">
                <li><strong>Pena base Art. 1°:</strong> Presidio menor grados medio a máximo (541 días a 5 años)</li>
                <li><strong>Con agravante Art. 10°:</strong> Presidio menor máximo a presidio mayor mínimo (3 años 1 día a 10 años)</li>
            </ul>
            <h2 className="inline-block text-zinc-100 text-xl font-semibold mb-3 border-b border-red-500 pb-2">Acción 5: Robo de datos y doble extorsión</h2>
            <p>La técnica de doble extorsión de REvil funciona en etapas: primero roban los datos, después los cifran, y luego amenazan con publicarlos si no pagan el rescate. Cada etapa tiene su propio delito:</p>

            <ul className="list-disc list-inside text-zinc-300">
                <li><strong>Art. 3° (interceptación ilícita):</strong> cubre la captura de datos desde los sistemas del banco sin autorización.</li>
                <li><strong>Art. 6° (receptación de datos):</strong> cubre el almacenamiento de esos datos para usarlos como presión.</li>
                <li><strong>Art. 7° (fraude informático):</strong> cubre la amenaza de publicar los datos para obtener el pago del rescate.</li>
            </ul>

            <p>El presidente de Banco Estado Sebastián Sichel confirmó que hubo sustracción de datos, aunque señaló no tener certeza de si se llegó a cobrar un rescate formalmente.</p>

            <p>Como son tres conductas distintas en momentos distintos, las penas se acumulan según el Art. 74 del Código Penal, con los límites que establece el Art. 76.</p>

            <ul className="list-disc list-inside text-zinc-300">
                <li><strong>Pena base Art. 3°:</strong> Presidio menor grados medio a máximo (541 días a 5 años)</li>
                <li><strong>Con agravante Art. 10°:</strong> Presidio menor máximo a presidio mayor mínimo (3 años 1 día a 10 años)</li>
            </ul>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6 mb-4 text-zinc-300">
            <h3 className="text-zinc-100 font-semibold mt-6 mb-3 border-b border-red-500 pb-2">Tabla resumen</h3>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="border-b border-zinc-700">
                        <th className="border border-zinc-700 p-2 text-left">Acción</th>
                        <th className="border border-zinc-700 p-2 text-left">Artículo</th>
                        <th className="border border-zinc-700 p-2 text-left">Pena base</th>
                        <th className="border border-zinc-700 p-2 text-left">Con agravante Art. 10°</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border border-zinc-700 p-2 text-left">
                        <td className="border border-zinc-700 p-2">Diseño y uso de malware</td>
                        <td className="border border-zinc-700 p-2">Art. 8°</td>
                        <td className="border border-zinc-700 p-2">Presidio menor mínimo</td>
                        <td className="border border-zinc-700 p-2">Presidio menor medio</td>
                    </tr>
                    <tr className="border border-zinc-700 p-2 text-left">
                        <td className="border border-zinc-700 p-2">Acceso ilícito</td>
                        <td className="border border-zinc-700 p-2">Art. 2° inc. 2°</td>
                        <td className="border border-zinc-700 p-2">Presidio menor mín. a medio</td>
                        <td className="border border-zinc-700 p-2">Presidio menor medio a máximo</td>
                    </tr>
                    <tr className="border border-zinc-700 p-2 text-left">
                        <td className="border border-zinc-700 p-2">Cifrado masivo</td>
                        <td className="border border-zinc-700 p-2">Art. 1° + Art. 4°</td>
                        <td className="border border-zinc-700 p-2">Presidio menor medio a máximo</td>
                        <td className="border border-zinc-700 p-2">Presidio menor máx. a presidio mayor mínimo</td>
                    </tr>
                    <tr className="border border-zinc-700 p-2 text-left">
                        <td className="border border-zinc-700 p-2">Paralización del sistema</td>
                        <td className="border border-zinc-700 p-2">Art. 1° + Art. 10°</td>
                        <td className="border border-zinc-700 p-2">Presidio menor medio a máximo</td>
                        <td className="border border-zinc-700 p-2">Presidio menor máx. a presidio mayor mínimo</td>
                    </tr>
                    <tr className="border border-zinc-700 p-2 text-left">
                        <td className="border border-zinc-700 p-2">Robo de datos / doble extorsión</td>
                        <td className="border border-zinc-700 p-2">Art. 3° + Art. 6° + Art. 7°</td>
                        <td className="border border-zinc-700 p-2">Presidio menor medio a máximo</td>
                        <td className="border border-zinc-700 p-2">Presidio menor máx. a presidio mayor mínimo</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default Delitos