# Responsabilidades legales de los actores: Caso BancoEstado 2020

En esta sección identifico a los actores involucrados en el ataque y analizo qué tipo de responsabilidad legal le corresponde a cada uno bajo la ley chilena.

## Grupo REvil: Los atacantes

Son los responsables directos del ataque. Bajo la Ley 19.223, que era la vigente en 2020, el cifrado de unos 12.000 equipos configura el delito de sabotaje informático (Art. 1°). Además, el presidente Sichel reconoció públicamente que sí hubo robo de datos, lo que también configura el Art. 3° sobre interceptación de datos.

Si se aplicara la Ley 21.459 de forma hipotética, les corresponderían los Arts. 1°, 2°, 3°, 4°, 7° y 8°, más el agravante del Art. 10° inciso final por afectar servicios financieros de utilidad pública. En materia civil, el Art. 2314 del Código Civil los obliga a indemnizar todos los daños causados.

El problema práctico es que REvil operaba desde Rusia, un país que no coopera con investigaciones internacionales. En enero de 2022 el FSB ruso desmanteló al grupo, pero ningún miembro fue extraditado ni procesado en Chile. La responsabilidad existe legalmente, pero ejecutarla es prácticamente imposible.

## BancoEstado: Víctima y responsable al mismo tiempo

Esta es la parte más compleja del caso: BancoEstado es víctima del ataque, pero también es responsable de no haber tenido los controles básicos que podrían haberlo prevenido.

Bajo la **Ley 19.628**, el Art. 11° le exige adoptar las medidas técnicas necesarias para proteger los datos personales de sus clientes. Que un solo correo de phishing haya podido propagarse a 12.000 equipos sin ser detectado es difícil de compatibilizar con ese estándar. El Art. 23° además establece que el banco responde por los daños causados a los titulares de los datos afectados por la exfiltración.

En el plano regulatorio, la **RAN Capítulo 1-13**, vigente en septiembre de 2020, exigía identificar y controlar los riesgos tecnológicos. La propagación del malware a 12.000 equipos desde uno solo es difícilmente compatible con ese estándar.

Y como empresa pública, aplica además la **Ley 18.575 (Art. 4°)**: el Estado responde por los daños que causen sus órganos. El cierre de 410 sucursales interrumpió un servicio público esencial, lo que puede configurar falta de servicio sin necesidad de acreditar culpa individual.

## Directorio y alta dirección

El directorio tiene el deber de asegurarse de que el banco cuente con los controles necesarios para prevenir este tipo de incidentes. La **Ley 20.393 (Art. 3°)** establece responsabilidad penal para quienes dirigen una institución cuando no implementaron modelos de prevención adecuados, y no requiere demostrar intención, basta la omisión.

Un antecedente relevante: Sodinokibi ya había atacado a Telecom Argentina en julio de 2020, dos meses antes del incidente en Chile. Eso significa que había señales de alerta previas que el directorio podría haber considerado para reforzar las defensas.

En cuanto a consecuencias concretas, la CMF puede sancionar individualmente a los directores con multas e inhabilitación para ejercer cargos en instituciones financieras.

## El funcionario que abrió el archivo malicioso

Es el actor con menor responsabilidad del caso. El phishing está diseñado para engañar incluso a personas atentas, no hubo intención de causar daño, y sin dolo no se configura el delito según el Art. 1° del Código Penal.

En materia administrativa podría enfrentar un sumario bajo el Estatuto Administrativo (Ley 18.834, Art. 119°), pero la sanción depende de si el banco tenía políticas de ciberseguridad documentadas y capacitación formal. Si no las tenía, la responsabilidad se traslada al banco. Si las tenía y el funcionario las ignoró, podría haber una sanción menor.

## CMF: El regulador

La CMF tiene el deber de supervisar que los bancos cumplan los estándares de seguridad (Ley 21.000, Art. 5°). En este caso actuó bien, se instaló físicamente en el banco durante el incidente y coordinó la respuesta de forma activa.

Hay una tensión que vale mencionar: el Capítulo 20-10 fue publicado en julio de 2020 con vigencia diferida al 1 de diciembre. El ataque ocurrió exactamente en esa ventana. Podría analizarse si la CMF debió adelantar la vigencia o emitir instrucciones de emergencia, aunque en la práctica actuó dentro de sus atribuciones y no hubo inacción.

El problema mayor del caso es que el grupo con mayor responsabilidad legal (REvil) tiene la menor ejecutabilidad práctica por operar desde Rusia. En cambio, Banco Estado y su directorio, que son más fáciles de alcanzar legalmente, son al mismo tiempo víctimas del ataque y responsables de las fallas que lo hicieron posible.


## Tabla comparativa


| Actor       | Penal | Civil | Administrativa | Estatal | Ejecutabilidad |
| ----------- | ----- | ----- | -------------- | ------- | -------------- |
| Grupo REvil | Alta  | Alta  | —             | —      | Muy baja       |
| BancoEstado | —    | Media | Alta           | Alta    | Media          |
| Directorio  | Media | Media | Alta           | Media   | Media          |
| Funcionario | Nula  | Baja  | Media          | —      | Baja           |
| CMF         | —    | —    | Media          | Media   | Baja           |
