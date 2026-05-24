import {FileText} from 'lucide-react'
function Resumen() {

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <div className="flex items-center gap-3 mb-6">
                <FileText className="text-red-500" size={28} />
                <h2 className="text-2xl font-semibold text-zinc-100">Resumen</h2>
            </div>
            <div className="bg-zinc-900 rounded-lg p-6">
            <p className="text-zinc-300 mb-4">
                El grupo de procedencia rusa REvil, también conocido como Sodinokibi, envió un malware a través de un correo de phishing a un trabajador de BancoEstado. Por desconocimiento, el trabajador abrió el archivo adjunto y sin darse cuenta instaló el malware en su equipo. Desde ahí, el virus se fue esparciendo por toda la red interna del banco durante un fin de semana completo, infectando los archivos de la empresa que contenían información importante: datos privados de trabajadores y usuarios, entre otra información delicada.</p>

            <p className="text-zinc-300">
                Este tipo de malware se llama <strong>ransomware</strong>, y lo que hace es retener la información cifrándola, es decir la hace ilegible y luego exige un pago para devolvérsela a la víctima. En el caso de REvil, además usaban la técnica de <strong>doble extorsión</strong>: primero robaban los datos y luego los cifraban, para tener dos formas de presionar al banco: paga o publicamos tu información.
            </p>
            <h3 className="text-zinc-100 font-semibold mt-6 mb-3 border-b border-red-500 pb-2">Cronología del incidente</h3>
            <table className="w-full text-zinc-300 mt-6">
            <thead>
            <tr className="border-b border-zinc-700">
            <th className="text-left py-2 text-zinc-400">Fecha</th>
            <th className="text-left py-2 text-zinc-400">Hecho</th>
        </tr>
        </thead>
        <tbody>
    <tr className="border-b border-zinc-800">
    <td className="py-2 pr-4">Viernes 4 sept. 2020</td>
    <td className="py-2">El trabajador abre el documento malicioso. El malware queda instalado en la red.</td>
    </tr>
    <tr className="border-b border-zinc-800">
    <td className="py-2 pr-4">Sábado 5 sept. 2020</td>
    <td className="py-2">Se detecta el problema: los empleados no pueden acceder a sus archivos.</td>
    </tr>
    <tr className="border-b border-zinc-800">
    <td className="py-2 pr-4">Domingo 6 sept. 2020</td>
    <td className="py-2">BancoEstado reporta el ataque públicamente por Twitter.</td>
    </tr>
    <tr className="border-b border-zinc-800">
    <td className="py-2 pr-4">Lunes 7 sept. 2020</td>
    <td className="py-2">Se cierran las 410 sucursales. Logran reabrir solo ~24 durante el día.</td>
    </tr>
    <tr className="border-b border-zinc-800">
    <td className="py-2 pr-4">Martes 8 sept. 2020</td>
    <td className="py-2">Reapertura parcial: 164 oficinas operativas.</td>
    </tr>
    <tr>
    <td className="py-2 pr-4">9–10 sept. 2020</td>
    <td className="py-2">Recuperación casi total de las sucursales.</td>
    </tr>
</tbody>
</table>
<h3 className="text-zinc-100 font-semibold mt-6 mb-3 border-b border-red-500 pb-2">Impacto del ataque</h3>
<ul className="text-zinc-300 list-disc list-inside space-y-2">
    <li>Cierre total de las <strong>410 sucursales</strong> a nivel nacional</li>
    <li>Aproximadamente <strong>12.000 computadores</strong> afectados</li>
    <li>Cerca de <strong>13.000 trabajadores</strong> sin hacer sus labores</li>
    <li><strong>Millones de usuarios</strong> sin poder acceder a sus cuentas presencialmente</li>
    <li>El presidente del banco, Sebastián Sichel, reconoció públicamente que <strong>sí se sustrajeron datos</strong>, aunque los calificó como "no significativos para la operación del banco"</li>
</ul>            
</div>
        </div>
    )
}    

export default Resumen