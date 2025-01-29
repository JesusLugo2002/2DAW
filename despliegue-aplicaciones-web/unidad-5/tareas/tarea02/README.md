# OpenLDAP: Instalación y configuración

<div align=center>
    <img src="./img/cover.png" alt="cover">
</div>

<div align=justify>

# Contenidos

- [Introducción](#introducción)
- [Instalación de los paquetes](#instalación-de-los-paquetes)
- [Configuración de los paquetes](#configuración-de-los-paquetes)


## Introducción

Para esta práctica es necesario tener preparado un par de máquinas virtuales: una máquina server y un cliente, conexión a internet y conectividad entre ambas máquinas.

Podemos comprobar esto realizando un simple `ping` a la ip de nuestro servidor y comprobando si hay transferencia de paquetes.

<div align=center>
    <img src="./img/ping-to-server.png" alt="Ping to Server">
</div>

Otra cosa que necesitamos preparar (en caso de no tener configurado previamente) es el *hostname* de nuestro servidor usando `hostnamectl`. En mi caso:

```sh
sudo hostnamectl set-hostname apacheserver.jesus.local
```

Así como también el ajuste en `/etc/hosts` necesario para el buen funcionamiento de nuestro servidor.

```sh
# /etc/hosts
127.0.0.1   locahost
127.0.1.1   apacheserver.jesus.local
10.109.99.36    apacheserver.jesus.local
```

## Instalación de los paquetes

Primeramente, como siempre, actualizaremos el repositorio de paquetes de nuestro sistema operativo:
```sh
sudo apt-get update -y
```

Luego instalamos los siguientes paquetes:
```sh
sudo apt-get install slapd ldap-utils -y
```

## Configuración de los paquetes

Ahora necesitamos los paquetes que acabamos de instalar, para eso, ejecutamos:
```sh
sudo dpkg-reconfigure slapd
```

Después de haber configurado todo correctamente según nuestras necesidades, podemos comprobar la configuración con:
```sh
sudo slapcat
```

Y el comando anterior nos debería dar algo como:
```sh
dn: dc=jesus,dc=local
objectClass: top
objectClass: dcObject
objectClass: organization
o: jesus.local
dc: jesus
structuralObjectClass: organization
entryUUID: 7e1561ec-72a3-103f-9799-654519ec3a76
creatorsName: cn=admin,dc=jesus,dc=local
createTimestamp: 20250129154312Z
entryCSN: 20250129154312.833672Z#000000#000#000000
modifiersName: cn=admin,dc=jesus,dc=local
modifyTimestamp: 20250129154312Z
```

</div>
