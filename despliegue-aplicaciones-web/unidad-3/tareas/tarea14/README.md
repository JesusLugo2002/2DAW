# Migración de sitio web de XAMP a LAMP

<div align=center>
    <img src="./img/cover.png" alt="Cover">
</div>

# Contenidos

- [Creación previa del host virtual](#creación-previa-del-host-virtual)
  - [Configuración en /etc/hosts](#configuración-en-etchosts)
  - [Creación de la estructura para el sitio web](#creación-de-la-estructura-para-el-sitio-web)
  - [Configuración en Apache del host virtual](#configuración-en-apache-del-host-virtual)
    - [Explicación de la configuración](#explicación-de-la-configuración)
  - [Habilitación de la configuración](#habilitación-de-la-configuración)
- [Instalación y configuración de *phpmyadmin*](#instalación-y-configuración-de-phpmyadmin)
  - [Explicación de las directivas](#explicación-de-las-directivas)
- [Configuración de la base de datos](#configuración-de-la-base-de-datos)
- [Comprobación de funcionamiento](#comprobación-de-funcionamiento)


## Creación previa del host virtual

Para continuar las prácticas, traeremos la página creada previamente y desplegada tanto en XAMP como en InfinityFree, y la desplegaremos en nuestro servidor LAMP. Para ello, es necesario crear un host virtual específico donde guardar los ficheros y mostrarlos posteriormente en navegador. Lo haremos siguiendo estos pasos:

### Configuración en /etc/hosts

Accederemos al fichero de hosts del sistema con `sudo nano /etc/hosts` y añadiremos un dominio con la ip local.

```sh
# /etc/hosts
127.0.0.1       lamp.com
127.0.0.1       www.lamp.com
```

### Creación de la estructura para el sitio web

Ahora crearemos el directorio necesario para instalar la página web. Posteriormente, moveremos los ficheros de nuestro sitio web a ese directorio.

```sh
# /htdocs-de-nuestro-sitio
sudo mkdir /var/www/html/lamp.com
sudo cp * /var/www/html/lamp.com
```

### Configuración en Apache del host virtual

Creamos nuestro fichero de configuración en el directorio de `sites-available` de Apache:

```sh
cd etc/apache2/sites-available
sudo nano lamp.com.conf
```

E insertamos su contenido:

```sh
<VirtualHost *:80>
        ServerName lamp.com
        ServerAlias www.lamp.com
        ServerAdmin webmaster@lamp.com
        DocumentRoot /var/www/html/lamp.com
        <Directory /var/www/html/lamp>
                options -Indexes +FollowSymlinks
                AllowOverride All
        </Directory>
        Errorlog ${APACHE_LOG_DIR}/lamp.com-error.log
        CUSTOMLOG ${APACHE_LOG_DIR}/lamp.com-access.log combined
</VirtualHost>
```

#### Explicación de la configuración

- `<VirtualHost *:80>`: Esta línea indica que este bloque de configuración se aplica a todas las direcciones IP en el puerto 80 (el puerto estándar para HTTP).

- `ServerName lamp.com` y `ServerAlias www.lamp.com`: Estas líneas especifican el nombre principal del servidor y cualquier alias (nombre alternativo) para el dominio. En este caso, tanto "lamp.com" como "www.lamp.com" son atendidos por este VirtualHost.

- `ServerAdmin webmaster@lamp.com`: Aquí se establece la dirección de correo electrónico del administrador del servidor, a la que se enviarán los mensajes de error relacionados con el servidor.

- `DocumentRoot /var/www/html/lamp.com`: Define el directorio raíz desde donde se servirán los archivos del sitio web. En este caso, `/var/www/html/lamp.com`.

- `<Directory /var/www/html/lamp>`: Este bloque define configuraciones específicas para el directorio mencionado.
    - `Options -Indexes +FollowSymlinks`: Deshabilita la lista de directorios (`-Indexes`) y permite el seguimiento de enlaces simbólicos (`+FollowSymlinks`).
    - `AllowOverride All`: Permite que las directivas configuradas en archivos .htaccess en este directorio anulen las configuraciones globales.

- `Errorlog ${APACHE_LOG_DIR}/lamp.com-error.log`: Especifica la ubicación del archivo de registro de errores para este VirtualHost.

- `CUSTOMLOG ${APACHE_LOG_DIR}/lamp.com-access.log combined`: Define la ubicación del archivo de registro de acceso usando el formato combinado.

### Habilitación de la configuración

```sh
# /etc/apache2/sites-available
sudo a2ensite lamp.com.conf
```

## Instalación y configuración de *phpmyadmin*

Instalamos el paquete de *phpmyadmin* con:

```sh
sudo apt install phpmyadmin
```

Y creamos un fichero de configuración en Apache2:

```sh
sudo cd etc/apache2/conf-available
sudo nano phpmyadmin.conf
```

Con su respectivo contenido y directivas:

```sh
Alias /phpmyadmin /usr/share/phpmyadmin

<Directory /usr/share/phpmyadmin>
    Options SymLinksIfOwnerMatch
    DirectoryIndex index.php
</Directory>

<Directory /usr/share/phpmyadmin/templates>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/libraries>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/setup/lib>
    Require all denied
</Directory>
```

Y finalmente habilitamos la nueva configuración:

```sh
# /etc/apache2/conf-available
sudo a2enconf phpmyadmin.conf
```

### Explicación de las directivas

Este fragmento de configuración se relaciona con la configuración de phpMyAdmin en Apache, creando un alias para acceder a esta herramienta y estableciendo permisos específicos para diferentes directorios. A continuación te explicaré cada parte:

- `Alias /phpmyadmin /usr/share/phpmyadmin`: Esta línea crea un alias para phpMyAdmin, de modo que podrás acceder a phpMyAdmin visitando `http://<tu_dominio_or_ip>/phpmyadmin`.

- `<Directory /usr/share/phpmyadmin>`: Este bloque define configuraciones para el directorio `/usr/share/phpmyadmin`.
    - `Options SymLinksIfOwnerMatch`: Permite el seguimiento de enlaces simbólicos si el propietario coincide.
    - `DirectoryIndex index.php`: Establece `index.php` como el archivo de índice predeterminado para este directorio.

- Los siguientes bloques `<Directory>` establecen permisos estrictos para ciertos directorios dentro de phpMyAdmin, denegando el acceso:
    - `<Directory /usr/share/phpmyadmin/templates>`: Deniega acceso completo (`Require all denied`) al directorio de plantillas de phpMyAdmin.
    - `<Directory /usr/share/phpmyadmin/libraries>`: Deniega el acceso completo al directorio de bibliotecas de phpMyAdmin.
    - `<Directory /usr/share/phpmyadmin/setup/lib>`: Deniega el acceso completo al directorio de configuraciones de phpMyAdmin.

Estas configuraciones ayudan a proteger phpMyAdmin estableciendo controles de acceso y asegurando que solo los contenidos necesarios estén accesibles vía web.

## Configuración de la base de datos

</div>

> [!NOTE]
> Es posible que en la instalación previa de phpmyadmin se haya configurado automáticamente el gestor de bases de datos, MariaDB, que hemos instalado en la práctica anterior, por lo tanto, posiblemente no sean necesarios ciertos pasos de lo que viene, como la creación de la base de datos.

<div align=justify>

Necesitamos configurar una base de datos a la que accederá *phpmyadmin*, para ello:

```sh
# Accedemos a MariaDB como root
mariadb -u root -p
```

```sql
-- Creamos la base de datos
CREATE DATABASE phpmyadmin;

-- Damos acceso total al usuario 'developer' creado en la práctica anterior.
GRANT ALL PRIVILEGES ON *.* TO 'developer';
```

## Comprobación de funcionamiento

Podemos acceder ahora a nuestro sitio web a través de [lamp.com](lamp.com) o [www.lamp.com](www.lamp.com), así como también al panel de *phpmyadmin* con [lamp.com/phpmyadmin](lamp.com/phpmyadmin).

</div>