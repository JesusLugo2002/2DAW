# Práctica de instalación de vsFTP

# Contenidos

## Descarga e instalación del paquete _vsftpd_

En nuestra máquina servidor, instalamos el paquete de vsFTP con:
```sh
sudo apt-get install vsftpd
```

Podemos comprobar su instalación mirando su fichero de configuración con:
```sh
sudo cat /etc/vsftpd.conf
```

## Configuración inicial

Vamos a habilitar el usuario anónimo, para que se pueda conectar al servidor sin ningún tipo de contraseña. Para ello, buscamos las siguientes directivas del fichero de configuración `vsftpd.conf` y las descomentamos.
 
```sh
anonimus_enable=YES
local_enable=YES 
anon_root=/ftp
```

## Creación de usuario anonimo

Para nuestra práctica creamos un usuario anónimo con:
```sh
sudo adduser whoever
```

Creamos su carpeta `/ftp`:
```sh
sudo mkdir /ftp
```

Y le asignamos el usuario __whoever__ como propietario:
```sh
sudo chown whoever.whoever -R /ftp
```