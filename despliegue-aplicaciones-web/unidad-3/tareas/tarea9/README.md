# Nginx: hosts virtuales

<div align=center>
    <img src="./img/cover.png">
</div>

<div align=justify>

# Contenidos

- [Estructura de los hosts virtuales](#estructura-de-los-hosts-virtuales)
- [Configuración en sites-available](#configuración-en-sites-available)
- [Configurar DNS en /etc/hosts](#configurar-dns-en-etchosts)


## Estructura de los hosts virtuales

Primeramente, nos dirigimos a nuestro directorio `/var/www/` para crear la estructura básica de nuestros nuevos hosts virtuales `empresa1.com`, `empresa2.com` y `empresa3.com`.

```sh
cd /var/www
sudo mkdir empresaX.com
sudo nano empresaX.com/index.html
```

Dentro de los `index.html` podemos poner un contenido de prueba como:
```html
<h1>EmpresaX Homepage</h1>
```

Por último, le asignamos los permisos con:
```sh
sudo chown -R www-data:www-data /var/www/empresaX.com
sudo chmod -R 755 /var/www/empresaX.com
```

## Configuración en sites-available

En el directorio `/etc/nginx/sites-available` podemos encontrar el fichero de configuración `default`. Este nos servirá como plantilla base para crear la configuración de nuestros hosts virtuales.

En estos archivos las directivas importantes a realizar modificaciones son:

1. `root /var/www/empresaX.com`: para configurar la raiz de los ficheros .
2. `listen 80`: por defecto incluye `default_server`, hay que eliminarlo.
3. `listen [::]:80`: igualmente que el anterior, eliminamos `default_server` que trae por defecto.
4. `server_name empresa1.com www.empresa1.com`: para asignar como nombre `empresa1.com` y `www.empresa1.com` como alias.

Después de esto, crearemos los enlaces simbólicos para activar los ficheros de configuración con:
```sh
sudo ln -s /etc/nginx/sites-available/empresaX.conf /etc/nginx/sites-enabled/
```

Y por último, para evitar problemas de duplicado, eliminamos el fichero `default` de `/etc/nginx/sites-enabled/` con `rm default`

Comprobamos que los cambios se han hecho correctamente y usando la sintaxis correctamente con:
```
sudo nginx -t
```

## Configurar DNS en /etc/hosts

Para ello debemos acceder a nuestro fichero de configuración de los DNS con `sudo nano /etc/hosts` y le asignamos la IP local con:

```sh
127.0.0.1       empresa1.com
127.0.0.1       www.empresa1.com

127.0.0.1       empresa2.com
127.0.0.1       www.empresa2.com

127.0.0.1       empresa3.com
127.0.0.1       www.empresa3.com
```

</div>