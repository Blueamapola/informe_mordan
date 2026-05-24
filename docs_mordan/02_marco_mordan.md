# Marco Normativo: Caso BancoEstado 2020

El ataque tiene varios lados legales: el penal (los delitos que se cometieron), el de protección de datos (qué pasa con la información de los clientes) y el regulatorio (qué exigía la ley al banco como institución). En esta sección reviso las normas nacionales e internacionales que aplican al caso.

Una aclaración antes de empezar: en septiembre de 2020, la ley de delitos informáticos vigente era la Ley 19.223 de 1993. La Ley 21.459, que la reemplazó y es mucho más completa, recién entró en vigor en 2022. Por eso en algunas partes hago un análisis hipotético — cómo habría aplicado la Ley 21.459 si hubiera existido en ese momento.


## Normas Nacionales

### 1. Ley N° 19.223: Delitos informáticos (1993)

Esta es la ley con la que BancoEstado presentó la querella en septiembre de 2020. Fue la única herramienta penal disponible en ese momento, aunque tenía hartas limitaciones porque fue escrita en 1993 y no pensaba en el ransomware moderno.

Los artículos que aplican al caso son dos:

* **Art. 1° (Sabotaje informático):** sanciona destruir o inutilizar un sistema de tratamiento de información. El ransomware cifró unos 12.000 computadores, lo que inutilizó toda la red interna del banco. El mismo artículo incluye una agravante cuando se sustraen datos, que aplica porque el presidente del banco reconoció públicamente que sí hubo robo de información.
* **Art. 3° (Interceptación de datos):** sanciona apoderarse de información contenida en un sistema. Sebastián Sichel declaró que "este ataque lo que buscaba era tomar datos y tomó datos", así que esta figura también se configura.

El problema es que esta ley quedó corta para describir la doble extorsión de REvil, el robo previo de datos antes de cifrarlos no estaba contemplado de forma precisa. Eso fue parte de lo que motivó la creación de la Ley 21.459.

### 2. Ley N° 21.459: Nueva ley de delitos informáticos (2022)

(Aplicación hipotética)

Esta ley reemplazó a la 19.223 e incorporó el Convenio de Budapest al sistema legal chileno. Si hubiera estado vigente en 2020, habría cubierto el caso con mucho más precisión:

* **Art. 1°:** tipifica explícitamente obstaculizar el funcionamiento de un sistema informático, encaja directo con el cifrado masivo de equipos.
* **Art. 2°:** sanciona el acceso no autorizado a un sistema. La instalación del backdoor a través del documento Word malicioso es exactamente eso.
* **Art. 5°:** habría cubierto con más precisión la exfiltración de datos, que en la Ley 19.223 era difícil de encuadrar en el contexto del ransomware.
* **Art. 8° (agravante por infraestructura crítica):** como el único banco del Estado, BancoEstado habría calificado aquí, lo que habría aumentado significativamente las penas.

El caso BancoEstado fue uno de los más citados en el debate parlamentario que aceleró la tramitación de esta ley.

### 3. Ley N° 19.628: Protección de datos personales (1999)

BancoEstado es responsable de los datos personales de unos 13 millones de clientes. La Ley 19.628 le exige protegerlos, y el ataque expuso varias obligaciones incumplidas:

* **Art. 11° (deber de seguridad):** el banco debe adoptar las medidas técnicas necesarias para proteger los datos que almacena. Que un solo correo de phishing haya podido propagarse a 12.000 equipos sin ser detectado no es compatible con ese estándar.
* **Art. 23° (responsabilidad civil):** si un tratamiento indebido de datos causa daño a los titulares, el banco responde. La exfiltración confirmada por Sichel abre esa posibilidad.
* **Art. 19° (transferencia de datos):** los datos exfiltrados hacia los servidores de REvil constituyeron una transferencia no autorizada fuera del país.

Una limitación importante de esta ley es que no obliga a notificar a los afectados cuando hay una brecha, no tiene plazos definidos y sus sanciones son bastante débiles. Por eso el banco no tuvo que avisarle a cada cliente que sus datos habían sido comprometidos.

### 4. DFL N° 3/1997: Ley General de Bancos + RAN Capítulo 1-13 CMF

BancoEstado, como banco regulado por la CMF, está sujeto a la Ley General de Bancos. Dos artículos aplican al caso:

* **Art. 69°:** los bancos deben administrar sus operaciones con prudencia y proteger los depósitos del público. Que el malware se haya propagado desde un solo equipo a 12.000 es difícil de compatibilizar con eso.
* **Arts. 14° y 15°:** son los que fundamentaron la presencia inmediata de la CMF en las dependencias del banco después del ataque.

En cuanto a la **RAN Capítulo 1-13**, era la norma vigente en septiembre de 2020 y exigía a los bancos identificar y controlar sus riesgos tecnológicos. La falta de filtros de correo, capacitación anti-phishing y segmentación adecuada de red son incumplimientos concretos de esas obligaciones.

El nuevo Capítulo 20-10 de la RAN, que es la norma de ciberseguridad más específica que ha tenido la banca chilena, se publicó en julio de 2020 pero entró en vigor recién el 1 de diciembre de 2020. O sea, el ataque ocurrió exactamente en la ventana entre la publicación y la entrada en vigencia.

### 5. Ley N° 18.575: Bases Generales de la Administración del Estado

Este es un punto que distingue el caso de cualquier otro banco: BancoEstado es del Estado, así que tiene una capa adicional de responsabilidad frente a la ciudadanía.

* **Art. 3°:** la Administración debe prestar servicios en forma continua y permanente. El cierre de 410 sucursales por un día completo es justo lo que este principio busca evitar.
* **Art. 4°:** el Estado responde por los daños que causen sus órganos. Esto abre la posibilidad de responsabilidad frente a clientes que hayan sufrido perjuicios por no poder operar.
* **Art. 5°:** las autoridades deben velar por la eficiente administración de los recursos públicos, lo que se puede cuestionar dado que las fallas internas permitieron la propagación del ransomware.


## Normas Internacionales

### 6. Convenio de Budapest sobre Ciberdelincuencia (2001)

Este convenio es un tratado internacional que obliga a los países a tipificar ciertos delitos informáticos y a cooperar entre sí en las investigaciones. Los artículos más relevantes para el caso:

* **Art. 2°:** exige tipificar el acceso no autorizado a sistemas informáticos, algo que en 2020 Chile cumplía solo de forma parcial con la Ley 19.223.
* **Art. 5°:** exige tipificar obstaculizar gravemente el funcionamiento de un sistema, el cifrado masivo de equipos encaja acá.
* **Art. 29°:** establece mecanismos de cooperación para preservar evidencia digital. Fue clave en este caso porque REvil operaba desde Rusia, lo que requería coordinación internacional para investigar.

En la práctica, la investigación no llegó a condenas porque Rusia no coopera con extradiciones. En enero de 2022 el FSB ruso desmanteló al grupo, pero ningún miembro fue procesado en Chile.

### 7. ISO/IEC 27001:2013: Seguridad de la Información

Esta norma internacional define un sistema de gestión de seguridad de la información. Varios de sus controles no se estaban cumpliendo en BancoEstado al momento del ataque:

* **Control A.12.2 (protección contra malware):** exige controles de detección y capacitación a usuarios. El phishing pasó sin ser detectado.
* **Control A.7.2.2 (capacitación en seguridad):** todos los empleados deben recibir formación regular. El hecho de que el funcionario haya abierto el adjunto sin sospechar nada sugiere que esa formación no era efectiva.
* **Control A.16.1 (gestión de incidentes):** exige detectar y responder a incidentes. La demora entre la infección y la detección indica problemas en el monitoreo.
* **Control A.17.1 (continuidad del negocio):** exige tener un plan para incidentes graves. El cierre total de 410 sucursales muestra que el plan no era suficiente para este escenario.

### 8. Principios del Comité de Basilea: Riesgo Operacional

El Comité de Basilea define el riesgo operacional como pérdidas que resultan de procesos, personas, sistemas o eventos externos, lo que incluye los ciberataques. Los principios que más aplican al caso:

* **Principio 1 (responsabilidad del directorio):** el directorio debe revisar periódicamente el marco de gestión de riesgos. La magnitud del ataque pone en duda si eso se hacía con la profundidad necesaria.
* **Principio 6 (identificación de riesgos):** los bancos deben evaluar el riesgo en todos sus sistemas. Que el malware se propagara a 12.000 equipos desde uno solo refleja una evaluación insuficiente.
* **Principio 7 (monitoreo del riesgo):** exige monitoreo regular. La detección tardía durante el fin de semana es consistente con un monitoreo que no funcionó bien.
