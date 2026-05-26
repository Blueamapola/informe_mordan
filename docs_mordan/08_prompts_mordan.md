# Bitácora de uso de IA: Caso BancoEstado 2020

Para este trabajo usé Claude (claude.ai) como herramienta principal y tambien usé el agente Copilot integrado en VS Code para completar el codigo rapidamente. Claude lo usé en dos etapas distintas: primero para investigar el caso y después para guiarme en la construcción de la página web en React. El agente tiene acceso al proyecto completo, lo que lo hace más eficiente que un chatbot externo para tareas de código puede leer los archivos abiertos y proponer cambios contextualizados directamente en el editor.

---

## Uso de IA en la investigación del caso

### Prompt 1: Contexto técnico del ataque (archivo 01)

**Herramienta:** Claude (claude.ai)

**Prompt:**

> "Para un trabajo de la clase de Seguridad de la Información en INACAP, sobre el ataque de ransomware REvil a BancoEstado en septiembre de 2020. Necesito que me expliques: cuál fue el punto de entrada exacto del ataque, qué es QakBot y cómo se relaciona con REvil, cuántas sucursales cerraron y por cuánto tiempo, y qué es el modelo Ransomware-as-a-Service. Por favor sé preciso con las fechas."

**Para qué se usó:** Aclarar conceptos técnicos como QakBot y el modelo RaaS que no conocía antes de investigar el caso.

**Qué se usó y qué no:** Usé la explicación de QakBot y el modelo RaaS como punto de partida para entender el ataque. La redacción del resumen y la cronología la hice yo basándome en esa comprensión y en fuentes adicionales.

---

### Prompt 2: Normas aplicables (archivo 02)

**Herramienta:** Claude (claude.ai)

**Prompt:**

> "Siguiendo con el caso de BancoEstado 2020, necesito identificar normas nacionales chilenas aplicables. El banco es una institución estatal regulada por la CMF. Las normas que ya tengo son la Ley 21.459 como supuesto hipotético y la Ley 19.628. ¿Qué otras normas chilenas son relevantes considerando que BancoEstado es una empresa del Estado? Justifica cada una con su artículo específico."

**Para qué se usó:** Verificar si había normas relevantes que me estuviera perdiendo, especialmente relacionadas con el carácter estatal del banco.

**Qué se usó y qué no:** La lista de normas la usé como referencia para orientar mi investigación. El análisis de cada artículo y su relación con el caso lo desarrollé yo.

---

### Prompt 3: Tipificación de delitos (archivo 03)

**Herramienta:** Claude (claude.ai)

**Prompt:**

> "Necesito tipificar 5 acciones del grupo REvil durante el ataque a BancoEstado 2020 usando la Ley 21.459. Las acciones son: diseño y uso de malware QakBot y REvil, acceso remoto no autorizado, cifrado masivo de archivos, paralización del sistema dejando sin operar a 13.000 funcionarios, y posible exfiltración de datos con doble extorsión. Para cada acción indica el artículo exacto, el texto legal y si aplica el agravante por infraestructura crítica."

**Para qué se usó:** Identificar qué artículos de la Ley 21.459 aplican a cada acción, ya que no tenía experiencia leyendo leyes de delitos informáticos.

**Qué se usó y qué no:** Los artículos aplicables me sirvieron como punto de partida. El análisis de por qué cada conducta encaja en cada artículo que dio la IA no se uso.

---

### Prompt 4: Comparación de marcos regulatorios (archivo 04)

**Herramienta:** Claude (claude.ai)

**Prompt:**

> "Necesito una tabla comparativa de marcos regulatorios para los sectores de Banca/Finanzas, Salud y Gobierno/Sector público. Los ejes deben incluir: marco regulatorio principal, plazo de notificación de brechas, tipos de datos más protegidos, sanciones máximas y exigencia de auditoría externa. También necesito un análisis de fortalezas y debilidades de cada sector frente a un ataque equivalente al de BancoEstado."

**Para qué se usó:** Tener una base de qué normas rigen cada sector para poder comparar.

**Qué se usó y qué no:** La estructura de la tabla la tomé como referencia. El análisis comparativo y la conclusión final que incluye un ejemplo reciente de ataque al Registro Civil en Chile fueron conocimiento e investigacion propia.

---

### Prompt 5: Responsabilidades legales (archivo 05)

**Herramienta:** Claude (claude.ai)

**Prompt:**

> "Necesito identificar las responsabilidades legales de los actores del caso BancoEstado 2020: el grupo REvil, BancoEstado como institución, el directorio, el funcionario que ejecutó la macro maliciosa, y la CMF. Para cada actor indica tipo de responsabilidad (penal/civil/administrativa), norma chilena con artículo, y consecuencia legal posible."

**Para qué se usó:** Entender qué tipo de responsabilidad legal corresponde a cada actor, especialmente la diferencia entre responsabilidad penal, civil y administrativa.

**Qué se usó y qué no:** Usé la clasificación por tipo de responsabilidad como guía. Se ajusto y cambio el analisis, segun atenuantes como por ejemplo el caso del funcionario.

---

### Prompt 6: Datos personales y Ley 19.628 (archivo 06)

**Herramienta:** Claude (claude.ai)

**Prompt:**

> "Para el tratamiento de datos personales del caso BancoEstado 2020 bajo la Ley 19.628 necesito: categorizar los tipos de datos que procesa el banco, analizar cuáles califican como sensibles bajo el Art. 2 letra g) y por qué los datos financieros no califican formalmente pero son delicados en la práctica, identificar obligaciones incumplidas especialmente el Art. 11, y explicar cada derecho ARCO aplicado al caso."

**Para qué se usó:** Entender la definición legal de dato sensible y cómo se aplica la Ley 19.628, que no había estudiado antes.

**Qué se usó y qué no:** La explicación de los derechos ARCO me ayudó a entender el concepto. La aplicación específica al caso BancoEstado y las limitaciones que el caso dejó en evidencia las analicé yo.

---

## Uso de IA en la construcción de la página web

### Herramientas usadas

- **Claude (claude.ai):** para aprender conceptos básicos de React y JSX desde cero.
- **Agente Copilot en VS Code:** para completar código más rápidamente una vez que ya entendía la estructura básica de cada componente.

### Prompt principal para la página web

**Prompt:**

> "Guíame para crear una página web con React con JSX llamada Análisis legal caso BancoEstado. Ya tengo todo lo necesario instalado, pero necesito ayuda para crear la página ya que no tengo conocimientos en React. No generes el código completo sino que guíame paso a paso de manera explicativa. Enfócate en qué es un componente, cómo funciona JSX y cómo se realiza la renderización en el navegador."

**Para qué se usó:** Aprender la estructura básica de un componente React, cómo funciona JSX, y cómo conectar los componentes entre sí en el `App.jsx`.

**Errores relevantes que se corrigieron con ayuda:**

- Subí la carpeta `node_modules` a GitHub varias veces porque no tenía bien configurado el `.gitignore`. Lo resolví con `git rm -r --cached node_modules`.
- El primer deploy en Vercel falló porque `@tailwindcss/vite` no estaba declarado como dependencia en el `package.json`.
- Cometí errores de estructura JSX como anidar `<tr>` dentro de otro `<tr>`.
- Tuve varios conflictos con git por diferencias entre el historial local y el remoto.

---

## Nota sobre el historial de commits

Los archivos markdown aparecen subidos juntos debido a un problema técnico: tenía una primera versión del proyecto en un repositorio separado donde sí había ido subiendo los archivos gradualmente. Al comenzar con la pagina web todo se creo en otro repositorio y al reorganizar el proyecto para tener todo en un solo repositorio, y al migrar los archivos y resolver los conflictos de historial entre los dos repositorios, los archivos quedaron agrupados en un mismo commit. El trabajo de investigación y redacción de cada sección se hizo de forma progresiva a lo largo del proceso, no de una sola vez.

## Reflexión final

Usar IA en este trabajo me ayudó principalmente en dos cosas: entender conceptos legales que no había visto antes (como los artículos de la Ley 21.459 o los derechos ARCO), y aprender React desde cero en muy poco tiempo.

Lo que aprendí es que la calidad de lo que obtienes depende directamente de qué tan bien entiendes el tema. Los prompts que funcionaron mejor fueron los que mencionaban el caso específico, las leyes exactas y los artículos concretos, no los genéricos. Eso me obligó a investigar primero para poder preguntar bien.
