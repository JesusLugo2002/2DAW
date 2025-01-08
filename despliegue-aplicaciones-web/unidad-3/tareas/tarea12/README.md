# LAMP: Instalación y configuración

<div align=center>
    <img src="./img/cover.png">
</div>

<div align=justify>

# Contenidos

- [¿Qué es LAMP?](#qué-es-lamp)
- [Sistema operativo](#sistema-operativo)
- [Servidor web](#servidor-web)
- [El gestor de bases de datos](#el-gestor-de-bases-de-datos)
- [Lenguaje de programación](#lenguaje-de-programación)


## ¿Qué es LAMP?

El acrónimo **LAMP** está compuesto por las iniciales de sus cuatro componentes: **L**inux, **A**pache, **M**ySQL y **P**HP. Estos forman la infraestructura en el servidor, que hace posible la creación y el alojamiento de páginas web dinámicas.

Un servidor LAMP es la opción preferida por muchos por sus bajo coste y su alta disponibilidad. Además, sus componentes individuales pueden ser reemplazados fácilmente por aquellos con las mismas funciones.

## Sistema operativo

Muchas distribuciones de Linux están disponibles de forma gratuita como software de código abierto, incluso Ubuntu. Es muy importante mantener el repositorio de paquetes actualizado. Para ello, ejecutamos:

```sh
sudo apt-get update
```

## Servidor web

En caso de que durante la instalación de Ubuntu, Apache no haya sido establecido como servidor web, es posible hacerlo en cualquier momento usando el siguiente comando:

```sh
sudo apt-get install apache2
```

## El gestor de bases de datos

El sistema MySQL opera como una especie de servidor en la que se pueden crear múltiples bases de datos. Por cada base de datos se pueden crear diferentes tablas. Uno o más clientes envían solicitudes al servidor MySQL, que puede instalarse con el siguiente comando:

```sh
sudo apt-get install mysql-server
```

## Lenguaje de programación

El último paso en la configuración del LAMP stack es la instalación del lenguaje de programación – en este caso PHP, así como la de la librería PEAR que viene incluida en el paquete (PHP Extension and Application Repository), que incluye útiles extensiones y módulos para PHP. Además, instalaremos la librería que permite trabajar MySQL con PHP. La instalación se inicia con el comando:

```sh
sudo apt-get install php php-mysql
```

</div>