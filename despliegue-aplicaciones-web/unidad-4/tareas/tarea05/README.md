# Configuración de Apache2: hosts virtuales y certificados SSL

# Contenidos

## Introducción

Para esta práctica necesitamos cumplir, como requisito previo, es tener instalado el servicio *apache2* y en funcionamiento; también podría requerirse de una configuración básica del servidor, como la activación de un firewall. Para comprobar el funcionamiento, basta con ejecutar `systemctl status apache2`.
También se puede comprobar accediendo a la ip del servidor web desde el navegador, que nos daría la siguiente página:

<div align=center>
    <img src="./img/check-apache2.png" alt="checking apache2">
</div>

## Creación de la estructura necesaria de los hosts

Iniciaremos creando la estructura de los directorios donde se ubicarán los ficheros de nuestros hosts virtuales, `prueba1.com` y `prueba2.com`:

```sh
# Creamos los directorios donde se almacenarán los ficheros
sudo mkdir -p /var/www/html/prueba1.com/public
sudo mkdir -p /var/www/html/prueba2.com/public

# Creamos index.html de prueba para los hosts
sudo vi /var/www/html/prueba1.com/public/index.html
sudo vi /var/www/html/prueba2.com/public/index.html

# Configuramos la propiedad de los directorios para que el usuario del servidor web (www-data para Apache2) pueda acceder a los datos
sudo chown -R www-data: /var/www/html/prueba1.com/
sudo chown -R www-data: /var/www/html/prueba2.com/
```

**El `index.html` de los hosts puede contener algo sencillo, como:**

```html
<html>
    <head>
        <title>Welcome to PruebaX!</title>
    </head>
    <body>
        <h1>Success! The PruebaX virtual host is working!</h1>
    </body>
</html>
```

## Creación de los hosts virtuales

Ya iniciaremos con la creación de los hosts virtuales: para ello nos dirigimos a nuestro directorio `/etc/apache2/sites-available`, que por defecto ya contendrá unos archivos de configuración. Como buena práctica, es recomendable crear para cada host un fichero propio de configuración, pero para ello, copiaremos el `000-default.conf` existente.

```sh
# Suponiendo que nos ubicamos en el directorio, copiamos los ficheros de la siguiente forma
sudo cp 000-default.conf prueba1.com.conf
sudo cp 000-default.conf prueba2.com.conf
```

Modificamos los ficheros `prueba1.com.conf` y `prueba2.com.conf`, para indicar el nombre que vamos a usar para acceder al host virtual (`ServerName`) y el directorio de trabajo (`DocumentRoot`).

### Directrices de configuración

Para detallar más, podemos desplegar las directrices que contienen estos ficheros de configuración:

1. `<VirtualHost *:80>`: Esto indica que el servidor web Apache está configurando un host virtual para escuchar en el puerto 80, que es el puerto predeterminado para HTTP.
2. `ServerAdmin webmaster@domain`: Especifica el correo electrónico del administrador del servidor. En caso de problemas con el servidor, Apache mostrará este correo electrónico en los mensajes de error.
3. `ServerName domain`: Define el nombre principal del dominio que será atendido por este host virtual.
4. `DocumentRoot /var/www/domain/public`: Especifica el directorio raíz del sitio web. Todos los archivos del sitio se encuentran en esta carpeta.
5. `ErrorLog ${APACHE_LOG_DIR}/error.log`: Define la ubicación del archivo de registro de errores. `${APACHE_LOG_DIR}` es una variable que apunta a la ubicación predeterminada de los registros de Apache.
6. `CustomLog ${APACHE_LOG_DIR}/access.log combined`: Establece el archivo de registro de accesos y el formato del registro. El formato `combined` incluye información detallada sobre cada solicitud, como la dirección IP del cliente, el estado de respuesta y más.

Después de esto debemos habilitarlo generando un enlace simbólico con:

```sh
sudo a2ensite prueba1.com.conf
sudo a2ensite prueba2.com.conf
```

Y finalmente reiniciar el servicio para aplicar los cambios con `sudo systemctl reload apache2`.

## Configuración inicial para la certificación SSL

Primero debemos habilitar el modo SSL de nuestro servicio *apache2*, para ello ejecutamos el comando `sudo a2enmod ssl`, y ya con eso se conseguiría cifrar la información a través del certificado.
Después, reiniciamos el servicio con `sudo systemctl restart apache2`.

Continuamos creando un directorio para almacenar toda la configuración de SSL de Apache2

```sh
sudo mkdir /etc/apache2/ssl
```

Para la generación de certificados, es necesario tener instalado los paquetes `openssl` y `ca-certificates`, para ello los instalamos con:
```sh
sudo apt-get install openssl ca-certificates
```

## Generación de certificados

Nos iremos a nuestro directorio creado `/etc/apache2/ssl` y ejecutaremos los siguientes comandos para la generación de nuestro certificado y clave requerida:

```sh
# Primero generamos la clave privada (-out indica el nombre de la clave, y 2048 se refiere a la longitud de la misma)
sudo openssl genrsa -out server.key 2048
```