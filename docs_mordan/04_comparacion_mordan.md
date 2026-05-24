# Comparación de marcos regulatorios por sector

Un mismo ataque de ransomware puede tener consecuencias muy distintas dependiendo del sector donde ocurra. En esta sección comparo tres sectores: banca y finanzas (donde pasó el caso), salud y gobierno/sector público, para ver cómo cada uno habría enfrentado un incidente parecido al de BancoEstado.

## Marco regulatorio principal


| Sector             | Marco principal                                                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Banca/Finanzas** | DFL N°3/1997 (Ley General de Bancos) · RAN Cap. 1-13 → 20-10 CMF · Ley 21.663 (2024) · Ley 21.719 (vigente 2026)                                   |
| **Salud**          | Ley 19.628 para datos clínicos sensibles · Ley 21.663 si califica como PSE/OIV · Ley 21.719 desde 2026 · Sin equivalente chileno al HIPAA de EE.UU. |
| **Gobierno**       | Ley 18.575 LOCBGAE · DS 83/2004 (norma técnica desactualizada) · Ley 21.663 para PSE/OIV públicos · Contraloría General de la República          |

## Plazos de notificación de brechas


| Sector             | Al CSIRT Nacional                                                   | A usuarios/ciudadanos                                                       |
| ------------------ | ------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Banca/Finanzas** | 3 horas (alerta) · 72 horas (actualización) · más reporte a CMF | Sin plazo legal definido hoy · Ley 21.719 lo establecerá en 2026          |
| **Salud**          | 3 horas si es PSE/OIV bajo Ley 21.663                               | Sin plazo para avisar a pacientes hoy · Ley 21.719 lo establecerá en 2026 |
| **Gobierno**       | 3 horas (Art. 9° Ley 21.663)                                       | Sin plazo de notificación a ciudadanos afectados                           |

* Es importante considerar que en septiembre de 2020 no existía ningún plazo legal de notificación en Chile. BancoEstado reportó al CSIRT GOB al día siguiente del incidente sin incurrir en ninguna infracción por eso.

## Sanciones máximas por incumplimiento


| Sector             | Sanción máxima                                                                                                                                                                                              |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Banca/Finanzas** | 40.000 UTM si es OIV con infracción gravísima (Ley 21.663 Art. 40°) · Más sanciones CMF adicionales y posible revocación de licencia bancaria                                                           |
| **Salud**          | 40.000 UTM si es OIV (Ley 21.663) · 20.000 UTM o 4% de ingresos anuales desde 2026 (Ley 21.719) · Actualmente débil — Ley 19.628 solo tiene multas menores                                                |
| **Gobierno**       | 40.000 UTM si es OIV · Responsabilidad administrativa: sumario y destitución · Responsabilidad civil del Estado (Art. 4° Ley 18.575) · En la práctica es difícil que el Estado se sancione a sí mismo |

## Análisis por sector

### Banca y finanzas: el sector del caso estudiado

Es el sector con el marco regulatorio más desarrollado de los tres. La RAN Capítulo 20-10 de la CMF es la norma de ciberseguridad financiera más específica y exigente que existe en Chile, y la supervisión de la CMF es activa, de hecho se instaló físicamente en el banco durante el incidente.

Otras cosas que jugaron a favor del banco: tenía la red segmentada, lo que protegió los cajeros, la app y el sitio web (contaba con un ciberseguro activo) y tenía respaldos que le permitieron recuperarse sin pagar el rescate.

Lo que falló: el Capítulo 20-10 fue publicado en julio de 2020 pero entró en vigor el 1 de diciembre, el ataque ocurrió exactamente en esa ventana. Y un solo correo de phishing fue suficiente para comprometer toda la red, lo que evidencia falta de capacitación efectiva al personal.

### Salud: mayor impacto vital potencial

El sector salud es el que más preocupa desde el punto de vista humano. Un ransomware en un hospital no solo genera pérdidas económicas, puede paralizar cirugías, inutilizar monitores de UCI o dejar sin sistema a urgencias, con consecuencias que podrían ser fatales.

Chile no tiene ninguna norma equivalente al HIPAA de EE.UU. que regule específicamente los sistemas de historiales clínicos electrónicos. Los datos médicos sí son considerados sensibles por la Ley 19.628, pero la ley no establece estándares técnicos concretos ni tiene una agencia que la fiscalice activamente. Además, el personal clínico no tiene la cultura de ciberseguridad que el sector bancario ha desarrollado con los años, lo que hace al phishing igualmente efectivo aquí.

### Gobierno y sector público: peor relación presupuesto/riesgo

El sector público es el más vulnerable estructuralmente. La norma técnica base es el DS 83 de 2004, tiene más de 20 años y está completamente desactualizado frente al ransomware moderno. Los presupuestos de TI son históricamente menores a los del sector privado, y la ciberseguridad rara vez es prioridad. A eso se suma que la brecha salarial con el sector privado genera alta rotación en los equipos técnicos.

La Contraloría puede fiscalizar y abrir sumarios, pero ejecutar multas contra el propio Estado tiene complejidades institucionales que en la práctica limitan la efectividad de las sanciones.

Lo más llamativo de esta comparación es que el sector con el marco regulatorio más robusto fue el que sufrió el ataque exitoso en 2020. Pero tampoco es que el sector público se haya salvado, de manera muy reciente se supo de un ataque que afectó a la Tesorería General y al Registro Civil, nuevamente con datos sensibles comprometidos. Eso muestra que ningún sector es inmune, actualmente el gobierno sigue siendo el más expuesto: tiene mayor cantidad de datos críticos, menos presupuesto para protegerlos y más dificultades para responder rápido.
