# Api con Js
* [Dependencias](#dependencias)
* [Ejecutar api](#run)
* [Traer dato](#get)
* [Ingresar dato](#post)

## dependencias
* morgan
* express

## run 
```
npm install
npm run dev
```

## get
[GET]localhost:8080/

Salida:
```Json
{
    "mensaje": "..."
}
```

## post
[POST]localhost:8080/

Entrada:
```Json
{
	"texto":"..."
}
```
Salida:
```Json
{
    "mensaje": "exito"
}
```