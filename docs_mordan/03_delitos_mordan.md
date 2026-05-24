# Tipificación de Delitos Informáticos: Caso BancoEstado 2020

En esta sección analizo qué delitos cometió el grupo REvil durante el ataque a BancoEstado, usando la Ley 21.459 que es la ley de delitos informáticos vigente hoy en Chile. Como el ataque fue en 2020 y esta ley recién entró en vigor en 2022, el ejercicio es hipotético, pero sirve para entender por qué la ley anterior quedaba corta y qué habría cambiado si ya existiera.

## Acción 1: Diseño y distribución del malware

El grupo REvil creó y distribuyó dos programas diseñados específicamente para cometer delitos: QakBot, que instaló la puerta trasera en la red del banco, y el ransomware REvil/Sodinokibi, que ejecutó el cifrado masivo de archivos. Esto cae en el **Art. 8°** de la Ley 21.459.

"El que para la perpetración de los delitos previstos en los artículos 1° a 4° de esta ley [...] entregare u obtuviere para su utilización, importare, difundiere o realizare otra forma de puesta a disposición uno o más dispositivos, programas computacionales, contraseñas, códigos de seguridad o de acceso u otros datos similares, creados o adaptados principalmente para la perpetración de dichos delitos."

Un punto importante de este artículo es que no solo sanciona al que crea el malware, sino también al que lo obtiene y lo usa. Eso afecta directamente al modelo RaaS que usaba REvil: tanto los creadores del código como los afiliados que pagaron por usarlo son responsables del delito, no solo cómplices.

- **Pena base:** Presidio menor grado mínimo (61 días a 540 días) + multa de 5 a 10 UTM
- **Con agravante Art. 10°:** Presidio menor grado medio (541 días a 3 años) + multa

El agravante del Art. 10° aplica porque el malware fue el instrumento que interrumpió los servicios de la única banca pública del país, afectando 410 sucursales y unos 13 millones de clientes.

## Acción 2: Acceso no autorizado a la red interna

A través del documento Word malicioso que llegó por phishing, los atacantes instalaron un backdoor que les dio acceso remoto a la red interna del banco, saltándose los controles de seguridad. Esto aplica al Art. 2°, en su forma agravada porque el acceso claramente buscaba apoderarse de información, algo que quedó confirmado cuando Sichel reconoció públicamente que sí hubo robo de datos.

"El que, sin autorización o excediendo la autorización que posea y superando barreras técnicas o medidas tecnológicas de seguridad, acceda a un sistema informático [...] Si el acceso fuere realizado con el ánimo de apoderarse o usar la información contenida en el sistema informático."

- **Pena base:** Presidio menor grado mínimo a medio (61 días a 3 años)
- **Con agravante del Art. 10°:** Presidio menor grado medio a máximo (541 días a 5 años)

## Acción 3: Cifrado masivo de archivos con ransomware

El ransomware cifró los archivos de unos 12.000 equipos, dejándolos ilegibles. Esto vulnera dos artículos al mismo tiempo:

**Art. 1°:** sanciona obstaculizar o impedir el funcionamiento de un sistema informático. El cifrado masivo paralizó completamente la red interna del banco.

**Art. 4°:** sanciona alterar, dañar o suprimir datos informáticos causando un daño grave. El cifrado alteró irreversiblemente los datos de miles de equipos, y el cierre de 410 sucursales acredita ese daño.

Cuando una sola acción vulnera dos artículos al mismo tiempo, el Código Penal (Art. 75) indica que se aplica la pena más alta, que en este caso es la del Art. 1°.

- **Pena base Art. 1°:** Presidio menor grados medio a máximo (541 días a 5 años)
- **Con agravante Art. 10°:** Presidio menor máximo a presidio mayor mínimo (3 años 1 día a 10 años)

## Acción 4: Paralización total del sistema

Que 13.000 funcionarios no pudieran acceder a ninguna aplicación interna durante días no es solo consecuencia del cifrado, es una conducta de obstaculización con resultado propio. El **Art. 1°** protege el funcionamiento normal del sistema como bien jurídico independiente, y el hecho de que nadie pudiera operar durante días acredita la obstaculización total que exige el tipo.

El agravante del **Art. 10° inciso final** aplica con especial fuerza aquí: la ley menciona expresamente los servicios financieros como categoría que activa el aumento de pena, y lo hace de forma obligatoria, dice "se aumentará", no "podrá aumentarse". BancoEstado paga pensiones y atiende a los segmentos más vulnerables del país, así que no hay mucho espacio para discutirlo.

- **Pena base Art. 1°:** Presidio menor grados medio a máximo (541 días a 5 años)
- **Con agravante Art. 10°:** Presidio menor máximo a presidio mayor mínimo (3 años 1 días a 10 años)

## Acción 5: Robo de datos y doble extorsión

La técnica de doble extorsión de REvil funciona en etapas: primero roban los datos, después los cifran, y luego amenazan con publicarlos si no pagan el rescate. Cada etapa tiene su propio delito:

**Art. 3° (interceptación ilícita):** cubre la captura de datos desde los sistemas del banco sin autorización.

**Art. 6° (receptación de datos):** cubre el almacenamiento de esos datos para usarlos como presión.

**Art. 7° (fraude informático):** cubre la amenaza de publicar los datos para obtener el pago del rescate.

El presidente de Banco Estado Sebastián Sichel confirmó que hubo sustracción de datos, aunque señaló no tener certeza de si se llegó a cobrar un rescate formalmente.

Como son tres conductas distintas en momentos distintos, las penas se acumulan según el Art. 74 del Código Penal, con los límites que establece el Art. 76.

- **Pena base Art. 3°:** Presidio menor grados medio a máximo (541 días a 5 años)
- **Con agravante Art. 10°:**  Presidio menor máximo a presidio mayor mínimo (3 años 1 día a 10 años)

## Tabla resumen


| Acción                          | Artículo                      | Pena base                      | Con agravante Art. 10°                       |
| -------------------------------- | ------------------------------ | ------------------------------ | --------------------------------------------- |
| Diseño y uso de malware         | Art. 8°                       | Presidio menor mínimo         | Presidio menor medio                          |
| Acceso ilícito                  | Art. 2° inc. 2°              | Presidio menor mín. a medio   | Presidio menor medio a máximo                |
| Cifrado masivo                   | Art. 1° + Art. 4°            | Presidio menor medio a máximo | Presidio menor máx. a presidio mayor mínimo |
| Paralización del sistema        | Art. 1° + Art. 10°           | Presidio menor medio a máximo | Presidio menor máx. a presidio mayor mínimo |
| Robo de datos / doble extorsión | Art. 3° + Art. 6° + Art. 7° | Presidio menor medio a máximo | Presidio menor máx. a presidio mayor mínimo |

## Tres cosas importantes del análisis

Primero, el agravante del Art. 10° es el más relevante del caso porque la ley menciona expresamente los servicios financieros y el aumento de pena es obligatorio, no queda a criterio del juez.

Segundo, el modelo RaaS tiene consecuencias penales concretas. El Art. 8° incluye al que obtiene el malware para usarlo, así que los afiliados que pagaron por acceder a REvil son tan responsables como los que lo crearon.

Tercero, este es un ejercicio hipotético porque en 2020 solo existía la Ley 19.223, que no cubría con precisión la doble extorsión ni el abuso de dispositivos maliciosos. Ese vacío es justamente lo que aceleró la aprobación de la Ley 21.459.
