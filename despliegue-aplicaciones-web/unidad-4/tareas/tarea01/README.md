# Instalación del servidor FTP: proFTP

<div align=justify>

## Contenidos

## Descarga e instalación del paquete proFTP

Primeramente actualizamos el repositorio de paquetes: 
```sh
sudo apt-get update
```

Ahora descargamos e instalamos el paquete en nuestro sistema con el comando:
```sh
sudo apt-get install proftpd
```

Comprobamos que está instalando consultando su versión:
```sh
proftpd -v
# Output: ProFTPD Version 1.3.8b
```

Y comprobando su estatus como servicio con `systemctl status proftpd`.

<div align=center>
    <img src="img/status-service.png">
</div>

## Comprobación de los cambios del sistema

Podemos ver cómo la instalación del servicio viene consigo la creación de dos usuarios adicionales, los cuales se pueden comprobar con `cat /etc/passwd`

```sh
proftpd:x:122:65534::/run/proftpd:/usr/sbin/nologin
ftp:x:123:65534::/srv/ftp:/usr/sbin/nologin
```

Al igual que un directorio con sus ficheros de configuración ubicado en `/etc/proftpd`:

<div align=center>
    <img src="img/etc-directory.png">
</div>

Antes de seguir con la práctica y la posterior edición del fichero `proftpd.conf` __haremos una copia de seguridad del mismo__ con ` sudo cp /etc/proftpd/proftpd.conf /etc/proftpd/proftpd.conf.copia`.

## Edición del fichero de configuración

Editaremos el fichero usando el editor Vi con `sudo vi /etc/proftpd/proftpd.conf`: removeremos los comentarios del mismo con la sentencia `:g/^/s*#/d` y las lineas en blanco con `:g/^$/d`. Guardaremos nuestros cambios con `:w:q`.

## Conexión al servidor FTP

Finalmente realizaremos la conexión al servidor mediante tres métodos distintos.
1. Podemos acceder a nuestro servidor accediendo desde la terminal con el comando `ftp 127.0.0.1`

<div align=center>
    <img src="img/access-proftpd-terminal.png">
</div>

2. __A través del navegador__ accediendo a [ftp:127.0.0.1:21](ftp:127.0.0.1:21).
3. __A través del software Filezilla__, configurando una nueva conexión en el gestor de sitios de la aplicación.

<div align=center>
    <img src="img/filezilla.png">
</div>

<div align=center>
    <img src="img/filezilla-2.png">
</div>

## Nueva configuración del servidor FTP

Volveremos a tocar nuestro fichero de configuración, esta vez, para hacer los siguientes cambios:

```sh
ServerName "Mi servidor FTP"
DeferWelcome off
TimeoutIdle 1200
Port 21
maxInstances 30
showsymlinks on
User proftpd
Group nogroup
Umask 022 022
TransferLog /var/log/proftpd/xferlog
SystemLog /var/log/proftpd/proftpd.log
```

Y añadiremos las siguientes dos lineas:
```sh
AccessGrantMSG “Bienvenido al servidor FTP de Jesús Lugo”
AccessDenyMSG “Error de entrada a mi servidor FTP”
```

Y finalmente reiniciamos el servicio para aplicar cambios con: `systemctl reload proftpd`. Esto es para que se nos muestre un mensaje cuando accedamos u obtengamos un error por parte del servidor FTP.

Ahora configuraremos la linea de `DefaultRoot ~`, para evitar que el usuario pueda salir de su _Home_ cuando acceda al servidor.

</div>