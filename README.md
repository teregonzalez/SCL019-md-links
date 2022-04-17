# Markdown Links

## 1. Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

## 2. Resumen del proyecto

Md-links es un librería que nos permite verificar el estado y recibir otras estadisticas de links contenidos en archivos con extensión .md

## 4. Documentación técnica

### Debes tener instalado:

```sh
node.js
Npm

```

### Instalación

`$ npm i @teregonzalez/md-links`

### Uso

Inserta en tu código

const mdLinks = require('@teregonzalez/md-links')

### En la terminal ingresa

node archivoQueLlamaMdLinks.js archivoMdALeer.md [options]

### Opciones

`--validate`
Arrojará una lista con los links, su status y si es valido o no.

`--stats`
 Esta opción arroja las estadísticas básicas de los links.

`--validate --stats`
Permitirá ejecutar ambas opciones.

### Cómo ejecutar

Ingresa los siguientes valores en la terminal:

```sh
$ node cli.js [TULINK] [OPCIÓN]
```

De las siguientes formas:

```sh
$ node cli.js ./some/example.md --validate
https://www.youtube.com/watch?v=BhvLIzVL8_o&feature=youtu.be Status is 301 OK ✓
https://developer.mozilla.org/es/docs/Web/HTTP/Overview Status is 200 OK ✓
https://es.stackoverflow.com/questions/168contrar-repetidos-en-un-array-javascriptttt Status is 404 FAIL ✕
```

```sh
$ node cli.js ./some/example.md --stats
Total links:  6
Unique links:  5
```

```sh
$ node cli.js ./some/example.md --validate --stats
Total links:  6
Unique links:  5
https://www.youtube.com/watch?v=BhvLIzVL8_o&feature=youtu.be Status is 301 OK ✓
https://developer.mozilla.org/es/docs/Web/HTTP/Overview Status is 200 OK ✓
https://es.stackoverflow.com/questions/168contrar-repetidos-en-un-array-javascript Status is 404 FAIL ✕
https://es.stackoverflow.com/questions/168contrar-repetidos-en-un-array-javascriptttt Status is 404 FAIL ✕
https://es.stackoverflow.com/questions/168contrar-repetidos-en-un-array-javascriptttt Status is 404 FAIL ✕
https://www.twitter.com/ Status is 301 OK ✓
```
## 4. Planificación

### Flowchart

### Github project Backlog 
