# API-REST - JavaScript
## *Indice*

* [Requisitos](#requisitos)
* [Librerias usadas](#librerias-usadas)
* [Comando](#comandos)
* [Endpoints](#endpoints)
    * [1. GET](#get)
    * [2. POST](#post)


## **Requisitos**
- [NPM](https://www.npmjs.com/): Node package Manager 

## **Librerias usadas**
- [Express](https://www.npmjs.com/package/morgan): servidor HTTP.
- [Morgan](https://www.npmjs.com/package/express): Por medio de "dev" muestra de una forma visual, el estado de las respuestas que se estan realizando al servidor.
- [Cors](https://www.npmjs.com/package/cors): Cabeceras http que permite a los servidores indicar a los navegadores si deben permitir la carga de recursos para un origen distinto al suyo.
- [Morgan](https://www.npmjs.com/package/morgan): Cuando se actualiza un archivo se vuelve a cargar.


## **Comandos** 
```
npm install 
npm run dev
```

## **Endpoints**
### GET
- Retorna un json 
<p align="center">
  <img src="./img/1.png">
</p>

- Retorna un json 
<p align="center">
  <img src="./img/2.png">
</p>

- Retorna una cadena de texto
<p align="center">
  <img src="./img/3.png">
</p>

- Retorna una cadena de texto
<p align="center">
  <img src="./img/4.png">
</p>


### POST
- Recibe un json que contiene el atributo "nombre" y retorna un saludo con ese atributo ingresado.

<p align="center">
  <img  src="./img/5.png">
</p>
