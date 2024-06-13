# Project Base for app - Para test de NovaComp

# Introduccion

Aplicacion movil base para proyectos donde tendra diferentes caracteristicas como son:

- Listado de task y agregar nuevas.
- Listado por api.

## Configuración de entorno.

- Versión de NodeJS v18 o superior.
- Versión de React Native 0.74.2
- Visual studio Code (mac, linux y windows).

- Tener instalado (MAC).
  ruby@2.7
  watchman
  adoptopenjdk8
  react-native-cli
  Xcode
  Android Studio
  Librerias con los simuladores

## Tecnologias a aplicar:

- El proyecto se trabaja bajo el uso de librerías administrado por Yarn
- Versión de Yarn 1.22.19 o superior

## Compilación

- Comandos para levantar el proyecto paso a paso (deberá estar bien detallado de tal manera que cualquier persona pueda levantar sin necesidad de conocer el proyecto).

1. Comando para instalar renombrar el proyecto

```
npx react-native-rename "AppNovaComp" -b "com.gcorredorlab.appnovacomp"
```

2. Comando para instalar dependencias del proyecto

```
yarn clean:ios - yarn clean:android
```

3. Comando para installar PODS

```
npx pod-install ios
```

4. Comando para iniciar METRO (recomendado) en un tab de la terminal

```
npx react-native start
```

5. Comando para iniciar el simulador de Android (recomendado) en otro tab de la terminal

```
npx react-native run-android
```

5.1. Comando para iniciar el simulador de iOs (recomendado) en otro tab de la terminal

```
npx react-native run-ios
```

5.2. Comando para iniciar el simulador de iOs con version (recomendado) en otro tab de la terminal

```
npx react-native run-ios --simulator='iPhone 14'
```

## post building

- Se inicializa el simulador

## Otros Comandos

- Comandos que nos pueden ayudar en caso de:

1. Comando para crear el proyecto

```
npx react-native init AppNovaComp
```

2. Comando para linkear fuentes

```
npx react-native-asset
```

3. Comando para para los procesos de android

```
./gradlew --stop
```

4. Para reiniciar todo en Watchman

```
watchman watch-del-all
```

## Licencia del proyecto.

Licencia de uso gCorredorLab

# Contribute

> Guillermo Corredor (gcorredorlab@gmail.com) FullStack Developer
