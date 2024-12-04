# Nginx: hosts virtuales

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
<h1>Hello World!</h1>
```

Por último, le asignamos los permisos con:
```sh
sudo chown -R www-data: /var/www/empresaX.com
```

## Configuración en sites-available

En el directorio `/etc/nginx/sites-available` podemos encontrar el fichero de configuración `default`. Este nos servirá como plantilla base para crear la configuración de nuestros hosts virtuales.

En estos archivos las directivas importantes a realizar modificaciones son:

1. `root /var/www/empresaX.com`: para configurar la raiz de los ficheros 

## Configurar DNS en /etc/hosts

