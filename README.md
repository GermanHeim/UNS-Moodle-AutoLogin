<div align="center">
  <a href="https://github.com/GermanHeim/UNS-Moodle-AutoLogin">
    <img src="icon/icon128.png" alt="Logo" width="100" height="100">
  </a>

  <h1 align="center">UNS Moodle AutoLogin</h1>

  <p align="center">
    Una extensión de Chromium que permite guardar las credenciales de Moodle de la UNS e iniciar sesión automáticamente
    <br />
    <a href="https://github.com/GermanHeim/UNS-Moodle-AutoLogin/issues">Reportar un bug</a>
  </p>
</div>


### Caracteristicas

- Guarda tu nombre de usuario y contraseña de Moodle usando `chrome.storage`.
- Autocompleta las credenciales guardadas en la página de inicio de sesión de Moodle.
- Feedback visuales para el guardado exitoso de credenciales.

### Instalación

1. Clone o descargue este repositorio en su máquina local.
   Si no tenes git instalado, podes hacer click en "codigo" y "Descargar ZIP". Este ZIP necesita ser descomprimido para poder instalar la extensión.
```bash
git clone https://github.com/GermanHeim/UNS-Moodle-AutoLogin
```


2. Abri Google Chrome y entrá a [chrome://extensions/](chrome://extensions/) (O su defencto en otro navegador basado en Chromium)
3. Habilite el "Modo desarrollador" usando el switch en la esquina superior derecha.
4. Haga clic en el botón "Cargar desempaquetado" ("Load Unpacked") y seleccione la carpeta que contiene la extensión.
5. El icono de la extensión debería aparecer en la barra de herramientas de tu navegador.

### Uso
1. Una vez instalada la extensión, es necesario abrir la misma y completar los campos de usuario y contraseña.
2. Una vez completados los campos, hacer click en "Guardar credenciales".
3. Luego de esto, la extensión debería funcionar automáticamente al ingresar a la página de [inicio de sesión de Moodle](https://moodle.uns.edu.ar/moodle).

### Disclaimer y consideraciones de seguridad
**Almacenamiento de contraseñas:** tenga cuidado al almacenar contraseñas, incluso de manera segura. El almacenamiento de información confidencial en chrome.storage aún puede presentar riesgos. 
Actualmente, no existen soluciones de inicio de sesión único (SSO) proporcionadas por la universidad, por lo cual no pueden considerarse alternativas.

### Contribuciones y bugs
Las contribuciones y comentarios son bienvenidos. Si se encuentra algún problema o existen sugerencias para mejorar, abrí un issue en el repo.

### Licencia
Este proyecto se encuentra bajo la [Licencia MIT](./LICENSE).
