import { Database } from 'lucide-react'

function Datos() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="flex items-center gap-3 mb-6">
                <Database className="text-red-500" size={28} />
                <h2 className="text-2xl font-semibold text-zinc-100">Datos</h2>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6 mb-4 text-zinc-300">
                <h2 className="text-zinc-100 font-semibold mt-6 mb-6 border-b border-red-500 pb-2">Tipos de datos que procesa BancoEstado</h2>
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b border-zinc-700">
                            <th className="border border-zinc-700 p-2 text-left">Categoría</th>
                            <th className="border border-zinc-700 p-2 text-left">Ejemplos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border border-zinc-700 p-2 text-left">
                            <td className="border border-zinc-700 p-2">Datos de identidad</td>
                            <td className="border border-zinc-700 p-2">Nombre, RUT, fecha de nacimiento, domicilio, correo, teléfono</td>
                        </tr>
                        <tr className="border border-zinc-700 p-2 text-left">
                            <td className="border border-zinc-700 p-2">Datos financieros</td>
                            <td className="border border-zinc-700 p-2">Saldos, historial crediticio, deudas, datos de tarjetas, transacciones</td>
                        </tr>
                        <tr className="border border-zinc-700 p-2 text-left">
                            <td className="border border-zinc-700 p-2">Datos biométricos</td>
                            <td className="border border-zinc-700 p-2">Huella dactilar, reconocimiento facial, firma digitalizada</td>
                        </tr>
                        <tr className="border border-zinc-700 p-2 text-left">
                            <td className="border border-zinc-700 p-2">Datos laborales</td>
                            <td className="border border-zinc-700 p-2">AFP, empleador, liquidaciones de sueldo, situación tributaria</td>
                        </tr>
                        <tr className="border border-zinc-700 p-2 text-left">
                            <td className="border border-zinc-700 p-2">Datos relacionales</td>
                            <td className="border border-zinc-700 p-2">Cargas familiares, avales, codeudores</td>
                        </tr>
                        <tr className="border border-zinc-700 p-2 text-left">
                            <td className="border border-zinc-700 p-2">Datos digitales</td>
                            <td className="border border-zinc-700 p-2">IP de acceso, dispositivos registrados, patrones de uso bancario</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6 mb-4 text-zinc-300">
                <h2 className="inline-block text-zinc-100 text-xl font-semibold mb-3 border-b border-red-500 pb-2">¿Cuáles son datos sensibles?</h2>
                <p>El Art. 2 letra g) de la Ley 19.628 define los datos sensibles como aquellos que refieren a características físicas o morales de las personas, o a hechos de su vida privada: hábitos personales, origen racial, opiniones políticas, creencias religiosas, estado de salud y vida sexual.</p>

                <p>Aplicando esa definición al caso:</p>

                <ul className="list-disc list-inside text-zinc-100 space-y-2">
                    <li><strong>Datos biométricos: sí son sensibles.</strong> La huella dactilar y el reconocimiento facial refieren directamente a características físicas de la persona.</li>
                    <li><strong>Datos financieros: no lo son formalmente.</strong> No están en la lista del Art. 2 letra g), así que la ley no los trata como sensibles.</li>
                </ul>

                <p>Eso no significa que no sean delicados en la práctica. El historial de transacciones de una persona puede revelar gastos en farmacias, clínicas, donaciones a partidos políticos o iglesias, o establecimientos de adultos. Aunque la ley no los clasifique como sensibles, en la práctica exponen aspectos muy íntimos de la vida de las personas. En el modelo de doble extorsión de REvil, amenazar con publicar esos datos es igual de coercitivo que publicar datos de salud.</p>

                <p>Esta es una de las limitaciones más evidentes de la Ley 19.628, que la Ley 21.719 corregirá cuando entre en vigencia en 2026 incluyendo los datos financieros como categoría protegida.</p>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6 mb-4 text-zinc-300">
                <h2 className="inline-block text-zinc-100 text-xl font-semibold mb-3 border-b border-red-500 pb-2">Obligaciones incumplidas por BancoEstado</h2>
                <ul className="list-disc list-inside space-y-4 text-zinc-300">
                <li>
                <strong>Art. 11° Deber de seguridad</strong>
                <p className="mt-2 ml-4">Es el artículo más relevante del caso. Le exige al banco adoptar las medidas técnicas necesarias para proteger los datos que almacena y evitar que sean accedidos sin autorización. La cadena de fallas que hizo posible el ataque, correo de phishing sin filtrar, macro ejecutada sin detección, propagación a 12.000 equipos sin segmentación adecuada, detección tardía, es difícil de compatibilizar con ese estándar.</p>
                </li>
                <li>
                <strong>Art. 19° Transferencia no autorizada</strong>
                <p className="mt-2 ml-4">La exfiltración de datos hacia los servidores de REvil fue una transferencia de datos personales fuera del país, sin consentimiento y sin autorización legal. Eso incumple directamente este artículo.</p>
                </li>
                <li>
                    <strong>Art. 23° Responsabilidad civil</strong>
                    <p className="mt-2 ml-4">El banco debe indemnizar el daño patrimonial y moral causado por el tratamiento indebido de datos. La exfiltración confirmada por el presidente Sichel abre esa posibilidad frente a los titulares afectados. El problema práctico es que el banco no especificó públicamente qué datos exactamente fueron sustraídos, lo que dificulta que los clientes acrediten un daño concreto.    
                    </p>
                </li>
            </ul>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6 mb-4 text-zinc-300 space-y-4">
                <h2 className="inline-block text-zinc-100 text-xl font-semibold mb-3 border-b border-red-500 pb-2">Derechos ARCO</h2>
                <p>Los derechos ARCO están en el Art. 12° de la Ley 19.628 y son los derechos que tiene cualquier persona frente a quien maneja sus datos. El problema transversal de este caso es que todos estos derechos son reactivos: el titular tiene que ejercerlos activamente. Sin una obligación de notificar las brechas, los 13 millones de clientes de BancoEstado no sabían que sus datos habían sido comprometidos y, por lo tanto, no podían ejercer ninguno de estos derechos en la práctica.</p>

                <p><strong>Acceso (A):</strong> cualquier cliente tenía derecho a saber qué información suya fue comprometida. Pero como el banco no notificó individualmente, nadie sabía que tenía motivo para pedirlo.</p>
                <p><strong>Rectificación (R):</strong> si la restauración desde los respaldos dejó datos incorrectos, los clientes tenían derecho a pedir corrección. Mismo problema: sin notificación, no sabían que algo podía estar mal.</p>
                <p><strong>Cancelación (C):</strong> el titular puede pedir que se eliminen sus datos cuando ya no sean necesarios. Este derecho tiene alcance muy limitado aquí porque la Ley General de Bancos obliga a conservar ciertos datos por 5 a 10 años.</p>
                <p><strong>Oposición (O):</strong> en teoría los clientes podían exigir suspensión del tratamiento hasta que el banco acreditara cumplimiento del Art. 11°. En la práctica requería iniciar una acción judicial, porque en 2020 no existía una autoridad de protección de datos que pudiera ordenar medidas cautelares.</p>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6 mb-4 text-zinc-300">
                <h2 className="text-zinc-100 font-semibold mt-6 mb-6 border-b border-red-500 pb-2">Limitaciones de la Ley 19.628 expuestas por el caso</h2>
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b border-zinc-700">
                            <th className="border border-zinc-700 p-2 text-left">Limitación</th>
                            <th className="border border-zinc-700 p-2 text-left">Impacto en el caso</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border border-zinc-700 p-2 text-left">
                            <td className="border border-zinc-700 p-2">Sin plazo de notificación de brechas</td>
                            <td className="border border-zinc-700 p-2">El banco no estaba obligado a avisar a los 13 millones de clientes afectados</td>
                        </tr>
                        <tr className="border border-zinc-700 p-2 text-left">
                            <td className="border border-zinc-700 p-2">Datos financieros fuera de la lista de sensibles</td>
                            <td className="border border-zinc-700 p-2">Datos muy íntimos recibieron solo protección estándar</td>
                        </tr>
                        <tr className="border border-zinc-700 p-2 text-left">
                            <td className="border border-zinc-700 p-2">Sin agencia fiscalizadora activa</td>
                            <td className="border border-zinc-700 p-2">Nadie pudo investigar ni sancionar el posible incumplimiento del Art. 11°</td>
                        </tr>
                        <tr className="border border-zinc-700 p-2 text-left">
                            <td className="border border-zinc-700 p-2">Art. 11° sin estándar técnico definido</td>
                            <td className="border border-zinc-700 p-2">La norma exige "medidas necesarias" sin especificar cuáles</td>
                        </tr>
                        <tr className="border border-zinc-700 p-2 text-left">
                            <td className="border border-zinc-700 p-2">Sin evaluación de impacto obligatoria</td>
                            <td className="border border-zinc-700 p-2">No se exigía identificar riesgos antes de tratar datos a gran escala</td>
                        </tr>
                        <tr className="border border-zinc-700 p-2 text-left">
                            <td className="border border-zinc-700 p-2">Sin Delegado de Protección de Datos</td>
                            <td className="border border-zinc-700 p-2">No había un responsable interno de velar por la protección de datos</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6 mb-4 text-zinc-300">
                <h2 className="text-zinc-100 font-semibold mt-6 mb-6 border-b border-red-500 pb-2">Lo que cambiará con la Ley 21.719</h2>
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b border-zinc-700">
                            <th className="border border-zinc-700 p-2 text-left">Materia</th>
                            <th className="border border-zinc-700 p-2 text-left">Ley 19.628 (2020)</th>
                            <th className="border border-zinc-700 p-2 text-left">Ley 21.719 (vigente dic. 2026)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border border-zinc-700 p-2 text-left">
                            <td className="border border-zinc-700 p-2">Notificación de brechas</td>
                            <td className="border border-zinc-700 p-2">Sin obligación</td>
                            <td className="border border-zinc-700 p-2">Plazo definido al CSIRT y a los titulares</td>
                        </tr>
                        <tr className="border border-zinc-700 p-2 text-left">
                            <td className="border border-zinc-700 p-2">Datos financieros</td>
                            <td className="border border-zinc-700 p-2">No protegidos como sensibles</td>
                            <td className="border border-zinc-700 p-2">Incluidos como categoría protegida</td>
                        </tr>
                        <tr className="border border-zinc-700 p-2 text-left">
                            <td className="border border-zinc-700 p-2">Autoridad de control</td>
                            <td className="border border-zinc-700 p-2">Sin agencia activa</td>
                            <td className="border border-zinc-700 p-2">Agencia de Protección de Datos con potestad sancionatoria</td>
                        </tr>
                        <tr className="border border-zinc-700 p-2 text-left">
                            <td className="border border-zinc-700 p-2">Sanciones</td>
                            <td className="border border-zinc-700 p-2">Débiles</td>
                            <td className="border border-zinc-700 p-2">Hasta 20.000 UTM o 4% de los ingresos anuales</td>
                        </tr>
                        <tr className="border border-zinc-700 p-2 text-left">
                            <td className="border border-zinc-700 p-2">Evaluación de impacto</td>
                            <td className="border border-zinc-700 p-2">No exigida</td>
                            <td className="border border-zinc-700 p-2">Obligatoria para tratamientos de alto riesgo</td>
                        </tr>
                        <tr className="border border-zinc-700 p-2 text-left">
                            <td className="border border-zinc-700 p-2">Delegado de datos (DPO)</td>
                            <td className="border border-zinc-700 p-2">No requerido</td>
                            <td className="border border-zinc-700 p-2">Obligatorio para ciertos responsables</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Datos