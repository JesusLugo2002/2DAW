# Configuración de Apache2: hosts virtuales y certificados SSL

# Contenidos

## Introducción

Para esta práctica es necesario tener instalado y en funcionamiento, para ello, lo comprobamos ejecutando `systemctl status apache2`.

<div align=center>
    <img src="./img/status-apache2.png" alt="Apache2 status">
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

## Creación de los hosts virtuales

Ya iniciaremos con la creación de los hosts virtuales: para ello nos dirigimos a nuestro directorio `/etc/apache2/sites-available`, que por defecto ya contendrá unos archivos de configuración. Como buena práctica, es recomendable crear para cada host un fichero propio de configuración, pero para ello, copiaremos el `000-default.conf` existente.

```sh
# Suponiendo que nos ubicamos en el directorio, copiamos los ficheros de la siguiente forma
sudo cp 000-default.conf prueba1.com.conf
sudo cp 000-default.conf prueba2.com.conf
```

Modificamos los ficheros `prueba1.com.conf` y `prueba2.com.conf`, para indicar el nombre que vamos a usar para acceder al host virtual (`ServerName`) y el directorio de trabajo (`DocumentRoot`).

Después de esto debemos habilitarlo generando un enlace simbólico con:

```sh
sudo a2ensite prueba1.com.conf
sudo a2ensite prueba2.com.conf
```

Y finalmente reiniciar el servicio para aplicar los cambios con `sudo systemctl reload apache2`