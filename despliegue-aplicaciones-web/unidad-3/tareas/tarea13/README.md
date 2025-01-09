# Nginx: protección con Certbot y certificados Let's Encrypt

<div align=center>
    <img src="./img/cover.png">
</div>

<div align=justify>

# Contenidos

- [Introducción](#introducción)
- [Instalación de Certbot](#instalación-de-certbot)
- [Configuración de Nginx](#configuración-de-nginx)
- [Ajustes del firewall](#ajustes-del-firewall)
- [Obtención de certificado SSL](#obtención-de-certificado-ssl)


## Introducción

Let’s Encrypt es una entidad de certificación (CA) que proporciona una manera sencilla de obtener e instalar certificados de TLS/SSL gratuitos, lo que permite usar HTTPS cifrado en servidores web. Simplifica el proceso al proporcionar un cliente de software, Certbot, que intenta automatizar la mayoría (cuando no todos) de los pasos requeridos. Actualmente, todo el proceso de obtención e instalación de un certificado está totalmente automatizado en Apache y Nginx.

</div>

> [!NOTE]
> Cabe destacar que para esta práctica haremos uso de nuestros dominios previamente registrados en una dirección IP pública.

<div align=justify>

## Instalación de Certbot

Certbot es un cliente que se utiliza para solicitar un certificado de Let's Encrypt e implementarlo en un servidor web.

Para instalarlo, ejecutamos el comando:

```sh
sudo apt install certbot python3-certbot-nginx
```

## Configuración de Nginx

Certbot debe poder encontrar el bloque `server` correcto en su configuración de Nginx para que pueda configurar SSL automáticamente. De forma específica, lo hace buscando una directiva `server_name` que coincida con el dominio para el que está solicitando el certificado.

Para ello debemos entrar en nuestro fichero de configuración de `sites-available/` con:
```sh
sudo nano /etc/nginx/sites-available/example.com
```

Configuramos el fichero tal que así:

```
server {
    listen  80;
    listen  [::]:80;
    root    /usr/share/nginx/;
    index   index.php index.html index.htm;
    server_name empresa1.staging.keetup.com;

        client_max_body_size 100M;

    location / {
        try_files $uri $uri/ /index.php?$args;
    }

    location ~ \.php$ {
    include snippets/fastcgi-php.conf;
    fastcgi_pass        unix:/var/run/php/php7.2-fmp.sock;
    fastcgi_param       SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }
}
```

Creamos un enlace simbólico del fichero de configuración a sites-enabled para activarlo en nuestro servidor:
```sh
ln -s /etc/nginx/sites-available/empresa1.com.conf /etc/nginx/sites-enabled/
```

## Ajustes del firewall

Necesitamos permitir el tráfico HTTPS en nuestro servidor, para ello usaremos un perfil preconfigurado para esto dado por Nginx con:

```sh
sudo ufw allow 'Nginx Full'
```

## Obtención de certificado SSL

Con el siguiente comando generaremos el certificado a través de distintos pasos que debemos cumplir.

```sh
sudo certbot --nginx
```

**Selección de dominios:** Durante el proceso, Certbot muestra una lista de dominios disponibles en el servidor. Se seleccionó el dominio deseado introduciendo el número correspondiente.

**Configuración del redireccionamiento HTTP a HTTPS:** Certbot solicita confirmación para habilitar redireccionamiento automático de HTTP a HTTPS. Se eligió la opción indicada para garantizar que todo el tráfico sea seguro.

**Resultado exitoso:** Una vez completado, Certbot mostró un mensaje indicando que el certificado se creó y configuró correctamente en el servidor.

</div>