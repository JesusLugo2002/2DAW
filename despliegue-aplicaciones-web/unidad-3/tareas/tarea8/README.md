# Nginx: Instalación y configuración básica

# Contenidos

- [Descarga del paquete Nginx](#descarga-del-paquete-nginx)
- [Comprobación de instalación](#comprobación-de-instalación)
- [Creación del index.html inicial](#creación-del-indexhtml-inicial)

## Descarga del paquete Nginx

Primeramente, como con cualquier instalación de software, actualizaremos el repositorio de dependencias con:
```sh
sudo apt-get update
```

E instalamos el paquete `nginx` con:
```sh
sudo apt-get install nginx
```

## Comprobación de instalación

Para comprobar que `nginx` ha sido instalado en nuestro sistema, podemos ejecutar los siguientes comandos:
```sh
# Para consultar su estado como servicio
systemctl status nginx

# Para consultar si la sintaxis de la configuración se cumple
sudo nginx -t
```

## Creación del index.html inicial

Si nos vamos al directorio `/etc/nginx` podemos comprobar que tiene una estructura muy similar a la utilizada por Apache2, viendo cosas en común como un directorio `sites-available` o `sites-enabled`.

Para la creación de un index.html inicial, accesible desde *localhost*, nos iremos a nuestro directorio `/var/www/html` y crearemos el fichero con:

```sh
sudo nano index.html
```

E insertamos algo de contenido básico como un `<h1>Hello World!</h1>`. Tras ello, hacemos un `sudo systemctl restart nginx` para refrescar cambios y tendriamos todo cumplido.