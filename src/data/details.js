// Contenido detallado por repo (overview, features, instalación, uso...)
// Generado a partir del README real de cada proyecto. Clave = slug del repo (último segmento de la URL de GitHub).
// Si un slug no tiene entrada aquí, la página de detalle muestra una vista mínima con el enlace a GitHub.
// Nota: la entrada de "Discord-RAT-Windows" se redactó SIN leer su README (ese fetch disparaba el
// filtro de seguridad "Cyber" del sistema); se basa solo en metadatos seguros del repo (lenguaje,
// topics, listado de ficheros) y en su descripción corta ya verificada.

export const DETAILS = {
  'Discord-RAT-Windows': {
    overview: `Discord-RAT-Windows es una herramienta de administración remota (RAT) escrita en Python que permite operar un agente en máquinas Windows a través de un bot de Discord, usando el propio servidor de Discord como canal de mando y control. Resulta de interés para formación en red team y para el estudio práctico de arquitecturas de C2 dentro de entornos de laboratorio controlados. El proyecto incluye utilidades complementarias para automatizar la puesta en marcha del bot y para empaquetar el agente como ejecutable independiente.`,
    features: [
      `Panel de control remoto vía servidor de Discord`,
      `Script de configuración automatizada del bot`,
      `Compilación del agente a archivo ejecutable independiente`,
      `Scripts adicionales de configuración para entornos controlados`,
      `Recursos de personalización (icono/logo) para el ejecutable compilado`,
    ],
    requirements: [`Python 3`, `Cuenta y bot de Discord con token propio`, `Windows (para el ejecutable compilado)`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/Discord-RAT-Windows.git` },
      { title: `Instalar dependencias`, code: `pip install -r requirements.txt` },
      { title: `Configurar el token del bot de Discord propio`, code: null },
    ],
    usage: [
      { title: `Ejecutar el script principal en un entorno de laboratorio controlado`, code: null },
      { title: `Gestionar el agente desde el servidor de Discord configurado`, code: null },
    ],
    disclaimer: `Herramienta de tipo RAT/C2 destinada exclusivamente a formación en Red Team y entornos de laboratorio controlados con consentimiento explícito; su uso contra sistemas de terceros sin autorización es ilegal.`,
  },

  wraith: {
    overview: `Wraith es un toolkit ofensivo de pruebas de seguridad web construido como aplicación de escritorio con Electron, React y TypeScript, pensado como alternativa integral a herramientas como Burp Suite. Combina un proxy interceptor, un escáner pasivo de vulnerabilidades, un fuzzer, un detector de condiciones de carrera y un asistente de IA en una única interfaz oscura. Está dirigido a pentesters y cazadores de bugs que buscan centralizar el análisis de tráfico HTTP, la manipulación de peticiones y la construcción de cadenas de ataque en una sola herramienta.`,
    features: [
      `Proxy interceptor con historial exportable a CSV/JSON/HAR y repetidor con soporte multi-pestaña`,
      `Escáner pasivo de vulnerabilidades que analiza las respuestas del tráfico capturado`,
      `Fuzzer con posicionamiento de payloads y crawler configurable en profundidad`,
      `Detector de condiciones de carrera (race conditions) e interacciones fuera de banda (OOB)`,
      `Manipulación de JWT con pruebas de confusión de algoritmo y frontend para cracking de hashes`,
      `Asistente de IA integrado y constructor de cadenas de ataque con exportación de PoC en Python`,
    ],
    requirements: [`Node.js y npm`, `Sistema operativo de escritorio (Windows/Linux/macOS, vía Electron)`, `Herramientas externas opcionales: tshark, john, hashcat, curl`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/wraith.git` },
      { title: `Instalar dependencias`, code: `npm install` },
      { title: `Ejecutar en modo desarrollo`, code: `npm run dev` },
      { title: `Generar build de producción`, code: `npm run build` },
    ],
    usage: [
      { title: `Iniciar la aplicación`, code: `npm run dev` },
      { title: `Interceptar tráfico HTTP`, code: null },
      { title: `Lanzar el escáner pasivo o el fuzzer sobre las peticiones capturadas`, code: null },
      { title: `Construir y exportar una cadena de ataque como PoC en Python`, code: null },
    ],
    disclaimer: `Herramienta ofensiva pensada exclusivamente para pruebas de seguridad autorizadas; su uso contra sistemas sin consentimiento explícito es ilegal.`,
  },

  'c2-panel-malware-education': {
    overview: `Este proyecto implementa un panel de Command & Control (C2) orientado a ejercicios de Red Team, formado por un servidor Flask con dashboard web y un agente cliente multiplataforma. El servidor centraliza la visualización de agentes conectados, tráfico HTTP, dominios visitados y otros datos recopilados, mientras que el agente se ejecuta en el sistema objetivo para capturar y enviar dicha información. Está pensado para profesionales de Red Team y estudiantes de ciberseguridad que trabajen en entornos controlados y con consentimiento explícito.`,
    features: [
      `Dashboard web en Flask para visualizar agentes, keylogs, tráfico HTTP y dominios visitados`,
      `Agente cliente multiplataforma (Linux/Windows) que captura teclas y analiza tráfico`,
      `Registro automático de agentes mediante UUID y envío periódico de datos al servidor`,
      `Captura de teclado mediante evdev en Linux y pynput en Windows`,
      `Servidor C2 escuchando por defecto en el puerto 5000`,
    ],
    requirements: [`Python 3.7+`, `Flask, requests y scapy`, `evdev (Linux) o pynput (Windows)`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/c2-panel-malware-education.git` },
      { title: `Instalar dependencias`, code: `pip install -r requirements.txt` },
      { title: `Iniciar el servidor C2`, code: `python server.py` },
      { title: `Desplegar el agente en el sistema objetivo`, code: `python agent.py` },
    ],
    usage: [
      { title: `Arrancar el panel/servidor web`, code: `python server.py` },
      { title: `Ejecutar el agente en la máquina de pruebas para que se registre en el servidor`, code: null },
      { title: `Consultar el dashboard en el navegador para ver agentes, keylogs y tráfico capturado`, code: null },
    ],
    disclaimer: `Herramienta de tipo C2/RAT destinada únicamente a ejercicios de Red Team autorizados y entornos controlados; su uso sin consentimiento explícito es ilegal.`,
  },

  RansomwareLocker_Education: {
    overview: `RansomwareLocker_Education es una herramienta didáctica en C#/.NET que simula el comportamiento de un ransomware básico en un entorno controlado, con el fin de enseñar cómo funcionan el cifrado de archivos y la generación de notas de rescate. Permite cifrar archivos de directorios de usuario, generar una nota de rescate ficticia y revertir el proceso mediante una clave secreta. Está orientada a estudiantes y formadores de ciberseguridad que necesiten demostrar de forma segura el funcionamiento de este tipo de malware.`,
    features: [
      `Cifrado de archivos en directorios de usuario añadiendo la extensión .locked`,
      `Descifrado de los archivos mediante una clave secreta`,
      `Generación de una nota de rescate ficticia en el escritorio`,
      `Modo debug que muestra carpetas excluidas, archivos procesados y errores de acceso`,
      `Protección de archivos críticos del sistema para evitar daños reales`,
    ],
    requirements: [`.NET 6+`, `Visual Studio o el SDK de .NET (dotnet CLI)`, `Máquina virtual o entorno aislado (no usar en producción)`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/RansomwareLocker_Education.git` },
      { title: `Compilar el proyecto`, code: `dotnet build` },
      { title: `Ejecutar la aplicación`, code: `dotnet run` },
    ],
    usage: [
      { title: `Lanzar el programa y elegir una opción del menú`, code: `dotnet run` },
      { title: `Cifrar archivos de prueba (genera la nota de rescate en el escritorio)`, code: null },
      { title: `Descifrar los archivos usando la clave secreta generada`, code: null },
      { title: `Activar el modo debug para ver el detalle de la ejecución`, code: null },
    ],
    disclaimer: `Simulación educativa de ransomware que debe ejecutarse exclusivamente en máquinas virtuales o entornos aislados, nunca sobre datos o sistemas de producción.`,
  },

  keylogger_script: {
    overview: `keylogger_script es un conjunto de scripts en Python para capturar la entrada de teclado en sistemas Linux y Windows, compuesto por un cliente que registra las pulsaciones y un servidor que las recibe. Incluye además la posibilidad de integrarse con msfvenom para establecer una shell inversa hacia el sistema objetivo. Es una herramienta pensada con fines educativos para entender el funcionamiento de este tipo de malware en laboratorios controlados.`,
    features: [
      `Script cliente (capture_victim.py) que captura las pulsaciones de teclado en la máquina objetivo`,
      `Script servidor (server_host.py) que recibe y centraliza las pulsaciones capturadas`,
      `Soporte multiplataforma mediante las librerías pynput y keyboard`,
      `Script de instalación de dependencias (requirements.sh)`,
      `Integración opcional con msfvenom/Metasploit para obtener una shell inversa`,
    ],
    requirements: [`Python 3`, `pynput, keyboard y colorama`, `Metasploit Framework (opcional, para la shell inversa)`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/keylogger_script.git` },
      { title: `Instalar dependencias`, code: `bash requirements.sh` },
      { title: `Configurar IP y puerto en los scripts`, code: null },
    ],
    usage: [
      { title: `Iniciar el servidor en la máquina atacante`, code: `python3 server_host.py` },
      { title: `Ejecutar el script cliente en la máquina objetivo`, code: `python3 capture_victim.py` },
      { title: `Revisar las pulsaciones recibidas en el servidor`, code: null },
    ],
    disclaimer: `El uso de un keylogger sin el consentimiento explícito del usuario objetivo es ilegal y contrario a la ética; debe emplearse únicamente en laboratorios autorizados.`,
  },

  'AMSI-Bypass-Generator': {
    overview: `AMSI-Bypass-Generator es un sitio web estático, alojado en GitHub Pages, que documenta y genera de forma interactiva distintas técnicas para evadir el AMSI (Antimalware Scan Interface) de Windows. Explica cómo funciona AMSI y ofrece varios métodos de evasión —manipulación de funciones de amsi.dll, ofuscación de cadenas, modificación de memoria y carga de ensamblados en tiempo de ejecución— con resaltado de sintaxis en el propio navegador. Está dirigido a investigadores de seguridad ofensiva y estudiantes que quieran entender los fundamentos de las técnicas de bypass de AMSI.`,
    features: [
      `Explicación de qué es AMSI y cómo se integra en Windows para el análisis de scripts`,
      `Generador interactivo de técnicas de bypass basadas en manipulación de amsi.dll`,
      `Ofuscación de cadenas y modificación de memoria en tiempo de ejecución`,
      `Carga de ensamblados en tiempo de ejecución como técnica de evasión adicional`,
      `Interfaz web con resaltado de sintaxis mediante CodeMirror.js`,
    ],
    requirements: [`Navegador web moderno`, `Node.js (opcional, solo para desarrollo local del sitio)`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/AMSI-Bypass-Generator.git` },
      { title: `Abrir el sitio localmente`, code: null },
      { title: `O acceder directamente a la versión publicada en GitHub Pages`, code: null },
    ],
    usage: [
      { title: `Visitar la página publicada`, code: `https://d1se0.github.io/AMSI-Bypass-Generator/index.html` },
      { title: `Seleccionar la técnica de bypass de AMSI deseada`, code: null },
      { title: `Copiar el código generado para su estudio en un entorno controlado`, code: null },
    ],
    disclaimer: `Estas técnicas de evasión de AMSI se documentan exclusivamente con fines educativos y de investigación en seguridad ofensiva; su uso para evadir controles de seguridad sin autorización es ilegal.`,
  },

  EnvObfuscatorPS: {
    overview: `EnvObfuscatorPS es una herramienta escrita en Python que ofusca comandos de PowerShell aprovechando las variables de entorno estándar de Windows, con el objetivo de dificultar el análisis estático y la detección por firmas. Reconstruye el comando original extrayendo caracteres de variables de entorno mediante referencias posicionales y ejecutándolo en memoria con iex. Está pensada para investigadores de seguridad ofensiva que estudian técnicas de evasión y ofuscación en entornos Windows.`,
    features: [
      `Ofuscación de comandos PowerShell usando variables de entorno de Windows`,
      `Mapeo de caracteres del comando original contra el contenido de variables de entorno`,
      `Reconstrucción del comando mediante referencias posicionales tipo $env:VAR[index]`,
      `Generación de payloads listos para usar en scripts .ps1 o en línea de comandos`,
      `Sin dependencias externas más allá de Python estándar`,
    ],
    requirements: [`Python 3.6+`, `Sistema Windows (para ejecutar el comando ofuscado resultante)`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/EnvObfuscatorPS.git` },
      { title: `Ejecutar el script`, code: `python env_obfuscator.py` },
    ],
    usage: [
      { title: `Ejecutar la herramienta`, code: `python env_obfuscator.py` },
      { title: `Introducir el comando de PowerShell o ruta de ejecutable a ofuscar`, code: null },
      { title: `Obtener el comando ofuscado resultante y usarlo en un .ps1 o en línea de comandos`, code: null },
    ],
    disclaimer: `Herramienta de ofuscación pensada únicamente para investigación y formación en ciberseguridad; su uso para evadir controles de seguridad sin autorización es ilegal.`,
  },

  auto_shell: {
    overview: `AutoShell es una herramienta en Python para pentesting ético que automatiza el levantamiento de un listener, mejora automáticamente la TTY de la shell obtenida y ofrece una terminal web con soporte de PTY local. Incluye una selección de payloads preconfigurados en varios lenguajes y funciones de conveniencia como copiado automático al portapapeles y codificación en Base64 para evasión de filtros. Está orientada a estudiantes de CTF y pentesters que necesiten agilizar la fase de post-explotación en laboratorios autorizados.`,
    features: [
      `Automatización del listener con mejora integrada de la TTY (vía stty y configuración de terminal)`,
      `Interfaz web (GUI) con pestañas para terminal local y para la shell reversa obtenida`,
      `Ocho payloads preconfigurados en Python, Bash, Netcat, Perl, Ruby y PHP`,
      `Codificación opcional en Base64 para evadir filtros`,
      `Copiado automático al portapapeles y soporte de colores ANSI`,
      `Comandos rápidos de enumeración (SUID, cron, sudo)`,
    ],
    requirements: [`Python 3.8+`, `Utilidades estándar de Linux (bash, stty)`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/auto_shell.git` },
      { title: `Instalar dependencias (si aplica)`, code: `pip install -r requirements.txt` },
    ],
    usage: [
      { title: `Lanzar el listener con IP y puerto`, code: `python3 auto_shell.py --ip [IP] --port [PORT]` },
      { title: `Seleccionar un payload preconfigurado para la máquina objetivo`, code: null },
      { title: `Activar la terminal web opcional en un puerto configurable`, code: null },
      { title: `Usar los comandos rápidos de enumeración una vez obtenida la shell`, code: null },
    ],
    disclaimer: `Herramienta destinada exclusivamente a laboratorios de pentesting ético, CTFs y entornos de aprendizaje autorizados; su uso contra sistemas sin consentimiento es ilegal.`,
  },

  revShell: {
    overview: `revShell es un generador de reverse shells en Python capaz de construir el comando de conexión inversa correcto para decenas de lenguajes y entornos (PHP, PowerShell, Python, Ruby, Node.js, Golang, socat, Lua, Groovy, Dart, Crystal, Awk, entre otros). Está pensado para pentesters y estudiantes de ciberseguridad que necesitan generar rápidamente el payload adecuado durante una prueba de intrusión autorizada.`,
    features: [
      `Soporte para múltiples lenguajes y formatos de reverse shell`,
      `Generación mediante parámetros de IP, puerto y formato`,
      `Listado extendido de todas las opciones disponibles con -fh`,
      `Ejemplos integrados para bash, PHP, PowerShell, Python y Ruby`,
      `Licencia MIT y abierto a contribuciones vía issues/PRs`,
    ],
    requirements: [`Python 3`, `Linux/Bash`, `Permisos sudo para el script de dependencias`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/revShell.git\ncd revShell` },
      { title: `Instalar dependencias`, code: `sudo bash requirements.sh` },
      { title: `Verificar la instalación`, code: `python3 revShell.py -h` },
    ],
    usage: [
      { title: `Generar un reverse shell`, code: `python3 revShell.py -i <HOST_IP> -p <PORT> -t <FORMAT>` },
      { title: `Ejemplo en bash`, code: `python3 revShell.py -i 10.10.10.10 -p 4444 -t bash` },
      { title: `Ver todas las opciones y formatos soportados`, code: `python3 revShell.py -fh` },
    ],
    disclaimer: `Herramienta de uso exclusivo en pruebas de intrusión y auditorías autorizadas, nunca contra sistemas sin consentimiento explícito.`,
  },

  'revShellsGenerator-page': {
    overview: `Rev Shell's Generator es una aplicación web (HTML/CSS/JS) que genera comandos de reverse shell de forma visual, sustituyendo automáticamente la IP y el puerto en el payload elegido. Resulta útil para pentesters que quieren un generador rápido y sin instalación, directamente desde el navegador.`,
    features: [
      `Sustitución automática de IP y puerto en el payload`,
      `Soporte multi-lenguaje: Linux/Unix, Python, PHP, Ruby, Perl, Node.js, Windows y lenguajes compilados`,
      `Interfaz estilo terminal con resaltado de sintaxis vía Highlight.js`,
      `Copia del payload al portapapeles con un clic`,
      `Categorización de técnicas (TCP, UDP, SSL, FIFO, etc.)`,
    ],
    requirements: [`Navegador web moderno`, `No requiere backend (HTML5, CSS3, JS vanilla)`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/revShellsGenerator-page.git` },
      { title: `Abrir la página en el navegador`, code: null },
      { title: `(Opcional) Servir con un servidor estático`, code: `python3 -m http.server 8000` },
    ],
    usage: [
      { title: `Introducir la IP y el puerto en el formulario`, code: null },
      { title: `Seleccionar el lenguaje o técnica deseada`, code: null },
      { title: `Copiar el payload generado con un clic`, code: null },
    ],
    disclaimer: `Herramienta destinada únicamente a fines educativos, auditorías de seguridad y entornos controlados, según indica su propio README.`,
  },

  winFind: {
    overview: `WinFind es una herramienta de auditoría post-explotación para Windows escrita en C# que facilita la enumeración de vectores de escalada de privilegios, configuraciones inseguras y posibles secretos en un sistema comprometido. Está orientada a pentesters y red teamers durante la fase de post-explotación en entornos Windows autorizados.`,
    features: [
      `Enumeración de información de sistema y usuario`,
      `Revisión de permisos de carpetas críticas`,
      `Detección de máquinas virtuales y sandboxes`,
      `Búsqueda de contraseñas en ficheros comunes y detección de secretos (navegadores, AWS, Git, Firefox)`,
      `Enumeración de tareas programadas, servicios y variables de entorno`,
      `Recomendaciones automáticas de exploits y módulos de Metasploit`,
    ],
    requirements: [`Windows 7 o superior`, `.NET Framework 4.7.2+ o .NET 5/6`, `Permisos para consultar la configuración del sistema`],
    installation: [
      { title: `Clonar el repositorio o descargar el ejecutable`, code: `git clone https://github.com/D1se0/winFind.git` },
      { title: `Usar el binario precompilado incluido`, code: null },
      { title: `Ejecutar directamente, sin pasos de compilación adicionales`, code: null },
    ],
    usage: [
      { title: `Ejecutar el binario desde una consola de Windows`, code: `winFind.exe` },
      { title: `Revisar el informe generado en consola`, code: null },
      { title: `Priorizar los vectores de escalada detectados`, code: null },
    ],
    disclaimer: `Creado para fines educativos y pruebas de seguridad autorizadas; no debe usarse sobre sistemas sin consentimiento explícito.`,
  },

  InterceptPassResetWindows: {
    overview: `InterceptPassResetWindows implementa un Password Filter nativo de Windows que intercepta y registra los cambios de contraseña del sistema, aprovechando el mecanismo oficial de Windows para validar contraseñas contra políticas personalizadas. Está pensado para auditorías de seguridad autorizadas, pentesting con consentimiento e investigaciones forenses legales.`,
    features: [
      `Intercepción de cambios de contraseña mediante Password Filter nativo (scecIi.dll)`,
      `Registro y monitorización de los cambios interceptados`,
      `Instalación mediante ejecutable dedicado (CreateInterceptPassChange.exe)`,
      `Modificación del registro en HKLM\\SYSTEM\\CurrentControlSet\\Control\\Lsa`,
      `Compatible con Windows 10/11 y Server 2012+`,
    ],
    requirements: [`Windows 10/11 o Windows Server 2012+`, `Privilegios de administrador`],
    installation: [
      { title: `Clonar el repositorio o descargar los binarios`, code: `git clone https://github.com/D1se0/InterceptPassResetWindows.git` },
      { title: `Copiar la DLL y ejecutar el instalador como administrador`, code: `CreateInterceptPassChange.exe` },
      { title: `Reiniciar el sistema para aplicar el Password Filter`, code: null },
    ],
    usage: [
      { title: `Ejecutar el instalador con privilegios de administrador`, code: `CreateInterceptPassChange.exe` },
      { title: `Verificar el registro del filtro en el registro de Windows`, code: null },
      { title: `Monitorizar los cambios de contraseña interceptados`, code: null },
    ],
    disclaimer: `Uso limitado a auditorías de seguridad autorizadas, pentesting con consentimiento explícito del propietario del sistema e investigación forense legal; nunca en entornos de producción sin autorización.`,
  },

  SpoofingApp: {
    overview: `SpoofingApp es una aplicación gráfica en Python (Tkinter + Scapy) para realizar ataques de ARP y DNS spoofing en redes locales, con escaneo de hosts mediante ARP broadcast. Está dirigida a pentesters y auditores que necesitan comprobar la resistencia de una red frente a ataques de intercepción de tráfico, siempre en redes controladas y con consentimiento explícito.`,
    features: [
      `ARP spoofing bidireccional para interceptar tráfico entre objetivo y gateway`,
      `DNS spoofing selectivo, redirigiendo dominios concretos a una IP controlada`,
      `Escaneo de red mediante ARP broadcast para descubrir hosts`,
      `Bloqueo de acceso a internet de un objetivo mediante envenenamiento ARP`,
      `Interfaz gráfica con estilo cyberpunk/neón`,
    ],
    requirements: [`Linux (Kali Linux recomendado)`, `Python 3.7+`, `python3-tk y libpcap-dev`, `Privilegios root`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/SpoofingApp.git\ncd SpoofingApp` },
      { title: `Instalar dependencias`, code: `sudo bash install_requirements.sh` },
      { title: `Ejecutar la aplicación`, code: `sudo python3 SpoofingApp.py` },
    ],
    usage: [
      { title: `Escanear la red local`, code: null },
      { title: `Seleccionar objetivo y gateway desde la interfaz`, code: null },
      { title: `Lanzar el ataque de ARP o DNS spoofing deseado`, code: null },
    ],
    disclaimer: `Herramienta exclusiva para uso en redes controladas y con consentimiento explícito; su uso no autorizado puede constituir un delito.`,
  },

  internetNullHacker: {
    overview: `internetNullHacker es un conjunto de scripts en Bash para escanear y realizar ARP spoofing en redes locales. Incluye KnowARPHosts para identificar los dispositivos conectados e InternetNullHacker para desconectar dispositivos no autorizados de la red WiFi. Pensado para fines educativos y pruebas de seguridad autorizadas sobre la propia red.`,
    features: [
      `Escaneo de red con arp-scan para listar IPs y MACs conectadas`,
      `Desconexión de dispositivos mediante ARP spoofing (dsniff)`,
      `Configuración automática de dependencias`,
      `Salida con formato IP / MAC / fabricante del dispositivo`,
    ],
    requirements: [`Linux/Bash`, `arp-scan`, `dsniff`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/internetNullHacker.git\ncd internetNullHacker` },
      { title: `Instalar dependencias`, code: `sudo apt-get install arp-scan dsniff` },
      { title: `Dar permisos de ejecución a los scripts`, code: `chmod +x *.sh` },
    ],
    usage: [
      { title: `Escanear dispositivos conectados`, code: `bash knowARPHosts.sh` },
      { title: `Indicar la interfaz de red cuando se solicite (ej. wlan0)`, code: null },
      { title: `Ejecutar el spoofer para desconectar un dispositivo`, code: `bash internetNullHacker.sh` },
    ],
    disclaimer: `Uso exclusivo para fines educativos o pruebas de seguridad autorizadas sobre redes propias; su mal uso puede infringir la legislación vigente.`,
  },

  advancedInternetNullHacker: {
    overview: `advancedInternetNullHacker es la versión avanzada del spoofer ARP, que monitoriza la red local por IP o por MAC frente a listas blancas (permitted_ip.txt / permitted_mac.txt) y desconecta automáticamente mediante ARP spoofing cualquier dispositivo no autorizado que aparezca. Incluye también un script para identificar los hosts activos. Útil para quien administra una red doméstica o pequeña y quiere vigilarla frente a intrusos.`,
    features: [
      `Monitorización de red por IP o por MAC contra una lista blanca configurable`,
      `ARP spoofing automático de cualquier dispositivo no permitido`,
      `Script knowARPHosts.sh para identificar dispositivos activos en la red`,
      `Dos modos independientes de funcionamiento (por IP y por MAC)`,
      `Listas de direcciones permitidas editables en ficheros .txt`,
    ],
    requirements: [`Linux basado en Debian (Kali Linux recomendado)`, `Python 3`, `arp-scan`, `arpspoof (dsniff)`],
    installation: [
      { title: `Instalar dependencias`, code: `sudo apt-get install arp-scan dsniff` },
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/advancedInternetNullHacker.git\ncd advancedInternetNullHacker` },
      { title: `Crear las listas de direcciones permitidas`, code: `permitted_ip.txt / permitted_mac.txt (una dirección por línea)` },
    ],
    usage: [
      { title: `Identificar dispositivos conectados`, code: `bash knowARPHosts.sh` },
      { title: `Monitorizar y proteger la red por IP`, code: `python3 advanceInternetNullHacker_IP.py` },
      { title: `Monitorizar y proteger la red por MAC`, code: `python3 advanceInternetNullHacker_MAC.py` },
    ],
    disclaimer: `Uso responsable y limitado a redes propias que administras; el ARP spoofing puede ser detectado por sistemas de seguridad avanzados y su uso no autorizado es ilegal.`,
  },

  dynamicIPTool: {
    overview: `dynamicIPTool es una herramienta en Bash que rota automáticamente la IP pública del usuario a intervalos definidos, apoyándose en Tor y Tornet, e incorpora protección DNS mediante un proxy SOCKS v5 con integración para Firefox. Está pensada para usuarios que quieren reforzar su privacidad y anonimato al navegar.`,
    features: [
      `Rotación periódica de la IP pública a intervalos personalizables (en segundos)`,
      `Configuración automática de Tor y componentes relacionados`,
      `Protección DNS mediante proxy SOCKS v5`,
      `Guía de configuración de Firefox para navegación anónima`,
    ],
    requirements: [`Linux`, `Tor`, `Tornet`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/dynamicIPTool.git\ncd dynamicIPTool` },
      { title: `Dar permisos de ejecución al script`, code: `chmod +x dynamicIP.sh` },
      { title: `Ejecutar el script`, code: `bash dynamicIP.sh` },
    ],
    usage: [
      { title: `Ejecutar la herramienta e indicar el intervalo de cambio de IP`, code: `bash dynamicIP.sh` },
      { title: `Configurar el proxy SOCKS v5 en Firefox`, code: `127.0.0.1:9050` },
      { title: `Verificar el cambio periódico de la IP pública`, code: null },
    ],
    disclaimer: null,
  },

  'WiFiHackWPA2-3': {
    overview: `WiFiHackWPA2-3 es una herramienta de auditoría escrita en Rust para sistemas Windows que recupera las contraseñas WPA2/WPA3 guardadas en los perfiles de red del propio equipo, apoyándose en la API nativa WLAN de Windows. Está pensada para recuperación de contraseñas propias, migraciones de sistema y auditorías de seguridad corporativas autorizadas. No realiza ataques activos: solo extrae credenciales que el sistema ya tiene almacenadas.`,
    features: [
      `Extrae contraseñas WPA2/WPA3 de perfiles de red guardados en Windows`,
      `Usa la API nativa WLAN de Windows para enumerar interfaces y perfiles`,
      `Recupera los perfiles guardados en formato XML y descifra la clave en texto plano`,
      `No realiza fuerza bruta, ni crackeo de handshakes, ni ataques activos a redes`,
      `Requiere privilegios de administrador para funcionar`,
    ],
    requirements: [`Windows 10 (build 1809+), Windows 11 o Windows Server 2019/2022`, `Privilegios de administrador`, `Rust 1.70+ (solo si se compila desde el código fuente)`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/WiFiHackWPA2-3.git\ncd WiFiHackWPA2-3` },
      { title: `Compilar el proyecto con Cargo`, code: `cargo build --release` },
      { title: `Alternativa: usar el binario ya compilado`, code: `cd WiFiHackWPA2-3\\target\\release\n.\\wifiHack.exe` },
    ],
    usage: [
      { title: `Ejecutar como administrador`, code: `.\\wifiHack.exe` },
      { title: `Revisar el listado de perfiles y contraseñas extraídas en la salida del programa`, code: null },
    ],
    disclaimer: `Usa esta herramienta únicamente sobre equipos y redes propios o con autorización expresa; extraer credenciales ajenas sin permiso es ilegal.`,
  },

  'XIAO-WiFi-Analyzer': {
    overview: `XIAO WiFi Analyzer es un proyecto de firmware para el microcontrolador Seeed Studio XIAO ESP32-C5 que convierte el dispositivo en un analizador WiFi portátil y autónomo: crea su propio punto de acceso y muestra los resultados del escaneo mediante un panel web en tiempo real, sin necesidad de router, internet ni ordenador. Es útil para aficionados al hardware hacking, estudiantes de redes y makers que quieran estudiar el espectro WiFi 2.4/5 GHz de forma didáctica. Incluye una versión básica sin dependencias de terceros y una versión avanzada con pantalla táctil redonda.`,
    features: [
      `Escanea redes WiFi en 2.4GHz y 5GHz sin depender de router ni PC`,
      `Crea su propio punto de acceso con un dashboard web en tiempo real`,
      `Versión básica sin librerías de terceros y versión con pantalla táctil redonda de 1.28"`,
      `Analiza calidad de señal, canales recomendados y tipo de seguridad (WPA3/WPA2/WPA/WEP/abierta)`,
      `Mantiene historial de escaneos y estado del dispositivo`,
      `No realiza ataques, AP falsos, interceptación de tráfico ni jamming`,
    ],
    requirements: [`Placa Seeed Studio XIAO ESP32-C5`, `Arduino IDE con el paquete de placa para XIAO ESP32-C5`, `Librerías Seeed_GFX y Seeed_Arduino_RoundDisplay + LVGL (solo para la versión con pantalla)`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/XIAO-WiFi-Analyzer.git` },
      { title: `Instalar Arduino IDE y el paquete de placa para XIAO ESP32-C5`, code: null },
      { title: `Abrir la versión básica del firmware (recomendado empezar por aquí)`, code: null },
      { title: `Compilar y subir el firmware al XIAO ESP32-C5`, code: null },
    ],
    usage: [
      { title: `Encender el dispositivo: arranca su propio punto de acceso WiFi`, code: null },
      { title: `Conectarse al AP creado y abrir el dashboard web desde el navegador`, code: null },
      { title: `Consultar redes por banda, calidad de señal y canal recomendado`, code: null },
    ],
    disclaimer: null,
  },

  'DetectorAPFisico-Gadget-Hacking': {
    overview: `Este proyecto convierte un ESP32 con pantalla táctil ILI9341 y módulo XPT2046 en un localizador físico de puntos de acceso WiFi cercanos, mostrando la intensidad de señal RSSI en tiempo real mediante una barra de colores. Está orientado a makers y aficionados al gadget hacking que quieran rastrear físicamente el origen de una señal WiFi o analizar la cobertura de sus propias redes mediante un dispositivo portátil con interfaz táctil.`,
    features: [
      `Escaneo de redes WiFi cercanas desde el propio dispositivo`,
      `Visualización en pantalla táctil ILI9341 con barra de intensidad RSSI por colores`,
      `Modo de proximidad para localizar físicamente un punto de acceso concreto`,
      `Selección táctil de SSID y navegación mediante botones UP/DOWN/OK`,
      `Almacenamiento opcional de redes detectadas en tarjeta SD`,
    ],
    requirements: [`ESP32 (ESP-WROOM-32 recomendado)`, `Pantalla ILI9341 y módulo táctil XPT2046`, `Arduino IDE`, `Librerías Adafruit_GFX, Adafruit_ILI9341, XPT2046_Touchscreen, SD y SPI`],
    installation: [
      { title: `Instalar Arduino IDE`, code: null },
      { title: `Añadir el soporte de placas ESP32 en Arduino IDE`, code: `https://dl.espressif.com/dl/package_esp32_index.json` },
      { title: `Instalar las librerías necesarias (Adafruit GFX, Adafruit ILI9341, XPT2046_Touchscreen)`, code: null },
      { title: `Ajustar los pines de conexión en el código`, code: `#define TFT_CS   15\n#define TFT_DC   2\n#define TFT_RST  4\n#define TOUCH_CS 21\n#define TOUCH_IRQ 22\n#define SD_CS    5` },
      { title: `Conectar el ESP32 por USB y subir el código desde Arduino IDE`, code: null },
    ],
    usage: [
      { title: `Encender el dispositivo: muestra un banner y la lista de redes cercanas`, code: null },
      { title: `Navegar y seleccionar un SSID con los botones táctiles UP, DOWN y OK`, code: null },
      { title: `Activar el modo de proximidad para ver la barra RSSI en tiempo real`, code: null },
    ],
    disclaimer: null,
  },

  superTool: {
    overview: `superTool es una utilidad de reconocimiento de red en Python que combina nmap y searchsploit en una sola interfaz de línea de comandos, permitiendo descubrir dispositivos en un rango de red, enumerar puertos y servicios, escanear vulnerabilidades web y localizar exploits conocidos para los servicios detectados. Está pensada para pentesters y auditores de seguridad que necesiten agilizar tareas repetitivas de reconocimiento en auditorías autorizadas.`,
    features: [
      `Descubrimiento de dispositivos activos en un rango de red`,
      `Enumeración de puertos abiertos con identificación de servicios`,
      `Escaneo de vulnerabilidades en sitios web`,
      `Búsqueda de exploits en searchsploit para los servicios identificados`,
      `Consulta de servicios asociados a un puerto concreto`,
    ],
    requirements: [`Python 3`, `nmap instalado en el sistema`, `searchsploit instalado en el sistema`, `Linux (instala el comando global en /usr/local/bin)`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/superTool.git\ncd superTool/` },
      { title: `Instalar dependencias y registrar el comando global`, code: `sudo bash requirements.sh` },
    ],
    usage: [
      { title: `Escanear un rango de red`, code: `python3 superTool.py -r 192.168.1.0/24` },
      { title: `Buscar exploits para un host`, code: `python3 superTool.py -ex 192.168.1.10` },
      { title: `Escaneo detallado de una IP`, code: `python3 superTool.py -s 192.168.1.10` },
      { title: `Escanear vulnerabilidades de un sitio web`, code: `python3 superTool.py -w --url http://example.com` },
      { title: `Consultar el servicio asociado a un puerto`, code: `python3 superTool.py --service-port 80` },
    ],
    disclaimer: `Utiliza esta herramienta únicamente contra sistemas y redes sobre los que tengas autorización explícita para realizar pruebas de seguridad.`,
  },

  portScan: {
    overview: `portScan es un escáner de puertos en Python orientado a la auditoría de red, capaz de examinar el estado de los puertos (abiertos, cerrados o filtrados) de una IP concreta o de un rango completo en notación CIDR. Ofrece un modo resumido con solo los puertos abiertos y un modo detallado apoyado en nmap, con exportación de resultados a fichero, útil para pentesters durante la fase de reconocimiento de un objetivo autorizado.`,
    features: [
      `Escaneo de una IP individual o de un rango en notación CIDR`,
      `Modo resumido mostrando únicamente los puertos abiertos`,
      `Escaneo detallado apoyado en nmap para más información`,
      `Exportación de resultados a fichero de texto`,
      `Posibilidad de interrumpir el escaneo en cualquier momento con Ctrl+C`,
    ],
    requirements: [`Python 3.x`, `Librerías termcolor y scapy`, `nmap instalado en el sistema`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/portScan.git\ncd portScan` },
      { title: `Instalar dependencias`, code: `./requirements.sh` },
    ],
    usage: [
      { title: `Escanear una IP mostrando solo los puertos abiertos`, code: `python3 portScan.py -i <IP> --only-open` },
      { title: `Escanear un rango de red en formato CIDR`, code: `python3 portScan.py -s 10.10.11.0/24 --only-open` },
      { title: `Realizar un escaneo completo con nmap`, code: `python3 portScan.py -i <IP> --all` },
      { title: `Exportar los resultados a un fichero`, code: `python3 portScan.py -i <IP> --all --export <FILE>.txt` },
    ],
    disclaimer: `Emplea esta herramienta solo en redes y sistemas propios o con autorización expresa para su auditoría.`,
  },

  directorybrute: {
    overview: `directorybrute es una herramienta en Python para el descubrimiento de directorios y ficheros ocultos en servidores web mediante fuerza bruta sobre peticiones HTTP/HTTPS. Permite usar diccionarios personalizados, probar distintas extensiones de archivo y filtrar los resultados por código de estado, lo que la hace útil para pentesters y auditores web durante la fase de reconocimiento de una aplicación en la que tienen permiso para testear.`,
    features: [
      `Fuerza bruta de directorios y ficheros ocultos sobre HTTP y HTTPS`,
      `Soporte para diccionarios (wordlists) personalizados`,
      `Filtrado de resultados por código de estado HTTP`,
      `Prueba de múltiples extensiones de archivo en una misma ejecución`,
      `Control del número de hilos concurrentes y exportación de resultados`,
    ],
    requirements: [`Python 3`, `Librerías requests, colorama y tqdm`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/directorybrute.git\ncd directorybrute` },
      { title: `Instalar dependencias`, code: `pip3 install requests colorama tqdm` },
    ],
    usage: [
      { title: `Fuerza bruta básica de directorios excluyendo respuestas 404`, code: `python3 directorybrute.py -u http://example.com/BRUTE -w [WORDLIST] --hp "404"` },
      { title: `Fuerza bruta con extensiones concretas y más hilos`, code: `python3 directorybrute.py -u https://example.com -w [WORDLIST] --hp "404" -x "txt,html,php" -t 30` },
    ],
    disclaimer: `Utiliza esta herramienta únicamente contra servidores web propios o con autorización expresa para realizar pruebas de seguridad.`,
  },

  enumPluginsWordpress: {
    overview: `enumPluginsWordpress es un script en Python que identifica los plugins instalados en un sitio WordPress y, cuando es posible, extrae su número de versión a partir de los ficheros readme.txt estándar de cada plugin. Está pensado para desarrolladores, auditores de seguridad y administradores de sistemas que quieran evaluar posibles vulnerabilidades derivadas de plugins desactualizados en sitios sobre los que tienen autorización para testear.`,
    features: [
      `Escanea una lista personalizable de plugins WordPress conocidos`,
      `Extrae la versión del plugin cuando está disponible en su readme.txt`,
      `Comprueba las rutas estándar de plugins de WordPress`,
      `Salida en terminal con colores para facilitar la lectura de resultados`,
      `Pensado para desarrolladores, auditores de seguridad y administradores de sistemas`,
    ],
    requirements: [`Python 3.6+`, `Librerías requests y colorama`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/enumPluginsWordpress.git\ncd enumPluginsWordpress` },
      { title: `Instalar dependencias`, code: `pip install requests colorama` },
    ],
    usage: [
      { title: `Ejecutar el escáner`, code: `python3 enumPluginsWordpress.py` },
      { title: `Indicar la URL del sitio WordPress objetivo cuando el script lo solicite`, code: null },
    ],
    disclaimer: `Usa esta herramienta únicamente contra sitios WordPress propios o con autorización expresa para realizar auditorías de seguridad.`,
  },

  suBruteforce: {
    overview: `suBruteforce es una utilidad en Python que prueba combinaciones de usuario y contraseña contra el comando su en sistemas Unix/Linux, con soporte para listas de usuarios y contraseñas, ejecución multihilo y exportación de credenciales encontradas. Está orientada a auditores de seguridad que necesitan evaluar la robustez de las contraseñas locales en sistemas sobre los que tienen autorización expresa para realizar pruebas.`,
    features: [
      `Prueba combinaciones de usuario/contraseña contra el comando su`,
      `Soporta un único usuario o una lista de usuarios`,
      `Ejecución multihilo configurable para mayor velocidad`,
      `Exportación de las credenciales encontradas a un fichero`,
      `Opción para continuar probando tras encontrar credenciales válidas`,
      `Comprobación de seguridad que impide ejecutarlo como root`,
    ],
    requirements: [`Python 3`, `pip`, `Sistema Unix/Linux con el comando su disponible`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/suBruteforce.git\ncd suBruteforce` },
      { title: `Instalar dependencias`, code: `./requeriments.sh` },
    ],
    usage: [
      { title: `Probar un único usuario contra una lista de contraseñas`, code: `python3 suBruteforce.py -u <user> -w <password_file>` },
      { title: `Probar una lista de usuarios contra una lista de contraseñas`, code: `python3 suBruteforce.py -U <user_file> -w <password_file>` },
      { title: `Ejecutar con varios hilos y exportar los resultados`, code: `python3 suBruteforce.py -u <user> -w <password_file> -t <threads> -f <results_file>` },
    ],
    disclaimer: `Utiliza esta herramienta exclusivamente en sistemas propios o con autorización expresa; la fuerza bruta de credenciales sobre sistemas ajenos es ilegal.`,
  },

  cerbero: {
    overview: `Cerbero es una utilidad de línea de comandos para pruebas de penetración orientada a ataques de credenciales contra servicios SSH y FTP. Permite tanto pruebas de credenciales individuales como ataques por diccionario, e incluye enumeración de usuarios aprovechando vulnerabilidades de versión en SSH. Está pensada para pentesters y auditores de seguridad que necesitan validar la robustez de las credenciales expuestas en estos servicios.`,
    features: [
      `Ataques de fuerza bruta contra servicios SSH y FTP`,
      `Modo de prueba de credencial única y modo por diccionario (usuario/contraseña)`,
      `Enumeración de usuarios explotando la versión del servicio SSH`,
      `Mutaciones de credenciales configurables (contraseña vacía, usuario como contraseña, usuario invertido)`,
      `Ejecución multihilo para acelerar los ataques`,
      `Registro de resultados en fichero de salida`,
    ],
    requirements: [`Python 3.x`, `Librerías paramiko, ftplib y colorama`, `Privilegios elevados (root/sudo) recomendados`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/cerbero.git` },
      { title: `Ejecutar el script de instalación (completo o solo SSH)`, code: null },
    ],
    usage: [
      { title: `Lanzar ataque contra un host especificando servicio, diccionarios e hilos`, code: `python3 cerbero.py -H <host> -s ssh -U usuarios.txt -P passwords.txt -t 10 -o resultado.txt` },
      { title: `Activar mutaciones adicionales de credenciales`, code: `python3 cerbero.py -H <host> -s ftp -U usuarios.txt -P passwords.txt -e` },
    ],
    disclaimer: `Esta herramienta debe emplearse únicamente contra sistemas propios o con autorización expresa, ya que realizar ataques de fuerza bruta sin consentimiento es ilegal.`,
  },

  brutePSWA: {
    overview: `BrutePSWA es una herramienta en Python 3 diseñada para realizar ataques de fuerza bruta contra portales de PowerShell Web Access (PSWA) en entornos Windows Server. Prueba de forma controlada un listado de contraseñas para un usuario dado, detectando no solo el acceso correcto sino también situaciones intermedias como el límite de sesiones excedido o la falta de privilegios PSWA. Está orientada a pentesters que auditan la exposición de este vector de acceso remoto poco habitual en infraestructuras Windows.`,
    features: [
      `Fuerza bruta contra el endpoint de login de PowerShell Web Access`,
      `Detección de autenticación correcta, límite de sesiones excedido y usuarios sin privilegios PSWA`,
      `Manejo de errores ante IPs inválidas o inaccesibles`,
      `Detección de éxito incluso cuando existen sesiones desconectadas disponibles`,
      `Parametrización simple: IP objetivo, usuario y diccionario de contraseñas`,
    ],
    requirements: [`Python 3`, `Windows Server 2019/2022 con el rol PowerShell Web Access habilitado (entorno objetivo)`, `Acceso de administrador para configurar el laboratorio`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/brutePSWA.git` },
      { title: `Habilitar PowerShell Web Access en el Windows Server objetivo`, code: `Install-WindowsFeature -Name WindowsPowerShellWebAccess -IncludeManagementTools` },
      { title: `Configurar el gateway PSWA con certificado de prueba`, code: `Install-PswaWebApplication -UseTestCertificate` },
    ],
    usage: [
      { title: `Ejecutar el ataque de fuerza bruta`, code: `python3 brutePSWA.py <IP> <usuario> <diccionario>` },
      { title: `Ejemplo con rockyou.txt`, code: `python3 brutePSWA.py 192.168.1.38 '.\\Administrator' rockyou.txt` },
    ],
    disclaimer: `Debe usarse exclusivamente en entornos de laboratorio o con autorización explícita, ya que atacar credenciales de terceros sin permiso es ilegal.`,
  },

  crackerPass: {
    overview: `crackerPass es una utilidad de línea de comandos para el crackeo de contraseñas mediante diccionarios y la verificación de hashes en múltiples formatos. Soporta 14 algoritmos de hashing habituales como MD5, variantes de SHA, BCrypt y Argon2, permitiendo crackear hashes individuales o procesar varios desde un fichero. Resulta útil para auditores de seguridad que necesitan evaluar la robustez de contraseñas almacenadas como hash.`,
    features: [
      `Soporte para 14 algoritmos de hashing (MD5, SHA, BCrypt, Argon2, entre otros)`,
      `Crackeo de un hash individual o procesamiento por lotes desde fichero`,
      `Identificación automática de tipos de hash desconocidos`,
      `Ataques basados en diccionario`,
    ],
    requirements: [`Python 3.x`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/crackerPass.git` },
      { title: `Ejecutar el script de requisitos para instalar dependencias`, code: null },
    ],
    usage: [{ title: `Crackear un hash con un diccionario`, code: `python3 crackerPass.py -c [hash] -w [wordlist] -t [hashtype]` }],
    disclaimer: `Debe emplearse solo sobre hashes propios o con autorización expresa del propietario de las credenciales.`,
  },

  'Eloquia-DLL-Injection-Exploit-HTB': {
    overview: `Este proyecto automatiza la explotación de la máquina Eloquia de Hack The Box mediante inyección de DLL en Windows, combinando acceso al panel de administración de Django, subida de ficheros y carga dinámica de extensiones SQLite. El resultado es una shell remota interactiva que permite ejecutar comandos en el sistema Windows objetivo. Está diseñado exclusivamente para el entorno de la máquina Eloquia y no como herramienta genérica de inyección.`,
    features: [
      `Shell remota interactiva sobre el objetivo`,
      `Generación automática de una DLL por cada comando ejecutado`,
      `Gestión dinámica del token CSRF y actualización de cookies tras reinicios`,
      `Numeración automática de ficheros y limpieza automática de artefactos locales`,
      `Configuración completa por línea de comandos`,
    ],
    requirements: [`Python 3.10+`, `Librería requests`, `mingw-w64 (compilador de DLL para Windows)`, `Kali Linux o sistema basado en Debian`],
    installation: [
      { title: `Instalar el compilador mingw-w64`, code: `sudo apt install mingw-w64` },
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/Eloquia-DLL-Injection-Exploit-HTB.git` },
    ],
    usage: [
      { title: `Ver el menú de ayuda`, code: `python3 shell.py -h` },
      { title: `Lanzar shell interactiva con cookies de sesión`, code: `python3 shell.py --cookies "csrftoken=XXX; sessionid=YYY"` },
      { title: `Ejecutar un único comando`, code: `python3 shell.py --cookies "csrftoken=XXX; sessionid=YYY" whoami` },
    ],
    disclaimer: `Herramienta exclusiva para el entorno de laboratorio Eloquia de Hack The Box; no debe usarse contra sistemas ajenos sin autorización.`,
  },

  'CVE-2024-23897-Vulnerabilidad-Jenkins': {
    overview: `Este repositorio documenta y proporciona una prueba de concepto para CVE-2024-23897, una vulnerabilidad crítica de ejecución remota de comandos en Jenkins que permite a un atacante no autenticado enviar peticiones especialmente diseñadas para ejecutar comandos arbitrarios en el servidor. Incluye un laboratorio dockerizado para reproducir la vulnerabilidad en un entorno controlado. Está pensado para profesionales de seguridad que quieran entender y practicar la explotación de este CVE en Jenkins.`,
    features: [
      `PoC en Python que explota CVE-2024-23897 vía jenkins-cli.jar`,
      `Establece conexiones de nodo no autorizadas para subir y ejecutar comandos`,
      `Laboratorio dockerizado listo para desplegar mediante script de montaje automático`,
      `Orientado a versiones desactualizadas de Jenkins`,
    ],
    requirements: [`Python 3`, `Librería requests`, `Docker (para el laboratorio)`, `Acceso de red a la instancia Jenkins objetivo`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/CVE-2024-23897-Vulnerabilidad-Jenkins.git` },
      { title: `Instalar dependencias Python`, code: `pip install requests` },
      { title: `Desplegar el laboratorio Docker`, code: `bash auto_mount.sh` },
    ],
    usage: [{ title: `Ejecutar el exploit contra el servidor Jenkins objetivo`, code: `python3 cve-2024-23897.py` }],
    disclaimer: `Debe usarse exclusivamente en entornos controlados y con fines educativos o de pruebas de seguridad autorizadas; cualquier prueba no autorizada infringe la ley.`,
  },

  'CVE-2024-10924-Bypass-MFA-Wordpress-LAB': {
    overview: `Este laboratorio permite practicar la explotación de CVE-2024-10924 en WordPress, una vulnerabilidad que permite eludir la autenticación de dos factores (MFA) del plugin afectado y acceder al panel de administración. Incluye una máquina virtual vulnerable y varios scripts en Python para localizarla en red y ejecutar el bypass, tanto de forma automática como manual con Burp Suite. Es útil para quienes quieran entender en la práctica un fallo de lógica en la verificación MFA de WordPress.`,
    features: [
      `Máquina virtual vulnerable lista para VMware con WordPress preconfigurado`,
      `Script de descubrimiento que localiza la IP del objetivo en la red`,
      `Bypass automático de la verificación MFA vía el endpoint reallysimplessl/v1/two_fa/skip_onboarding`,
      `Modo manual con Burp Suite mostrando el endpoint exacto a interceptar`,
      `Genera un HTML local con el panel de administración obtenido tras el bypass`,
    ],
    requirements: [`Kali Linux con nmap, requests y rich`, `VMware para desplegar la máquina vulnerable`, `Python 3`],
    installation: [
      { title: `Desplegar la máquina vulnerable en VMware (Ubuntu-Bypass-MFA-Wordpress.vmx)`, code: null },
      { title: `Instalar dependencias en Kali`, code: `pip install requests\npip install rich` },
    ],
    usage: [
      { title: `Localizar la IP de la máquina WordPress`, code: `python3 knowIPwordpress.py` },
      { title: `Ejecutar el bypass automático de MFA`, code: `python3 bypass-MFA-Wordpress.py` },
      { title: `Obtener el endpoint para interceptar manualmente con Burp Suite`, code: `python3 endpointWordpress.py` },
    ],
    disclaimer: `Uso restringido a entornos de laboratorio propios; eludir la autenticación de sistemas ajenos sin autorización es ilegal.`,
  },

  'CVE-2024-51428-PoC': {
    overview: `Esta herramienta es un wrapper en Python sobre sqlmap que automatiza la detección y explotación de una inyección SQL ciega basada en tiempo (CVE-2024-51428) en el parámetro tid de ZoneMinder. Simplifica el proceso de enumeración de bases de datos, tablas y volcado de datos, mostrando una salida limpia sin el ruido habitual de los logs de sqlmap. Está pensada para su uso en CTF y en pruebas de penetración autorizadas contra instalaciones de ZoneMinder.`,
    features: [
      `Detección automática de la inyección SQL ciega basada en tiempo`,
      `Enumeración de bases de datos y tablas`,
      `Volcado de datos con filtrado por columnas y filas (cláusula WHERE)`,
      `Salida limpia ocultando los logs internos de sqlmap`,
    ],
    requirements: [`Python 3`, `sqlmap instalado`, `Cookie de sesión ZMSESSID válida`],
    installation: [
      { title: `Instalar sqlmap`, code: `sudo apt install sqlmap` },
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/CVE-2024-51428-PoC.git` },
    ],
    usage: [
      { title: `Comprobar si el objetivo es vulnerable`, code: `python3 poc.py --url http://target.htb -c 'COOKIE'` },
      { title: `Enumerar bases de datos`, code: `python3 poc.py --url http://target.htb -c 'COOKIE' -d` },
      { title: `Enumerar tablas de una base de datos`, code: `python3 poc.py --url http://target.htb -c 'COOKIE' -d -db zm` },
      { title: `Volcar una tabla completa`, code: `python3 poc.py --url http://target.htb -c 'COOKIE' -d -db zm -t Users` },
    ],
    disclaimer: `Solo debe emplearse en sistemas propios, entornos CTF o con autorización expresa para pruebas de penetración.`,
  },

  'CVE-2024-21413-Vulnerabilidad-Outlook-LAB': {
    overview: `Este laboratorio recrea CVE-2024-21413, una vulnerabilidad crítica en Microsoft Outlook que permite a un atacante hacer que la víctima acceda a enlaces maliciosos mediante correos manipulados, usando el protocolo file:// para redirigir hacia recursos SMB controlados por el atacante y así exponer credenciales NTLM. Incluye una herramienta para el envío automatizado del correo malicioso y una integración con Responder para capturar los hashes NTLMv2 resultantes.`,
    features: [
      `Herramienta en Python que automatiza el envío de correos con enlaces file:// maliciosos`,
      `Configuración de remitente, destinatario y servidor SMTP`,
      `Integración con Responder para capturar hashes NTLMv2 al intentar la autenticación`,
      `Script propio de captura de hash como alternativa a Responder`,
      `Script de arranque de servicios (servidor de correo y Outlook) para preparar el entorno del laboratorio`,
    ],
    requirements: [`Laboratorio Windows 10 con Python 3, pyautogui, Pillow y opencv-python`, `Servidor SMTP funcional (hMailServer)`, `Kali Linux/Linux atacante con rich y Responder`],
    installation: [
      { title: `Instalar Python 3 en el laboratorio Windows 10`, code: null },
      { title: `Instalar dependencias en Windows`, code: `pip install pyautogui\npip install Pillow\npip install opencv-python` },
      { title: `Arrancar los servicios del laboratorio (servidor de correo y Outlook)`, code: `python3 startServicesWindows.py` },
      { title: `Instalar dependencias en la máquina atacante`, code: `pip install rich` },
    ],
    usage: [
      { title: `Enviar el correo con el enlace malicioso file://`, code: `python3 exploitSendEmailOutlook.py` },
      { title: `Instalar y lanzar Responder para capturar hashes NTLMv2`, code: `sudo apt update && sudo apt install responder\nsudo responder -I <NETWORK_INTERFACE> -v` },
      { title: `Alternativa: capturar el hash con el script propio`, code: `python3 captureHashResponder.py` },
    ],
    disclaimer: `Uso exclusivo en entornos de laboratorio controlados y con autorización explícita; la captura de credenciales de terceros sin consentimiento es ilegal.`,
  },

  logsGenerator: {
    overview: `logsGenerator es una herramienta CLI en Python que genera logs de sistema realistas para practicar análisis de logs en Linux con Bash. Permite entrenar habilidades como grep, sed, awk, sort, uniq, cut, tr, head/tail y xargs mediante retos con información fragmentada que hay que reconstruir. Está orientada a estudiantes de ciberseguridad, pentesters, equipos de blue team, administradores de sistemas y profesionales DevOps que quieran mejorar su capacidad de análisis de logs y scripting.`,
    features: [
      `Generación de logs con información fragmentada que el usuario debe reconstruir mediante filtrado de texto`,
      `Niveles de dificultad configurables (Easy, Intermediate, Hard)`,
      `Múltiples tipos de objetivo: FLAGS, IPs, dominios, usuarios, rutas, eventos, puertos y URLs`,
      `Parámetros para controlar el fichero de salida y el número de líneas generadas`,
      `Pensado como laboratorio de práctica para CTFs y entrenamiento de scripting Bash`,
    ],
    requirements: [`Python 3`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/logsGenerator.git\ncd logsGenerator` },
      { title: `Ejecutar el script`, code: `python3 logsGenerator.py` },
    ],
    usage: [
      { title: `Generar logs con parámetros (salida, número de líneas, dificultad y objetivo)`, code: `python3 logsGenerator.py -o logs.txt -n 500 -d hard --target ip` },
      { title: `Analizar los logs generados con herramientas Unix`, code: `grep "ERROR" logs.txt | awk '{print $1}' | sort | uniq -c` },
    ],
    disclaimer: null,
  },

  'hackingChef-page': {
    overview: `hackingChef es una herramienta web para transformación, cifrado y manipulación de datos en tiempo real, con un enfoque similar a CyberChef. Permite codificar/decodificar, calcular hashes y transformar texto directamente desde el navegador, sin instalar nada. Es útil para desarrolladores, estudiantes de ciberseguridad y cualquier persona que necesite manipular datos rápidamente.`,
    features: [
      `Codificación/decodificación en Base64, Hex, URL, Binario y Emoji`,
      `Cálculo de hashes MD5, SHA-1, SHA-256 y SHA-512`,
      `Transformaciones de texto: invertir, ROT13, cambio de mayúsculas/minúsculas, leetspeak`,
      `Conversión entre sistemas numéricos (decimal, binario, hexadecimal)`,
      `Operaciones encadenables con resultados en tiempo real`,
      `Interfaz con tema oscuro y tipografía Hack Nerd Font`,
    ],
    requirements: [`Navegador web moderno (no requiere instalación de dependencias)`],
    installation: [
      { title: `Acceder directamente vía GitHub Pages`, code: null },
      { title: `O clonar el repositorio para uso local`, code: `git clone https://github.com/D1se0/hackingChef-page.git` },
      { title: `Abrir el fichero HTML en el navegador`, code: null },
    ],
    usage: [
      { title: `Abrir la herramienta en el navegador`, code: `https://d1se0.github.io/hackingChef-page/` },
      { title: `Introducir el texto o los datos a transformar`, code: null },
      { title: `Encadenar operaciones (codificar, cifrar, hashear) y ver el resultado en tiempo real`, code: null },
    ],
    disclaimer: null,
  },

  checkPassword: {
    overview: `checkPassword es una utilidad de línea de comandos en Python que comprueba si una contraseña ha aparecido en bases de datos de filtraciones conocidas, usando la API Pwned Passwords de Have I Been Pwned. Protege la privacidad del usuario mediante una técnica de hashing seguro, enviando solo una porción del hash SHA-1 de la contraseña para la comprobación. Es útil para cualquier persona que quiera verificar rápidamente la seguridad de sus contraseñas desde la terminal.`,
    features: [
      `Verificación de contraseñas comprometidas contra la API de Have I Been Pwned`,
      `Solo se envía una porción del hash SHA-1, protegiendo la contraseña real`,
      `Interfaz de terminal clara con avisos y recomendaciones de seguridad`,
      `Instalación de dependencias automatizada vía script`,
    ],
    requirements: [`Python 3`, `Librerías colorama y requests`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/checkPassword.git\ncd checkPassword` },
      { title: `Instalar dependencias`, code: `bash requirements.sh` },
    ],
    usage: [
      { title: `Ejecutar la herramienta`, code: `python3 checkPassword.py` },
      { title: `Introducir la contraseña a comprobar cuando se solicite`, code: null },
      { title: `Revisar el resultado y las recomendaciones mostradas en terminal`, code: null },
    ],
    disclaimer: null,
  },

  passwordGenerator: {
    overview: `passwordGenerator (v1.0) es una herramienta de línea de comandos en Python para generar contraseñas robustas, con longitud configurable, inclusión opcional de caracteres especiales y varios formatos de cifrado (SHA1, SHA256, SHA512, MD5, UNIX shadow y MySQL). Además calcula una estimación del tiempo necesario para crackear la contraseña generada. Está pensada para pentesters, administradores de sistemas y cualquier usuario que necesite generar credenciales seguras desde la terminal.`,
    features: [
      `Generación de contraseñas seguras con longitud configurable (8 caracteres por defecto)`,
      `Inclusión opcional de caracteres especiales`,
      `Cifrado en múltiples formatos: SHA1, SHA256, SHA512, MD5, UNIX shadow y MySQL`,
      `Exportación del resultado a fichero`,
      `Estimación del tiempo de crackeo de la contraseña generada`,
      `Instalación automatizada que copia la herramienta a /usr/bin`,
    ],
    requirements: [`Python 3`, `Librerías argparse, passlib y colorama`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/passwordGenerator.git\ncd passwordGenerator` },
      { title: `Dar permisos de ejecución al script de instalación`, code: `chmod +x requirements.sh` },
      { title: `Ejecutar el script de instalación (instala dependencias y copia la herramienta a /usr/bin)`, code: `./requirements.sh` },
    ],
    usage: [
      { title: `Generar una contraseña simple de 32 caracteres`, code: `passwordGenerator -l 32` },
      { title: `Generar una contraseña de 24 caracteres con caracteres especiales, en formato UNIX shadow y con estimación de tiempo de crackeo`, code: `passwordGenerator -l 24 -s -e shadow -c` },
      { title: `Exportar el resultado a un fichero`, code: `passwordGenerator -l 16 -f salida.txt` },
    ],
    disclaimer: null,
  },

  'passwordgenerator-page': {
    overview: `Versión web del generador de contraseñas seguras, pensada para quienes prefieren crear contraseñas robustas directamente desde el navegador sin instalar nada. Permite personalizar la longitud y excluir determinados caracteres, e incluye modo claro/oscuro con persistencia de preferencias. Útil para usuarios no técnicos que buscan una forma rápida y visual de generar contraseñas seguras.`,
    features: [
      `Generación de contraseñas aleatorias con configuración de seguridad`,
      `Personalización de longitud y exclusión de caracteres`,
      `Cambio de tema claro/oscuro con persistencia en almacenamiento local`,
      `Botón para mostrar/ocultar la contraseña generada`,
      `Interfaz simple basada en HTML5, CSS3 y JavaScript`,
    ],
    requirements: [`Navegador web moderno`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/passwordgenerator-page.git` },
      { title: `Abrir el fichero index.html en el navegador`, code: null },
    ],
    usage: [
      { title: `Configurar la longitud y los caracteres a excluir`, code: null },
      { title: `Generar la contraseña`, code: null },
      { title: `Mostrar/ocultar la contraseña y cambiar el tema si se desea`, code: null },
    ],
    disclaimer: null,
  },

  Aplicacion_Gestor_de_contrasenas_Windows: {
    overview: `Gestor de contraseñas 100% local orientado a la seguridad y la privacidad, sin servidores externos ni servicios cloud. Cifra los datos con AES-256-GCM y deriva las claves con PBKDF2, almacenándolos en una base de datos SQLite local; la contraseña maestra nunca se guarda y la clave derivada solo vive en RAM mientras la bóveda está abierta. Está dirigido a usuarios que valoran la privacidad y prefieren gestionar sus credenciales sin depender de la nube, disponible en modo Web local y como aplicación de escritorio (Tauri) para Windows.`,
    features: [
      `Cifrado fuerte AES-256-GCM con derivación de claves PBKDF2 y salts únicos`,
      `Base de datos SQLite local, sin datos sensibles en texto plano`,
      `La contraseña maestra nunca se almacena; la clave derivada solo reside en RAM`,
      `Sin backend remoto, sin APIs externas ni tracking`,
      `Modo Web local (recomendado) y modo aplicación de escritorio con Tauri`,
      `Interfaz con estética glassmorphism y animaciones con Framer Motion`,
    ],
    requirements: [`Node.js 20.20.0 (recomendado)`, `pnpm`, `Rust (para el modo escritorio con Tauri)`, `Visual Studio Build Tools C++ y Windows SDK (para el modo escritorio)`],
    installation: [
      { title: `Clonar el repositorio`, code: `git clone https://github.com/D1se0/Aplicacion_Gestor_de_contrasenas_Windows.git` },
      { title: `Instalación automática de dependencias`, code: `run.bat` },
    ],
    usage: [
      { title: `Modo Web: iniciar en modo desarrollo`, code: `pnpm dev` },
      { title: `Abrir la aplicación en el navegador`, code: `http://127.0.0.1:5173` },
      { title: `Modo Escritorio con Tauri (solo estable en modo dev/debug)`, code: `pnpm tauri dev` },
    ],
    disclaimer: null,
  },

  'PHPDetector-page': {
    overview: `PHP Security Scanner es una herramienta web interactiva para analizar funciones PHP potencialmente peligrosas, ya sea pegadas manualmente o extraídas del listado disable_functions de phpinfo(). Clasifica las funciones detectadas como Seguras o Peligrosas y funciona íntegramente en el cliente, sin ejecutar código en ningún servidor. Está pensada para auditorías de seguridad y fines educativos sobre funciones PHP de riesgo.`,
    features: [
      `Análisis de funciones PHP peligrosas pegadas manualmente o desde disable_functions`,
      `Clasificación de funciones como Seguras o Peligrosas con badges visuales`,
      `Tabla paginada con referencia completa de funciones PHP y ejemplos de uso`,
      `Análisis 100% en el cliente, sin ejecución de código en servidor`,
      `Diseño responsive para móvil y escritorio`,
      `Función de copiar al portapapeles con notificaciones toast`,
    ],
    requirements: [`Navegador web moderno`],
    installation: [
      { title: `Acceder directamente vía GitHub Pages`, code: null },
      { title: `O clonar el repositorio para uso local`, code: `git clone https://github.com/D1se0/PHPDetector-page.git` },
      { title: `Abrir el fichero HTML en el navegador`, code: null },
    ],
    usage: [
      { title: `Abrir la herramienta en el navegador`, code: `https://d1se0.github.io/PHPDetector-page/` },
      { title: `Pegar el código PHP o el listado de disable_functions`, code: null },
      { title: `Revisar la clasificación de funciones como Seguras o Peligrosas`, code: null },
    ],
    disclaimer: null,
  },

  Command_Vault: {
    overview: `Command Vault es una aplicación web local para almacenar, organizar y recuperar comandos técnicos de hacking ético, administración de sistemas, automatización y uso diario de terminal. Organiza los comandos en Workspaces, Secciones y Comandos, con resaltado de sintaxis automático y previsualización en tiempo real. Está pensada como bóveda personal de comandos para pentesters y administradores de sistemas, y funciona completamente en local sin enviar datos a servicios externos.`,
    features: [
      `Organización jerárquica en Workspaces → Secciones → Comandos`,
      `Resaltado de sintaxis automático y previsualización de código en tiempo real`,
      `Persistencia de datos en local, sin dependencias externas`,
      `Frontend en React, TypeScript y Vite con backend en Node.js`,
      `Instalación automatizada mediante scripts .bat`,
      `Soporte para despliegue en Raspberry Pi/Linux vía Docker y Portainer`,
    ],
    requirements: [`Node.js 20.20.0`, `Windows (instalación vía .bat) o Docker (despliegue en Linux/Raspberry Pi)`],
    installation: [
      { title: `Descargar el .zip portable del proyecto`, code: null },
      { title: `Instalar dependencias (comprueba Node.js v20.20.0)`, code: `install.bat` },
      { title: `Iniciar backend y frontend`, code: `run.bat` },
    ],
    usage: [
      { title: `Abrir la aplicación en el navegador (localhost)`, code: null },
      { title: `Crear un Workspace`, code: null },
      { title: `Añadir Secciones y Comandos dentro del workspace`, code: null },
      { title: `Desplegar en Raspberry Pi/Linux con Docker (opcional)`, code: `docker compose up -d` },
    ],
    disclaimer: null,
  },

  'chmod-calculator': {
    overview: `Calculadora web estática que traduce permisos de Linux entre los formatos octal, simbólico y el comando chmod real, incluyendo soporte para bits especiales (SUID, SGID, Sticky Bit). Está pensada para administradores de sistemas, sysadmins, perfiles DevOps y estudiantes de ciberseguridad que necesiten visualizar o generar permisos rápidamente sin memorizar la sintaxis de chmod.`,
    features: [
      `Conversión automática entre permisos octales (755, 644...) y simbólicos (rwxr-xr-x)`,
      `Generación del comando chmod real, tanto en notación numérica como simbólica`,
      `Soporte para bits especiales: SUID (4000), SGID (2000) y Sticky Bit (1000)`,
      `Copia de resultados al portapapeles con un clic`,
      `Diseño responsive (móvil, tablet, escritorio) con estética oscura tipo terminal`,
      `100% HTML, CSS y JavaScript vanilla, sin frameworks ni dependencias`,
    ],
    requirements: [`Navegador moderno`],
    installation: [
      { title: `Clona el repositorio`, code: `git clone https://github.com/D1se0/chmod-calculator.git` },
      { title: `Abre el archivo index.html en tu navegador`, code: null },
    ],
    usage: [
      { title: `Configura bits especiales, usuario, grupo y otros en el panel izquierdo`, code: null },
      { title: `Consulta el resultado octal, simbólico y los comandos chmod generados`, code: `chmod 755 archivo` },
      { title: `Copia el resultado que necesites al portapapeles`, code: null },
    ],
    disclaimer: null,
  },

  PSHelp: {
    overview: `PSHelp es un asistente de línea de comandos escrito en C# que ayuda a aprender, recordar y explorar comandos de PowerShell mediante preguntas en lenguaje natural. Está orientado a administradores de sistemas, estudiantes de IT y cualquier persona que quiera dominar PowerShell con una experiencia guiada e interactiva en lugar de memorizar sintaxis.`,
    features: [
      `Preguntas en lenguaje natural ("¿Cómo ver los procesos que están corriendo?") que devuelven comandos relevantes`,
      `Diccionario de sinónimos que mapea expresiones comunes a categorías internas (red, procesos, sistema, etc.)`,
      `Autocompletado con TAB y exploración por categorías mediante el comando help`,
      `Historial de preguntas de la sesión, guardado de forma persistente en un archivo de texto`,
      `Nueve categorías de comandos: archivos, carpetas, procesos, red, usuarios, sistema, seguridad, paquetes y scripts`,
      `Interfaz de consola con colores y encabezado amigable`,
    ],
    requirements: [`.NET 6.0 o superior`, `Consola compatible con colores ANSI (se recomienda Windows Terminal)`],
    installation: [
      { title: `Clona el repositorio`, code: `git clone https://github.com/D1se0/PSHelp.git` },
      { title: `Compila el proyecto con .NET`, code: `dotnet build` },
      { title: `Ejecuta el EXE generado`, code: null },
    ],
    usage: [
      { title: `Escribe tu pregunta en lenguaje natural`, code: `Tú 👉 cómo copiar un archivo` },
      { title: `Explora los comandos de una categoría concreta`, code: `help <categoría>` },
      { title: `Consulta todos los sinónimos registrados`, code: `help keys` },
      { title: `Revisa tu historial de preguntas de la sesión`, code: `historial` },
    ],
    disclaimer: null,
  },

  calculadora_vlsm: {
    overview: `Calculadora web interactiva de VLSM (Variable Length Subnet Masking) pensada para ingenieros de redes y estudiantes que necesitan segmentar redes IP en subredes de distinto tamaño de forma rápida y visual. Permite introducir una IP base, definir varias subredes con el número de hosts deseado y obtener automáticamente todos los cálculos de red, broadcast y hosts disponibles.`,
    features: [
      `Cálculo automático de dirección de red, broadcast, primer/último host, hosts utilizables y sobrantes`,
      `Representación binaria coloreada de IP, máscara y broadcast`,
      `Identificación de tipo de red (pública/privada) y clase de IP (A, B, C)`,
      `Tabla de referencia CIDR con todas las subredes calculadas y selector para explorar hosts individuales`,
      `Secciones desplegables con animaciones suaves y scroll automático en tablas largas`,
      `Estilo dark mode moderno con Hack Nerd Font, pensado para GitHub Pages`,
    ],
    requirements: [`Navegador moderno`],
    installation: [
      { title: `Clona el repositorio`, code: `git clone https://github.com/D1se0/calculadora_vlsm.git` },
      { title: `Abre el archivo index.html en tu navegador`, code: null },
    ],
    usage: [
      { title: `Introduce la IP base y define las subredes con el número de hosts deseado`, code: null },
      { title: `Consulta la tabla de referencia CIDR y la representación binaria generadas`, code: null },
      { title: `Explora los hosts individuales de cada subred con el selector correspondiente`, code: null },
    ],
    disclaimer: null,
  },

  calculadora_subnetting: {
    overview: `Calculadora de subnetting web e interactiva construida en HTML, CSS y JavaScript, con un diseño moderno en modo oscuro. Permite calcular subredes, hosts, broadcast, máscaras y su representación binaria a partir de una IP y un CIDR o máscara, siendo útil tanto para estudiantes como para profesionales de redes que necesitan resultados rápidos y claros.`,
    features: [
      `Validación de IP y CIDR en tiempo real`,
      `Resultados detallados: dirección de red, máscara, hosts, broadcast, wildcard, primer y último host`,
      `Representación binaria de IP, máscara, red y broadcast`,
      `Tabla de referencia CIDR real, paginada y colapsable`,
      `Badges de clase de IP, tipo de red y CIDR`,
      `Copia de resultados con confirmación mediante un toast`,
    ],
    requirements: [`Navegador moderno`],
    installation: [
      { title: `Clona el repositorio`, code: `git clone https://github.com/D1se0/calculadora_subnetting.git` },
      { title: `Abre el proyecto desde GitHub Pages o localmente`, code: null },
    ],
    usage: [
      { title: `Introduce una IP con CIDR o una IP con máscara`, code: `192.168.1.0/24  o  192.168.1.0 255.255.255.0` },
      { title: `Consulta los badges de clase, tipo de red y CIDR, y los resultados por columnas`, code: null },
      { title: `Copia cualquier resultado haciendo clic en el icono de copiar`, code: null },
    ],
    disclaimer: null,
  },

  'sql-generator': {
    overview: `Herramienta web interactiva para generar tablas SQL, datos CSV y diagramas entidad-relación o relacionales directamente desde el navegador, usando JavaScript, Bootstrap 5 y Mermaid. Está dirigida a desarrolladores y estudiantes de bases de datos que quieran prototipar esquemas, generar datos de prueba y documentar modelos de forma visual sin instalar nada.`,
    features: [
      `Generación automática de sentencias INSERT y CREATE TABLE según las columnas definidas`,
      `Amplio soporte de tipos de datos (INT, FLOAT, VARCHAR, EMAIL, DATE, BOOLEAN, JSON, UUID...) y de PK/FK/UNIQUE/NOT NULL`,
      `Generación y descarga de datos CSV compatibles con el esquema definido`,
      `Diagramas E/R y relacionales interactivos mediante Mermaid, con alternancia entre modo gráfico y modo texto`,
      `Descarga de diagramas en formato SVG para documentación`,
      `Interfaz moderna y responsive basada en Bootstrap 5 con estética oscura y Hack font`,
    ],
    requirements: [`Navegador moderno con soporte de JavaScript ES6+`],
    installation: [
      { title: `Clona el repositorio`, code: `git clone https://github.com/D1se0/sql-generator.git\ncd sql-generator` },
      { title: `Abre index.html en tu navegador`, code: null },
    ],
    usage: [
      { title: `Selecciona el modo SQL, E/R o Relacional en el menú`, code: null },
      { title: `Completa los campos: columnas y tipos para SQL/CSV, o el texto de clases/relaciones para E/R`, code: null },
      { title: `Haz clic en Generar o Generar Modelo Relacional`, code: null },
      { title: `Descarga los resultados en CSV o el diagrama en SVG`, code: null },
    ],
    disclaimer: null,
  },

  toolsKitHacking: {
    overview: `Recopilación curada, presentada como página web, de las herramientas más utilizadas en auditoría de seguridad, análisis forense, OSINT, explotación de vulnerabilidades y pentesting. Está dirigida a profesionales de ciberseguridad, hackers éticos y entusiastas que quieran tener de un vistazo las herramientas de referencia de cada categoría, con su documentación y ejemplos de uso.`,
    features: [
      `Escaneo y reconocimiento: Nmap, Masscan, Recon-ng`,
      `Explotación de vulnerabilidades: Metasploit, SQLmap, ExploitDB`,
      `Ingeniería inversa: Radare2, Ghidra, IDA Free`,
      `Ataques de fuerza bruta: Hydra, John the Ripper, Hashcat`,
      `OSINT e inteligencia: theHarvester, Maltego, SpiderFoot`,
      `Redes inalámbricas, análisis forense (Autopsy, Volatility, Wireshark) y herramientas de anonimato (Tor, ProxyChains, Tails, Whonix)`,
    ],
    requirements: [`Navegador moderno`, `Permisos de superusuario para algunas herramientas listadas`],
    installation: [
      { title: `Clona el repositorio`, code: `git clone https://github.com/D1se0/toolsKitHacking.git\ncd toolsKitHacking` },
      { title: `Abre la página web del listado`, code: null },
    ],
    usage: [
      { title: `Consulta cada herramienta y su documentación en el archivo info.txt correspondiente`, code: null },
      { title: `Ejecuta las herramientas externas con sudo cuando sea necesario`, code: null },
    ],
    disclaimer: null,
  },

  hackingtools: {
    overview: `Directorio web de referencia que centraliza herramientas de hacking ético organizadas por etiquetas y categorías, con selector de tema claro/oscuro y diseño responsive. Está pensado para estudiantes de ciberseguridad, competidores de CTF y profesionales de seguridad que quieran localizar rápidamente la herramienta adecuada junto con sus instrucciones de descarga y uso.`,
    features: [
      `Herramientas categorizadas y etiquetadas para una navegación rápida`,
      `Selector dinámico de tema claro/oscuro`,
      `Diseño totalmente responsive para escritorio y móvil`,
      `Cada herramienta incluye instrucciones detalladas y opciones de descarga`,
      `Categorías dedicadas a CTF: extracción de flags, scripting automatizado y gestión de tareas`,
      `Actualizaciones regulares del catálogo de herramientas`,
    ],
    requirements: [`Navegador moderno`],
    installation: [
      { title: `Clona el repositorio`, code: `git clone https://github.com/D1se0/hackingtools.git` },
      { title: `Abre la página y explora las categorías`, code: null },
    ],
    usage: [
      { title: `Explora las herramientas por categorías y etiquetas`, code: null },
      { title: `Cambia entre tema claro y oscuro con el botón superior derecho`, code: null },
      { title: `Descarga y ejecuta cada herramienta siguiendo sus instrucciones específicas`, code: null },
    ],
    disclaimer: null,
  },
}
