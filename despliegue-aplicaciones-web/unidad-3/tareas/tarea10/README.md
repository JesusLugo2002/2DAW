# Nginx: Habilitación de certificado SSL

<div align=center>
    <img src="./img/cover.png">
</div>

<div align=justify>

# Contenidos

- [Estructura de los hosts virtuales](#estructura-de-los-hosts-virtuales)
- [Configuración en sites-available](#configuración-en-sites-available)
- [Configurar DNS en /etc/hosts](#configurar-dns-en-etchosts)


## Introducción

Para esta práctica debemos tomar en cuenta la creación previa de los hosts virtuales `empresa1.com`, `empresa2.com` y `empresa3.com`, pues sobre ellos es que se aplicarán los certificados autofirmados que generaremos usando OpenSSL como en prácticas anteriores.

Otro de los prerequisitos que debemos cumplir es tener preparado la futura ubicación de nuestros ficheros relacionados con los certificados SSL en nuestro directorio, lo podemos crear con `sudo mkdir -p /etc/nginx/ssl`.

## Generación de certificado SSL con OpenSSL

Para ello ejecutaremos el siguiente comando:
```sh
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/nginx/ssl/server.key -out /etc/nginx/ssl/server.crt
```

Que desplegando este comando obtenemos las siguientes opciones:
- `-x509`: para devolver un certificado autofirmado.
- `-nodes`: para no encriptar la clave privada.
- `-days 365`: para especificar los dias de validez que tendrá nuestro certificado.
- `-newkey rsa:2048`: para crear una solicitud de certificado y una clave de 2048 bytes.
- `-keyout /etc/nginx/ssl/server.key`: la ruta de _output_ de la clave privada.
- `-out /etc/nginx/ssl/server.crt`: la ruta de _output_ del certificado generado.

## Configuración de Nginx para habilitar SSL

Ahora debemos acceder a los archivos de configuración de nuestros hosts virtuales, en el directorio `/etc/nginx/sites-available/` y habilitar las directrices necesarias:

```nginx
server {
    listen 443 ssl; 
    server_name your_domain.com; 

    ssl_certificate /etc/nginx/ssl/server.crt; 
    ssl_certificate_key /etc/nginx/ssl/server.key; 
    
    ssl_protocols TLSv1.2 TLSv1.3; 
    ssl_ciphers HIGH:!aNULL:!MD5; 
    location / { 
        try_files $uri $uri/ =404; 
    } 
}
```

Finalmente, podemos reiniciar el servicio para aplicar los cambios con `sudo systemctl restart nginx`.

</div>