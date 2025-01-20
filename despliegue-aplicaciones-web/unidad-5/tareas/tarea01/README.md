# Instalación de DNS en Ubuntu Server

# Contenidos

## Introducción

Hay muchos paquetes en Linux que implementan la funcionalidad DNS, pero nos enfocaremos en el servidor DNS BIND. Este se usa en la mayoría de los servidores DNS de todo el mundo.

## Descarga e instalación del paquete Bind9

Podemos descargar el paquete del repositorio con:
```sh
sudo apt-get install bind9
```

Una vez completada la instalación, puede iniciar el servicio y habilitarlo para que se ejecute en el momento del inicio.
```sh
sudo systemctl start named
sudo systemctl enable named
```

Podemos comprobar que todo está en funcionamiento accediendo al estado del servicio con:
```sh
systemctl status named
```