import { GitCompare } from 'lucide-react'
function Comparacion() {

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="flex items-center gap-3 mb-6">
                <GitCompare className="text-red-500" size={28} />
                <h2 className="text-2xl font-semibold text-zinc-100">Comparación</h2>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6 mb-4 text-zinc-300">
            <h2 className="text-zinc-100 font-semibold mt-6 mb-6 border-b border-red-500 pb-2">Marco regulatorio principal</h2>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="border-b border-zinc-700">
                        <th className="border border-zinc-700 p-2 text-left">Sector</th>
                        <th className="border border-zinc-700 p-2 text-left">Marco principal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border border-zinc-700 p-2 text-left">
                        <td className="border border-zinc-700 p-2">Banca/Finanzas</td>
                        <td className="border border-zinc-700 p-2">DFL N°3/1997 (Ley General de Bancos) · RAN Cap. 1-13 → 20-10 CMF · Ley 21.663 (2024) · Ley 21.719 (vigente 2026)</td>
                        </tr>
                    <tr className="border border-zinc-700 p-2 text-left">
                        <td className="border border-zinc-700 p-2">Salud</td>
                        <td className="border border-zinc-700 p-2">Ley 19.628 para datos clínicos sensibles · Ley 21.663 si califica como PSE/OIV · Ley 21.719 desde 2026 · Sin equivalente chileno al HIPAA de EE.UU.</td>
                        </tr>
                        <tr className="border border-zinc-700 p-2 text-left">
                        <td className="border border-zinc-700 p-2">Gobierno</td>
                        <td className="border border-zinc-700 p-2">Ley 18.575 LOCBGAE · DS 83/2004 (norma técnica desactualizada) · Ley 21.663 para PSE/OIV públicos · Contraloría General de la República</td>
                    </tr>
                </tbody>
                </table>
                </div>
                <div className="bg-zinc-900 rounded-lg p-6 mb-4 text-zinc-300">
            <h2 className="text-zinc-100 font-semibold mt-6 mb-6 border-b border-red-500 pb-2">Plazos de notificación de brechas</h2>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="border-b border-zinc-700">
                        <th className="border border-zinc-700 p-2 text-left">Sector</th>
                        <th className="border border-zinc-700 p-2 text-left">Al CSIRT Nacional</th>
                        <th className="border border-zinc-700 p-2 text-left">A usuarios/ciudadanos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border border-zinc-700 p-2 text-left">
                        <td className="border border-zinc-700 p-2">Banca/Finanzas</td>
                        <td className="border border-zinc-700 p-2">3 horas (alerta) · 72 horas (actualización) · más reporte a CMF</td>
                        <td className="border border-zinc-700 p-2">Sin plazo legal definido hoy · Ley 21.719 lo establecerá en 2026</td>
                        </tr>
                    <tr className="border border-zinc-700 p-2 text-left">
                        <td className="border border-zinc-700 p-2">Banca/Finanzas</td>
                        <td className="border border-zinc-700 p-2">3 horas si es PSE/OIV bajo Ley 21.663</td>
                        <td className="border border-zinc-700 p-2">Sin plazo para avisar a pacientes hoy · Ley 21.719 lo establecerá en 2026</td>
                        </tr>
                        <tr className="border border-zinc-700 p-2 text-left">
                        <td className="border border-zinc-700 p-2">Banca/Finanzas</td>
                        <td className="border border-zinc-700 p-2">3 horas (alerta) · 72 horas (actualización) · más reporte a CMF</td>
                        <td className="border border-zinc-700 p-2">Sin plazo de notificación a ciudadanos afectados</td>
                        </tr>
                </tbody>
                </table>
                </div>
                <div className="bg-zinc-900 rounded-lg p-6 mb-4 text-zinc-300">
            <h2 className="text-zinc-100 font-semibold mt-6 mb-6 border-b border-red-500 pb-2">Sanciones máximas por incumplimiento</h2>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="border-b border-zinc-700">
                        <th className="border border-zinc-700 p-2 text-left">Sector</th>
                        <th className="border border-zinc-700 p-2 text-left">Sanción máxima</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border border-zinc-700 p-2 text-left">
                        <td className="border border-zinc-700 p-2">Banca/Finanzas</td>
                        <td className="border border-zinc-700 p-2">40.000 UTM si es OIV con infracción gravísima (Ley 21.663 Art. 40°) · Más sanciones CMF adicionales y posible revocación de licencia bancaria</td>
                        </tr>
                    <tr className="border border-zinc-700 p-2 text-left">
                        <td className="border border-zinc-700 p-2">Salud</td>
                        <td className="border border-zinc-700 p-2">40.000 UTM si es OIV (Ley 21.663) · 20.000 UTM o 4% de ingresos anuales desde 2026 (Ley 21.719) · Actualmente débil — Ley 19.628 solo tiene multas menores</td>
                        </tr>
                        <tr className="border border-zinc-700 p-2 text-left">
                        <td className="border border-zinc-700 p-2">Gobierno</td>
                        <td className="border border-zinc-700 p-2">40.000 UTM si es OIV · Responsabilidad administrativa: sumario y destitución · Responsabilidad civil del Estado (Art. 4° Ley 18.575) · En la práctica es difícil que el Estado se sancione a sí mismo</td>
                    </tr>
                </tbody>
                </table>
                </div>
                <div className="bg-zinc-900 rounded-lg p-6 mb-4 text-zinc-300 space-y-4">
                <h2 className="inline-block text-zinc-100 text-xl font-semibold mb-3 border-b border-red-500 pb-2">Análisis por sector</h2>
                <p><strong>Banca y finanzas: el sector del caso estudiado</strong></p>
                <p>Es el sector con el marco regulatorio más desarrollado de los tres. La RAN Capítulo 20-10 de la CMF es la norma de ciberseguridad financiera más específica y exigente que existe en Chile, y la supervisión de la CMF es activa, de hecho se instaló físicamente en el banco durante el incidente.</p>
                <p>Otras cosas que jugaron a favor del banco: tenía la red segmentada, lo que protegió los cajeros, la app y el sitio web (contaba con un ciberseguro activo) y tenía respaldos que le permitieron recuperarse sin pagar el rescate.</p>

<p>Lo que falló: el Capítulo 20-10 fue publicado en julio de 2020 pero entró en vigor el 1 de diciembre, el ataque ocurrió exactamente en esa ventana. Y un solo correo de phishing fue suficiente para comprometer toda la red, lo que evidencia falta de capacitación efectiva al personal.</p>

<p><strong>Salud: mayor impacto vital potencial</strong></p>
<p>El sector salud es el que más preocupa desde el punto de vista humano. Un ransomware en un hospital no solo genera pérdidas económicas, puede paralizar cirugías, inutilizar monitores de UCI o dejar sin sistema a urgencias, con consecuencias que podrían ser fatales.</p>

<p>Chile no tiene ninguna norma equivalente al HIPAA de EE.UU. que regule específicamente los sistemas de historiales clínicos electrónicos. Los datos médicos sí son considerados sensibles por la Ley 19.628, pero la ley no establece estándares técnicos concretos ni tiene una agencia que la fiscalice activamente. Además, el personal clínico no tiene la cultura de ciberseguridad que el sector bancario ha desarrollado con los años, lo que hace al phishing igualmente efectivo aquí.</p>

<p><strong>Gobierno y sector público: peor relación presupuesto/riesgo</strong></p>
<p>El sector público es el más vulnerable estructuralmente. La norma técnica base es el DS 83 de 2004, tiene más de 20 años y está completamente desactualizado frente al ransomware moderno. Los presupuestos de TI son históricamente menores a los del sector privado, y la ciberseguridad rara vez es prioridad. A eso se suma que la brecha salarial con el sector privado genera alta rotación en los equipos técnicos.</p>

<p>La Contraloría puede fiscalizar y abrir sumarios, pero ejecutar multas contra el propio Estado tiene complejidades institucionales que en la práctica limitan la efectividad de las sanciones.</p>

<p>Lo más llamativo de esta comparación es que el sector con el marco regulatorio más robusto fue el que sufrió el ataque exitoso en 2020. Pero tampoco es que el sector público se haya salvado, de manera muy reciente se supo de un ataque que afectó a la Tesorería General y al Registro Civil, nuevamente con datos sensibles comprometidos. Eso muestra que ningún sector es inmune, actualmente el gobierno sigue siendo el más expuesto: tiene mayor cantidad de datos críticos, menos presupuesto para protegerlos y más dificultades para responder rápido.</p>
                </div>

            </div>
    )
}

export default Comparacion