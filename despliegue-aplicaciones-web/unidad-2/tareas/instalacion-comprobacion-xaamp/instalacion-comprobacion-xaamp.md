# Instalación, configuración y comprobación de XAAMP

<div align=justify>

## Instalación

Después de instalar el paquete de XAAMP indicado, comprobamos la instalación correcta abriendo el panel con el comando:
```
sudo /opt/lampp/manager-linux-x64.run
```
<div align=center>
    <img src="./img/xaamp-panel.png" alt="xaamp-panel"/>
</div>
<div align=center>
    <img src="./img/xaamp-services-panel.png" alt="xaamp-services-panel"/>
</div>

## Configurando seguridad del servidor

Ahora que tenemos nuestro software para abrir un servidor, toca configurarle lo básico de seguridad: crear un usuario normal separado de los privilegios de root y añadir un inicio de sesión para que el acceso requiera contraseña.

Una vez iniciado los servidores de XAAMP, nos vamos al navegador para acceder a la interfaz introduciendo en el buscador [localhost/](localhost/dashboard)

<div align=center>
    <img src="./img/xaamp-dashboard.png" alt="xaamp-dashboard"/>
</div>

Y luego accediendo al apartado de __PHPMyAdmin__:

<div align=center>
    <img src="./img/phpmyadmin.png" alt="phpmyadmin"/>
</div>

Ahora para configurar primeramente la contraseña del root, ya que no es permitido este cambio a través de la interfaz web, debemos acceder al fichero de configuración __config.inc.php__ encontrado en __/opt/lampp/phpmyadmin__. En él y en sus lineas 29 y 30, donde vemos el usuario 'root' y su 'password', cambiamos la contraseña del mismo.

<div align=center>
    <img src="./img/config-file1.png" alt="changing-root-passwd"/>
</div>

Así mismo, para pedir un nombre de usuario y una contraseña para acceder al panel de PHPMyAdmin, debemos cambiar la linea 28, cuyo valor de 'auth_type' por defecto es _config_, y modificarlo a _http_.

<div align=center>
    <img src="./img/config-file2.png" alt="changing-login"/>
</div>

Ya con este cambio, cada vez que entremos al portal de PHPMyAdmin, se nos pirá iniciar sesión con un nombre de usuario y contraseña.

<div align=center>
    <img src="./img/login.png" alt="login"/>
</div>

## Comprobación