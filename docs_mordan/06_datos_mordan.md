# Tratamiento de datos personales: Caso BancoEstado 2020

BancoEstado maneja datos personales de aproximadamente 13 millones de clientes y 13.000 funcionarios, lo que lo convierte en uno de los repositorios de datos más grandes del país. En esta sección analizo qué tipos de datos procesa, cuáles son sensibles, qué obligaciones incumplió y cómo aplican los derechos ARCO al caso.

## Tipos de datos que procesa BancoEstado


| Categoría         | Ejemplos                                                               |
| ------------------ | ---------------------------------------------------------------------- |
| Datos de identidad | Nombre, RUT, fecha de nacimiento, domicilio, correo, teléfono         |
| Datos financieros  | Saldos, historial crediticio, deudas, datos de tarjetas, transacciones |
| Datos biométricos | Huella dactilar, reconocimiento facial, firma digitalizada             |
| Datos laborales    | AFP, empleador, liquidaciones de sueldo, situación tributaria         |
| Datos relacionales | Cargas familiares, avales, codeudores                                  |
| Datos digitales    | IP de acceso, dispositivos registrados, patrones de uso bancario       |

## ¿Cuáles son datos sensibles?

El Art. 2 letra g) de la Ley 19.628 define los datos sensibles como aquellos que refieren a características físicas o morales de las personas, o a hechos de su vida privada: hábitos personales, origen racial, opiniones políticas, creencias religiosas, estado de salud y vida sexual.

Aplicando esa definición al caso:

* **Datos biométricos: sí son sensibles.** La huella dactilar y el reconocimiento facial refieren directamente a características físicas de la persona.
* **Datos financieros: no lo son formalmente.** No están en la lista del Art. 2 letra g), así que la ley no los trata como sensibles.

Eso no significa que no sean delicados en la práctica. El historial de transacciones de una persona puede revelar gastos en farmacias, clínicas, donaciones a partidos políticos o iglesias, o establecimientos de adultos. Aunque la ley no los clasifique como sensibles, en la práctica exponen aspectos muy íntimos de la vida de las personas. En el modelo de doble extorsión de REvil, amenazar con publicar esos datos es igual de coercitivo que publicar datos de salud.

Esta es una de las limitaciones más evidentes de la Ley 19.628, que la Ley 21.719 corregirá cuando entre en vigencia en 2026 incluyendo los datos financieros como categoría protegida.

## Obligaciones incumplidas por BancoEstado

### Art. 11°: Deber de seguridad

Es el artículo más relevante del caso. Le exige al banco adoptar las medidas técnicas necesarias para proteger los datos que almacena y evitar que sean accedidos sin autorización. La cadena de fallas que hizo posible el ataque, correo de phishing sin filtrar, macro ejecutada sin detección, propagación a 12.000 equipos sin segmentación adecuada, detección tardía, es difícil de compatibilizar con ese estándar.

### Art. 19°: Transferencia no autorizada

La exfiltración de datos hacia los servidores de REvil fue una transferencia de datos personales fuera del país, sin consentimiento y sin autorización legal. Eso incumple directamente este artículo.

### Art. 23°: Responsabilidad civil

El banco debe indemnizar el daño patrimonial y moral causado por el tratamiento indebido de datos. La exfiltración confirmada por el presidente Sichel abre esa posibilidad frente a los titulares afectados. El problema práctico es que el banco no especificó públicamente qué datos exactamente fueron sustraídos, lo que dificulta que los clientes acrediten un daño concreto.

## Derechos ARCO

Los derechos ARCO están en el Art. 12° de la Ley 19.628 y son los derechos que tiene cualquier persona frente a quien maneja sus datos. El problema transversal de este caso es que todos estos derechos son reactivos: el titular tiene que ejercerlos activamente. Sin una obligación de notificar las brechas, los 13 millones de clientes de BancoEstado no sabían que sus datos habían sido comprometidos y, por lo tanto, no podían ejercer ninguno de estos derechos en la práctica.

* **Acceso (A):** cualquier cliente tenía derecho a saber qué información suya fue comprometida. Pero como el banco no notificó individualmente, nadie sabía que tenía motivo para pedirlo.
* **Rectificación (R):** si la restauración desde los respaldos dejó datos incorrectos, los clientes tenían derecho a pedir corrección. Mismo problema: sin notificación, no sabían que algo podía estar mal.
* **Cancelación (C):** el titular puede pedir que se eliminen sus datos cuando ya no sean necesarios. Este derecho tiene alcance muy limitado aquí porque la Ley General de Bancos obliga a conservar ciertos datos por 5 a 10 años.
* **Oposición (O):** en teoría los clientes podían exigir suspensión del tratamiento hasta que el banco acreditara cumplimiento del Art. 11°. En la práctica requería iniciar una acción judicial, porque en 2020 no existía una autoridad de protección de datos que pudiera ordenar medidas cautelares.

## Limitaciones de la Ley 19.628 expuestas por el caso


| Limitación                                      | Impacto en el caso                                                           |
| ------------------------------------------------ | ---------------------------------------------------------------------------- |
| Sin plazo de notificación de brechas            | El banco no estaba obligado a avisar a los 13 millones de clientes afectados |
| Datos financieros fuera de la lista de sensibles | Datos muy íntimos recibieron solo protección estándar                     |
| Sin agencia fiscalizadora activa                 | Nadie pudo investigar ni sancionar el posible incumplimiento del Art. 11°   |
| Art. 11° sin estándar técnico definido        | La norma exige "medidas necesarias" sin especificar cuáles                  |
| Sin evaluación de impacto obligatoria           | No se exigía identificar riesgos antes de tratar datos a gran escala        |
| Sin Delegado de Protección de Datos             | No había un responsable interno de velar por la protección de datos        |

## Lo que cambiará con la Ley 21.719


| Materia                  | Ley 19.628 (2020)            | Ley 21.719 (vigente dic. 2026)                             |
| ------------------------ | ---------------------------- | ---------------------------------------------------------- |
| Notificación de brechas | Sin obligación              | Plazo definido al CSIRT y a los titulares                  |
| Datos financieros        | No protegidos como sensibles | Incluidos como categoría protegida                        |
| Autoridad de control     | Sin agencia activa           | Agencia de Protección de Datos con potestad sancionatoria |
| Sanciones                | Débiles                     | Hasta 20.000 UTM o 4% de los ingresos anuales              |
| Evaluación de impacto   | No exigida                   | Obligatoria para tratamientos de alto riesgo               |
| Delegado de datos (DPO)  | No requerido                 | Obligatorio para ciertos responsables                      |

El caso BancoEstado fue uno de los más citados durante la tramitación de la Ley 21.719, porque demostró que la Ley 19.628 era formalmente vigente pero insuficiente para proteger a las personas ante un incidente de esta escala.
