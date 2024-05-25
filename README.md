## Travels-api

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/)

## Instalación

1. Clona el repositorio:

```bash
  git clone https://github.com/devjaes/travels-api.git
  cd travels-api
```

2. Copiar y pegar el archivo .env.template, modificar las variables de entorno.

3. Instalar make

En windows:
```bash
  choco install make
```
En linux:
```bash
  sudo apt install make
```

4. Configura las variables de entorno en el archivo .env

```bash
  cp .env.template .env
```

5. Ejecutar el comando make para subir el contenedor

```bash
  make up-db
```

6. Instalar las dependencias

```bash
  yarn
```

## Uso

1. Generar el cliente de prisma

```bash
  yarn prisma generate
```

2. Sincroniza el esquema con la base de datos

```bash
  yarn prisma db push
```

3. Inicia el servidor de desarrollo

```bash
  yarn start:dev
```
