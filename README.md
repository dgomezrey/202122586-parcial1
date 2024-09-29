# Daniel Gómez Rey - 202122586
# Parcial 1 - Programación con Tecnologías Web
## Introducción
Repositorio público para el desarrollo del primer parcial de la asignatura de Programación con Tecnologías Web.
## Instalación
### Prerrequisitos
- REACT (Bootstrap, Scripts, Router Dom, etc)
- npm
### Paso a paso
1. Clonar el repositorio en la máquina local:
   ```bash
   git clone https://github.com/dgomezrey/202122586-parcial1.git
   ```
2. Navegar al directorio del proyecto:
   ```bash
   cd parcial1
   ```
3. Instalar las dependencias del proyecto:
   ```bash
   npm install
   ```
4. Iniciar la aplicación:
   ```bash
   npm start
   ```
## Uso
Al iniciar la aplicación en `http://localhost:3000/`, se accede primero a la página de **Login**. Aquí el usuario debe ingresar su correo electrónico y contraseña para acceder a la plataforma. Se valida el formato de ambas, y el usuario es redirigido a la página principal (**Home**).

En la página **Home**, se visualizan tres columnas con sesiones deportivas: Ciclismo, Running y Natación. Cada columna muestra tarjetas con información sobre sesiones, incluyendo distancia, tiempo y lugar.

Al hacer clic en una tarjeta, se abre un modal que muestra la sesión en un tamaño más grande con su descripción detallada. Además, la sección inferior de la página muestra los mejores tiempos del usuario en cada categoría deportiva.

Toda la información de las sesiones deportivas es obtenida desde un archivo JSON alojado remotamente. La interfaz soporta internacionalización (I18N) con la posibilidad de cambiar el idioma entre inglés y español, coincidiendo el idioma de la aplicación con el del navegador.

## Decisiones de diseño y proceso de desarrollo
El desarrollo de la aplicación se enfocó en la usabilidad y la obtención dinámica de datos. Algunas de las principales decisiones de diseño fueron:

1. **Internacionalización (I18N)**: Se utilizó `react-intl` para permitir que los textos estáticos de la aplicación cambien entre inglés y español. Esto fue implementado en todos los labels y textos estáticos de la UI.

2. **Fetch de datos dinámicos**: En lugar de tener datos estáticos en archivos locales, se optó por hacer `fetch` a un archivo JSON alojado remotamente. Esto permite mayor flexibilidad en la actualización de datos sin necesidad de modificar el código fuente. Los datos se cargan en el componente `Home` mediante un `useEffect` que realiza la petición a la URL del JSON.

   ```javascript
   useEffect(() => {
     fetch('https://raw.githubusercontent.com/dgomezrey/web20242/0bc5b01240c41b69315fa1a49cd8f013a83e27ee/data.json')
       .then(response => response.json())
       .then(data => {
         setUser(data.user);
         setBestTimes(calculateBestTimes(data.user.sessions));
       });
   }, []);
   ```

3. **Diseño modular / por componentes**: Se implementaron varios componentes en React para estructurar la aplicación. Los más importantes son `Login.js`, que maneja el proceso de autenticación con validaciones, y `Home.js`, que gestiona la visualización de las sesiones deportivas. Además, se utilizó `react-bootstrap` para una interfaz responsive y amigable.

4. **Modales para detalle de sesión**: Se emplearon modales para que al hacer clic en una tarjeta de sesión, se pueda ver en detalle la información de esa actividad. El modal muestra la imagen asociada a la sesión y los detalles relevantes, como título, distancia y tiempo.

5. **Navegación entre pantallas**: La navegación fue gestionada con `react-router-dom`, donde se definió la ruta principal para el login y la página de inicio. Tras un login exitoso, el usuario es redirigido automáticamente a la página de sesiones (**Home**).

## Tecnologías Utilizadas
- **React.js**: Para la construcción de los componentes interactivos.
- **React Bootstrap**: Para la creación de la interfaz gráfica y elementos de diseño.
- **React Router Dom**: Para la navegación entre el login y la página principal.
- **React Intl**: Para la internacionalización de la aplicación, habilitando inglés y español.
- **Fetch API**: Para obtener dinámicamente la información de las sesiones desde un archivo JSON remoto.
- **CSS**: Para la personalización y ajustes en el diseño visual de la interfaz.
