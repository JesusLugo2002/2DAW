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

Vamos a habilitar el usuario anónimo, para que se pueda conectar al servidor sin ningún tipo de contraseña. Para ello, añadimos las siguientes directivas para en `vsftpd.conf`.
 
```sh
# Permite las conexiones anónimas
anonymous_enable=YES
anon_root=/srv/ftp/anonimo

# Permite la conexión de usuarios locales
local_enable=YES

# Permite la escritura de comandos FTP
write_enable=YES

# Controla los permisos de ficheros y directorios creados
local_umask=022

# Habilita el "enjaulado" de los usuarios en su directorio "home" 
chroot_local_user=YES

# Habilita una lista de usuarios que NO serán enjaulados (como el admin)
chroot_list_enable=YES
chroot_list_file=/etc/vsftpd.chroot_list
allow_writeable_chroot=YES

# Habilita una lista de usuarios
userlist_enable=YES
userlist_file=/etc/vsftpd.user_list
# Convierte dicha lista en una blacklist
userlist_deny=YES

# Añadimos un "mensaje de bienvenida"
ftpd_banner="Hola mi rey/reina"

# Habilitamos un log de subidas y descargas de ficheros
xferlog_enable=YES
xferlog_file=/var/log/vsftpd.log
```

## Añadir un certificado SSL al servidor

```sh
sudo openssl req -x509 -nodes -days 365 -newkey isa:1024 -keyout /etc/ssl/private/vsftpd.key -out /etc/ssl/certs/vsftpd.pem
```