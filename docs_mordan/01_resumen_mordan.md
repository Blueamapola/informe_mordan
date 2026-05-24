# Resumen Ejecutivo: Caso BancoEstado (Ransomware REvil, 2020)

## ¿Qué pasó?

El grupo de procedencia rusa REvil, también conocido como Sodinokibi, envió un malware a través de un correo de phishing a un trabajador de BancoEstado. Por desconocimiento, el trabajador abrió el archivo adjunto y sin darse cuenta instaló el malware en su equipo. Desde ahí, el virus se fue esparciendo por toda la red interna del banco durante un fin de semana completo, infectando los archivos de la empresa que contenían información importante: datos privados de trabajadores y usuarios, entre otra información delicada.

Este tipo de malware se llama **ransomware**, y lo que hace es retener la información cifrándola, es decir la hace ilegible y luego exige un pago para devolvérsela a la víctima. En el caso de REvil, además usaban la técnica de **doble extorsión**: primero robaban los datos y luego los cifraban, para tener dos formas de presionar al banco: paga o publicamos tu información.

## ¿Quiénes fueron los atacantes?

El ataque fue atribuido al grupo **REvil** (también conocido como Sodinokibi), de origen ruso. Una característica técnica importante es que el ransomware estaba programado para no ejecutarse en equipos configurados con idiomas de la ex Unión Soviética, una forma de proteger a sus propios creadores de ser investigados en Rusia.

REvil funcionaba bajo el modelo **Ransomware-as-a-Service (RaaS)**, que es básicamente un negocio criminal: un grupo crea el ransomware y lo arrienda a otros grupos llamados "afiliados", que son quienes ejecutan los ataques. Las ganancias se dividen, con los creadores recibiendo entre el 20% y el 30% del rescate cobrado.

## ¿Cómo entró el malware?

El ataque comenzó con un correo de phishing que traía un documento de Office con una macro maliciosa. Al abrirlo, se instaló el troyano **QakBot** en el equipo del trabajador. QakBot es un malware que actúa como puerta de entrada, se instala primero, se propaga por la red interna saltando de equipo en equipo, y luego prepara todo para que REvil pueda ejecutarse y cifrar los archivos masivamente.

## Cronología del incidente


| Fecha                | Hecho                                                                                    |
| -------------------- | ---------------------------------------------------------------------------------------- |
| Viernes 4 sept. 2020 | El trabajador abre el documento malicioso. El malware queda instalado en la red.         |
| Sábado 5 sept. 2020 | Se detecta el problema: los empleados no pueden acceder a sus archivos.                  |
| Domingo 6 sept. 2020 | BancoEstado reporta el ataque públicamente por Twitter.                                 |
| Lunes 7 sept. 2020   | Se cierran las 410 sucursales a nivel nacional. Logran reabrir solo ~24 durante el día. |
| Martes 8 sept. 2020  | Reapertura parcial: 164 oficinas operativas.                                             |
| 9–10 sept. 2020     | Recuperación casi total de las sucursales.                                              |

## Impacto del ataque

- Cierre total de las **410 sucursales** a nivel nacional
- Aproximadamente **12.000 computadores** afectados
- Cerca de **13.000 funcionarios** sin poder hacer sus labores
- Millones de usuarios sin poder acceder a sus cuentas presencialmente
- El presidente del banco, Sebastián Sichel, reconoció públicamente que **sí se sustrajeron datos**, aunque los calificó como "no significativos para la operación del banco"

## Un dato importante

A pesar de la gravedad del ataque, el sitio web del banco, la app móvil y los cajeros automáticos **no fueron afectados**, gracias a que BancoEstado tenía su red dividida en segmentos separados. Eso limitó el impacto directo sobre los clientes, aunque el daño interno fue igual muy grave.

## Acciones legales

BancoEstado presentó una **querella por sabotaje informático** bajo la Ley 19.223, que era la ley de delitos informáticos vigente en Chile en ese momento. Además, la **CMF** (Comisión para el Mercado Financiero) se instaló físicamente en las dependencias del banco para monitorear la situación y coordinar la respuesta.
