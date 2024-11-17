# Práctica de instalación de vsFTP

<div align=center>
    <img src="./img/cover.gif">
</div>

<div align=justify>

# Contenidos

- [Descarga e instalación del paquete _vsftpd_](#descarga-e-instalación-del-paquete-vsftpd)
- [Configuración inicial](#configuración-inicial)
- [Añadir un certificado SSL al servidor](#añadir-un-certificado-ssl-al-servidor)
- [Configuración del certificado SSL](#configuración-del-certificado-ssl)


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

Aqui despliego el funcionamiento del comando anterior:

- **openssl**: Este es un programa que se usa para manejar cosas de seguridad, como crear certificados y claves. Piensa en él como un candado digital.

- **req**: Esto le dice a OpenSSL que quieres hacer una solicitud, o sea, que quieres crear un nuevo certificado.

- -**x509**: Este es un tipo de certificado que es bastante común. Es como decirle que quieres un certificado que sea válido por un tiempo específico.

- -**nodes**: Esto significa que no quieres que la clave privada esté protegida con una contraseña. O sea, que si alguien tiene acceso a la clave, puede usarla sin pedirte que le digas la clave. A veces es más fácil, pero hay que tener cuidado.

- **-days 365**: Aquí le estás diciendo que el certificado sea válido por 365 días, o sea, un año. Después de eso, tendrás que crear uno nuevo.

- **-newkey rsa:1024**: Esto es para crear una nueva clave. "rsa:1024" significa que la clave va a ser del tipo RSA y tendrá un tamaño de 1024 bits. Es como el nivel de seguridad de tu candado.

- **-keyout /etc/ssl/private/vsftpd.key**: Aquí le dices a OpenSSL dónde guardar la clave privada que acabas de crear. En este caso, la estás guardando en una carpeta que se llama "private" dentro de "ssl". Es como guardar tu llave en un lugar seguro.

- **-out /etc/ssl/certs/vsftpd.pem**: Y aquí le indicas dónde guardar el certificado que generaste. Lo estás guardando en una carpeta de "certs". Este es el documento que le dice a otros que tu conexión es segura.

## Configuración del certificado SSL

Una vez tenemos nuestro SSL solicitado y creado, iremos nuevamente al fichero de configuración `vsftpd.conf` para añadir los ajustes necesarios. Nos vamos casi al final del fichero y nos encontraremos con unas directrices que debemos ajustar.

```sh
# Configurar ubicación del certificado generado
rsa_cert_file=/etc/ssl/certs/vsftpd.pem
# Configurar ubicación de la clave privada generada
rsa_private_key_file=/etc/ssl/private/vsftpd.pem
# Habilitar el uso de SSL
ssl_enable=YES
```

> [!NOTE]
> 
> Tras este cambio, como cualquier otro que se realice en el fichero de configuración, se deben aplicar los cambios recargando el servicio con `sudo systemctl restart vsftpd`.

> [!NOTE]  
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]  
> Crucial information necessary for users to succeed.

> [!WARNING]  
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.

</div>
