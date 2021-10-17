<div id="top"></div>

## Acerca del proyecto

[![Product Name Screen Shot][product-screenshot]](http://168.176.26.202:3000/)

El proyecto Academic Evaluation System for Continuous Improvement (AESCI) es una propuesta de la Facultad de Ingeniería de la Universidad Nacional de Colombia - Sede Bogotá para contribuir con el proceso de acreditación internacional de los programas de la Facultad. El proyecto está desplegado en esta [aquí](http://168.176.26.202:3000/). (Se requiere estar conectado a la VPN)

<p align="right">(<a href="#top">back to top</a>)</p>

### Construido con

* [React.js](https://reactjs.org/)
* [Ant Design](https://ant.design/)

<p align="right">(<a href="#top">back to top</a>)</p>

## ¿Cómo iniciar?

Para crear una copia local y poder correr el proyecto por favor sigue estos pasos. Aunque la parte del front-end puede desplegarse, no será funcional a menos que el back-end también esté corriendo.

### Prerrequisitos

* npm, a través de [Node.js](https://nodejs.org/en/download/)
* Git, descargable en [Git](https://git-scm.com/)
* Una cuenta de GitHub, necesaria para acceder a los repositorios (back y front) del proyecto.
* Tener instalado el back-end del proyecto, seguir las instrucciones [aquí](https://github.com/uapa-team/aesci_backend)

### Instalación en local

0. Asegurarse de que el back esté adecuadamente instalado.
1. Clone el repositorio del front-end.
   ```sh
   git clone https://github.com/uapa-team/aesci_frontend.git
   ```
2. Instale los paquetes npm
   ```sh
   npm i
   ```
3. Inicialice el proyecto. Por lo general aparecerá en el puerto 3000 del localhost. Este paso también funciona con el comando `npm start`.
   ```sh
   yarn start
   ```
4. Inicialice el back. Este paso puede ser llevado a cabo antes o después de inicializar el front.

### Actualización en el servidor

- Conectarse a la VPN de la universidad utilizando Cisco.
- Conectarse por SSH a la terminal del servidor (pedirá constraseña):
   ```sh
   ssh uapapp-admin@168.176.26.202
   ```
- Desplazarse a la carpeta `aesci-frontend` utilizando el comando `cd <ruta>`
- Dependiendo de la metodología que implementen:
    - Actualizarán la rama **main**.
    - Colocaran una nueva rama en deploy.
- Para cualquiera de las dos metodologías: Revisar las otras terminales en paralelo:
   ```sh
   screen -ls
   ```
- Identificar la terminal en donde esté desplegado el front, tener presente el número de identificación de esa screen.
- Cambiarse a la terminal identificada:
   ```sh
   screen -r <id de la terminal donde esté el front>
   ```
- Terminar el proceso, es decir: **Ctrl + C**
- Actualizar el repositorio remoto, esto traerá todos los cambios realizados:
   ```sh
   git pull
   ```
- Si la metodología a seguir es actualizar la rama **main**, volver a correr el proyecto:
   ```sh
   yarn start
   ```
- Si la metodología es utilizar una nueva rama:
   ```sh
   git checkout <nombre de la rama>
   yarn start
   ```
- Volver a la terminal principal, a través de **Ctrl A + Ctrl D**.
- Comprobar que el despliegue se realizó de manera correcta.
- Salir de la terminal:
   ```sh
   exit
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Explicación de las metodologias y el proyecto

### Ramas en GitHub

- Se utiliza **main** como la rama que está siendo desplegada en el servidor, antes de actualizar esta rama, se debió haber realizado un review y hecho pruebas.
- Se utiliza **develop** como la rama para pruebas locales y actualizar los features. A menos que sea indicado algo contrario, esta es la rama que se clona para trabajar en local.
- Por cada nueva actualización o feature se crea una nueva rama con un nombre indicativo de esa feature o actualización. Una vez la feature esté lista, se hace merge con **develop**. Dependiendo de cómo se haya organizado el equipo, una vez revisada **develop** se hace merge con **main** y se sube el proyecto al servidor.

### Changelog

El proyecto utilizo un changelog para documentar los cambios realizados. Éste sigue el formato utilizado en [Keepachangelog](https://keepachangelog.com/en/1.0.0/) y se puede encontrar como `changelog.md` en el proyecto.

### Estructura del proyecto

```js
src
|---assets
        |---fonts
        |---Images
|---Components
        |---AddAssigment
        |---forProfessor
               |---example
        |---forStudent
               |---example
        |---Home
        |---Login
        |---Profile
        |---Test
        |---Utils
|---layouts
        |---AsideNav
        |---Breadcrumbper
        |---Footer
        |---Header
|---store

```


<p align="right">(<a href="#top">back to top</a>)</p>

## Contacto

UAPA - autoevalua_fibog@unal.edu.co

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[product-screenshot]: src/assets/images/screenshot.png

TODO:

- Organización Drive:

```
Carpeta del Drive:
|---Estudiantes / Profesor
		|---Programa
				|---Semestre académico
						|---Asignatura
								|---Tareas / Guía
								|---Co-evaluación / Feedback
```
