// Catálogo curado de repositorios públicos de D1se0 (github.com/D1se0)
// team: 'red' | 'blue'   category: subcategoría para filtrado   icon: id del icono SVG

export const RED_CATEGORIES = [
  { id: 'exploit', label: 'Explotación & CVEs' },
  { id: 'malware', label: 'Malware & C2' },
  { id: 'evasion', label: 'Evasión & Ofuscación' },
  { id: 'postexploit', label: 'Post-Explotación' },
  { id: 'netattack', label: 'Ataques de Red' },
  { id: 'wireless', label: 'Wireless & Hardware' },
  { id: 'bruteforce', label: 'Fuerza Bruta' },
  { id: 'recon', label: 'Recon & Escaneo' },
  { id: 'webattack', label: 'Ataques Web' },
]

export const BLUE_CATEGORIES = [
  { id: 'forensics', label: 'Forense & Logs' },
  { id: 'passec', label: 'Seguridad de Contraseñas' },
  { id: 'audit', label: 'Auditoría de Código' },
  { id: 'hardening', label: 'Hardening & SysAdmin' },
  { id: 'netdefense', label: 'Redes & Cálculo' },
  { id: 'reference', label: 'Recursos & Referencia' },
]

export const REPOS = [
  // ---------------- RED TEAM ----------------
  {
    name: 'wraith', team: 'red', category: 'webattack', icon: 'proxy', featured: true,
    desc: 'Toolkit ofensivo web todo-en-uno: proxy interceptor, asistente IA, escáner pasivo, fuzzer, testing de condiciones de carrera y OOB. La alternativa oscura a Burp.',
    lang: 'TypeScript', stars: 1, url: 'https://github.com/D1se0/wraith',
  },
  {
    name: 'Discord-RAT-Windows', team: 'red', category: 'malware', icon: 'bot',
    desc: 'RAT avanzado que ejecuta comandos remotos desde un servidor de Discord, con automatización de configuración y compilación a ejecutable.',
    lang: 'Python', stars: 21, url: 'https://github.com/D1se0/Discord-RAT-Windows',
  },
  {
    name: 'c2-panel-malware-education', team: 'red', category: 'malware', icon: 'satellite',
    desc: 'Panel C2 para Red Team con dashboard web: monitoriza agentes, captura keylogs y tráfico HTTP, valida dominios en Linux y Windows.',
    lang: 'Python', stars: 2, url: 'https://github.com/D1se0/c2-panel-malware-education',
  },
  {
    name: 'RansomwareLocker_Education', team: 'red', category: 'malware', icon: 'skull',
    desc: 'Herramienta educativa que simula un ransomware, mostrando cifrado y descifrado de archivos en un entorno controlado y seguro.',
    lang: 'C#', stars: 1, url: 'https://github.com/D1se0/RansomwareLocker_Education',
  },
  {
    name: 'keylogger_script', team: 'red', category: 'malware', icon: 'keyboard',
    desc: 'Scripts para capturar entrada de teclado en Linux y Windows, demostrando la implementación de un keylogger básico.',
    lang: 'Python', stars: 2, url: 'https://github.com/D1se0/keylogger_script',
  },
  {
    name: 'AMSI-Bypass-Generator', team: 'red', category: 'evasion', icon: 'ghost', featured: true,
    desc: 'Generador de técnicas para evadir AMSI en Windows: crea código polimórfico sin firmas detectables por Windows Defender.',
    lang: 'JavaScript', stars: 8, url: 'https://github.com/D1se0/AMSI-Bypass-Generator',
  },
  {
    name: 'EnvObfuscatorPS', team: 'red', category: 'evasion', icon: 'shuffle',
    desc: 'Ofuscador de comandos PowerShell que usa variables de entorno de Windows para ocultar código y evadir detección.',
    lang: 'Python', stars: 3, url: 'https://github.com/D1se0/EnvObfuscatorPS',
  },
  {
    name: 'auto_shell', team: 'red', category: 'postexploit', icon: 'terminal',
    desc: 'AutoShell — automatiza listener, mejora la TTY automáticamente y ofrece una terminal web con PTY local para pentesting.',
    lang: 'Python', stars: 2, url: 'https://github.com/D1se0/auto_shell',
  },
  {
    name: 'revShell', team: 'red', category: 'postexploit', icon: 'link',
    desc: 'Generador versátil de reverse shells en múltiples lenguajes de programación, con distintos métodos según el entorno.',
    lang: 'Python', stars: 3, url: 'https://github.com/D1se0/revShell',
  },
  {
    name: 'revShellsGenerator-page', team: 'red', category: 'postexploit', icon: 'link',
    desc: 'Generador web de reverse shells con sustitución automática de IP/puerto, interfaz tipo terminal y copiado rápido de payloads.',
    lang: 'HTML', stars: 1, url: 'https://github.com/D1se0/revShellsGenerator-page',
  },
  {
    name: 'WinFind', team: 'red', category: 'postexploit', icon: 'crosshair',
    desc: 'Herramienta C# para auditoría post-explotación en Windows: detecta permisos, credenciales y vectores de escalada de privilegios.',
    lang: 'C#', stars: 1, url: 'https://github.com/D1se0/winFind',
  },
  {
    name: 'InterceptPassResetWindows', team: 'red', category: 'postexploit', icon: 'syringe',
    desc: 'Intercepta cambios de contraseña en Windows mediante Password Filters nativos, para auditoría y pruebas autorizadas.',
    lang: 'C++', stars: 1, url: 'https://github.com/D1se0/InterceptPassResetWindows',
  },
  {
    name: 'SpoofingApp', team: 'red', category: 'netattack', icon: 'radar', featured: true,
    desc: 'GUI para ARP y DNS spoofing en redes locales, con escaneo de hosts y bloqueo de Internet para pentesting ético.',
    lang: 'Python', stars: 4, url: 'https://github.com/D1se0/SpoofingApp',
  },
  {
    name: 'internetNullHacker', team: 'red', category: 'netattack', icon: 'radar',
    desc: 'Escáner y spoofer ARP en Bash para cortar o interceptar el tráfico de dispositivos en una red local.',
    lang: 'Shell', stars: 3, url: 'https://github.com/D1se0/internetNullHacker',
  },
  {
    name: 'advancedInternetNullHacker', team: 'red', category: 'netattack', icon: 'radar',
    desc: 'Versión avanzada del ARP spoofer: escaneo y monitorización de dispositivos con más control sobre la red objetivo.',
    lang: 'Python', stars: 2, url: 'https://github.com/D1se0/advancedInternetNullHacker',
  },
  {
    name: 'dynamicIPTool', team: 'red', category: 'netattack', icon: 'shuffle',
    desc: 'Rota la IP pública automáticamente usando Tor, útil para pruebas de anonimato y evasión de bloqueos por IP.',
    lang: 'Shell', stars: 4, url: 'https://github.com/D1se0/dynamicIPTool',
  },
  {
    name: 'WiFiHackWPA2-3', team: 'red', category: 'wireless', icon: 'wifi', featured: true,
    desc: 'Auditoría WiFi en Rust para Windows: extrae contraseñas WPA2/WPA3 almacenadas mediante la API nativa WLAN.',
    lang: 'Rust', stars: 2, url: 'https://github.com/D1se0/WiFiHackWPA2-3',
  },
  {
    name: 'XIAO-WiFi-Analyzer', team: 'red', category: 'wireless', icon: 'cpu',
    desc: 'Analizador WiFi sobre microcontrolador XIAO: escaneo de redes cercanas y análisis de señal en tiempo real.',
    lang: 'C', stars: 0, url: 'https://github.com/D1se0/XIAO-WiFi-Analyzer',
  },
  {
    name: 'DetectorAPFisico-Gadget-Hacking', team: 'red', category: 'wireless', icon: 'cpu',
    desc: 'Detector WiFi físico con ESP32 y pantalla táctil ILI9341: escanea redes, muestra señal y permite rastrear puntos de acceso.',
    lang: 'C++', stars: 1, url: 'https://github.com/D1se0/DetectorAPFisico-Gadget-Hacking',
  },
  {
    name: 'superTool', team: 'red', category: 'recon', icon: 'radar', featured: true,
    desc: 'Escaneos de red avanzados y búsqueda de vulnerabilidades combinando nmap y searchsploit en una sola herramienta.',
    lang: 'Python', stars: 6, url: 'https://github.com/D1se0/superTool',
  },
  {
    name: 'portScan', team: 'red', category: 'recon', icon: 'radar',
    desc: 'Escáner de puertos en Python para auditoría de red: detecta puertos abiertos, cerrados y filtrados con detalle de servicios.',
    lang: 'Python', stars: 1, url: 'https://github.com/D1se0/portScan',
  },
  {
    name: 'directorybrute', team: 'red', category: 'webattack', icon: 'folderSearch',
    desc: 'Fuerza bruta de directorios y archivos ocultos en servidores web mediante peticiones HTTP masivas.',
    lang: 'Python', stars: 3, url: 'https://github.com/D1se0/directorybrute',
  },
  {
    name: 'enumPluginsWordpress', team: 'red', category: 'webattack', icon: 'folderSearch',
    desc: 'Enumeración de plugins de WordPress instalados en un objetivo, para identificar superficie de ataque conocida.',
    lang: 'Python', stars: 2, url: 'https://github.com/D1se0/enumPluginsWordpress',
  },
  {
    name: 'suBruteforce', team: 'red', category: 'bruteforce', icon: 'key',
    desc: 'Fuerza bruta de combinaciones usuario/contraseña sobre el comando `su` en sistemas Unix.',
    lang: 'Python', stars: 2, url: 'https://github.com/D1se0/suBruteforce',
  },
  {
    name: 'cerbero', team: 'red', category: 'bruteforce', icon: 'key',
    desc: 'Ataques de fuerza bruta contra servicios SSH y FTP para auditorías de seguridad y tests de resistencia de credenciales.',
    lang: 'Python', stars: 3, url: 'https://github.com/D1se0/cerbero',
  },
  {
    name: 'brutePSWA', team: 'red', category: 'bruteforce', icon: 'key',
    desc: 'Fuerza bruta sobre PowerShell Web Access: detecta credenciales válidas, sesiones excedidas y accesos restringidos.',
    lang: 'Python', stars: 1, url: 'https://github.com/D1se0/brutePSWA',
  },
  {
    name: 'crackerPass', team: 'red', category: 'bruteforce', icon: 'key',
    desc: 'Crackeo de contraseñas mediante diccionarios y verificación de hashes en múltiples algoritmos comunes.',
    lang: 'Python', stars: 2, url: 'https://github.com/D1se0/crackerPass',
  },
  {
    name: 'Eloquia-DLL-Injection-Exploit-HTB', team: 'red', category: 'exploit', icon: 'syringe',
    desc: 'Automatiza la inyección de DLL en la máquina Eloquia de HTB para obtener shell interactiva vía carga dinámica de SQLite.',
    lang: 'Python', stars: 2, url: 'https://github.com/D1se0/Eloquia-DLL-Injection-Exploit-HTB',
  },
  {
    name: 'CVE-2024-23897 · Jenkins', team: 'red', category: 'exploit', icon: 'bug', featured: true,
    desc: 'Laboratorio dockerizado de la vulnerabilidad CVE-2024-23897 en Jenkins, con auto-montaje para explotación práctica.',
    lang: 'Shell', stars: 4, url: 'https://github.com/D1se0/CVE-2024-23897-Vulnerabilidad-Jenkins',
  },
  {
    name: 'CVE-2024-10924 · WP MFA Bypass', team: 'red', category: 'exploit', icon: 'bug',
    desc: 'Laboratorio de bypass de MFA en el plugin "Really Simple Security" de WordPress (CVE-2024-10924).',
    lang: 'Python', stars: 4, url: 'https://github.com/D1se0/CVE-2024-10924-Bypass-MFA-Wordpress-LAB',
  },
  {
    name: 'CVE-2024-51428 · ZoneMinder', team: 'red', category: 'exploit', icon: 'bug',
    desc: 'Wrapper en Python que automatiza la explotación de una Blind SQL Injection en ZoneMinder usando sqlmap.',
    lang: 'Python', stars: 1, url: 'https://github.com/D1se0/CVE-2024-51428-PoC',
  },
  {
    name: 'CVE-2024-21413 · Outlook', team: 'red', category: 'exploit', icon: 'bug',
    desc: 'Laboratorio práctico de la vulnerabilidad crítica de Microsoft Outlook CVE-2024-21413.',
    lang: 'Python', stars: 4, url: 'https://github.com/D1se0/CVE-2024-21413-Vulnerabilidad-Outlook-LAB',
  },

  // ---------------- BLUE TEAM ----------------
  {
    name: 'logsGenerator', team: 'blue', category: 'forensics', icon: 'fileSearch', featured: true,
    desc: 'Genera logs realistas para practicar análisis en Linux y Bash (grep, sed, awk, sort, tr): laboratorio CTF de filtrado forense.',
    lang: 'Python', stars: 0, url: 'https://github.com/D1se0/logsGenerator',
  },
  {
    name: 'hackingChef-page', team: 'blue', category: 'forensics', icon: 'flask',
    desc: 'Herramienta web para cifrado, codificación y transformación de texto en tiempo real, encadenando operaciones tipo CyberChef.',
    lang: 'JavaScript', stars: 1, url: 'https://github.com/D1se0/hackingChef-page',
  },
  {
    name: 'checkPassword', team: 'blue', category: 'passec', icon: 'fingerprint', featured: true,
    desc: 'Verifica si una contraseña ha sido comprometida usando la API de Have I Been Pwned, de forma segura y eficiente.',
    lang: 'Python', stars: 2, url: 'https://github.com/D1se0/checkPassword',
  },
  {
    name: 'passwordGenerator', team: 'blue', category: 'passec', icon: 'lock',
    desc: 'Generador de contraseñas robustas en CLI, con opciones de cifrado y estimación del tiempo necesario para romperlas.',
    lang: 'Python', stars: 4, url: 'https://github.com/D1se0/passwordGenerator',
  },
  {
    name: 'passwordgenerator-page', team: 'blue', category: 'passec', icon: 'lock',
    desc: 'Versión web del generador de contraseñas seguras, con control total sobre caracteres y longitud.',
    lang: 'CSS', stars: 1, url: 'https://github.com/D1se0/passwordgenerator-page',
  },
  {
    name: 'Gestor de Contraseñas Windows', team: 'blue', category: 'passec', icon: 'shieldLock', featured: true,
    desc: 'Gestor de contraseñas 100% local con cifrado AES-256-GCM y SQLite, sin servidores externos. Web y Desktop (Tauri).',
    lang: 'TypeScript', stars: 2, url: 'https://github.com/D1se0/Aplicacion_Gestor_de_contrasenas_Windows',
  },
  {
    name: 'PHPDetector-page', team: 'blue', category: 'audit', icon: 'shieldCheck', featured: true,
    desc: 'Analiza funciones PHP peligrosas en código y `disable_functions`, clasificándolas como seguras o riesgosas para auditorías.',
    lang: 'HTML', stars: 1, url: 'https://github.com/D1se0/PHPDetector-page',
  },
  {
    name: 'Command_Vault', team: 'blue', category: 'hardening', icon: 'vault',
    desc: 'Almacén local de comandos para pentesting y administración de sistemas: organiza y reutiliza comandos rápidamente.',
    lang: 'TypeScript', stars: 1, url: 'https://github.com/D1se0/Command_Vault',
  },
  {
    name: 'chmod-calculator', team: 'blue', category: 'hardening', icon: 'shieldCheck',
    desc: 'Calculadora web de permisos Linux (octal y simbólico) con soporte SUID, SGID y Sticky Bit para hardening de sistemas.',
    lang: 'HTML', stars: 1, url: 'https://github.com/D1se0/chmod-calculator',
  },
  {
    name: 'PSHelp', team: 'blue', category: 'hardening', icon: 'terminal',
    desc: 'Asistente interactivo en consola para aprender y recordar comandos PowerShell, ideal para administradores de sistemas.',
    lang: 'C#', stars: 1, url: 'https://github.com/D1se0/PSHelp',
  },
  {
    name: 'calculadora_vlsm', team: 'blue', category: 'netdefense', icon: 'network',
    desc: 'Calculadora VLSM interactiva: subredes, hosts, binario y clases IP con visualización profesional para diseño de redes.',
    lang: 'HTML', stars: 1, url: 'https://github.com/D1se0/calculadora_vlsm',
  },
  {
    name: 'calculadora_subnetting', team: 'blue', category: 'netdefense', icon: 'network',
    desc: 'Calculadora de Subnetting moderna: IP, CIDR, máscara, hosts y representación binaria para administración de redes.',
    lang: 'HTML', stars: 1, url: 'https://github.com/D1se0/calculadora_subnetting',
  },
  {
    name: 'sql-generator', team: 'blue', category: 'netdefense', icon: 'database',
    desc: 'Generador de SQL, CSV y diagramas E/R en el navegador con Mermaid, útil para modelar y documentar infraestructuras de datos.',
    lang: 'JavaScript', stars: 1, url: 'https://github.com/D1se0/sql-generator',
  },
  {
    name: 'toolsKitHacking', team: 'blue', category: 'reference', icon: 'library',
    desc: 'Compilado curado de las herramientas más usadas en pentesting, auditoría y ciberseguridad, organizado por categorías.',
    lang: 'HTML', stars: 7, url: 'https://github.com/D1se0/toolsKitHacking',
  },
  {
    name: 'hackingtools', team: 'blue', category: 'reference', icon: 'library',
    desc: 'Directorio de referencia de herramientas de hacking ético organizadas por etiquetas, pensado para CTFs y auditorías.',
    lang: 'HTML', stars: 5, url: 'https://github.com/D1se0/hackingtools',
  },
]

export const STATS = {
  totalRepos: REPOS.length,
  red: REPOS.filter((r) => r.team === 'red').length,
  blue: REPOS.filter((r) => r.team === 'blue').length,
}
