# OpenLDAP: Instalación y configuración

<div align=center>
    <img src="./img/cover.png" alt="cover">
</div>

<div align=justify>

# Contenidos

- [Introducción](#introducción)
- [Instalación de los paquetes](#instalación-de-los-paquetes)
- [Configuración de los paquetes](#configuración-de-los-paquetes)
- [Creación de la unidad organizativa](#creación-de-la-unidad-organizativa)
  - [1. Crear plantilla](#1-crear-plantilla)
  - [2. Añadimos la unidad](#2-añadimos-la-unidad)
- [Creación de un grupo](#creación-de-un-grupo)
  - [1. Crear la plantilla](#1-crear-la-plantilla)
  - [2. Integramos la plantilla](#2-integramos-la-plantilla)
- [Creación de un usuario](#creación-de-un-usuario)
- [Búsquedas dentro del directorio](#búsquedas-dentro-del-directorio)
- [Modificar usuarios](#modificar-usuarios)
- [Eliminar usuarios](#eliminar-usuarios)
- [Instalación de LDAP en cliente](#instalación-de-ldap-en-cliente)
  - [Configuración del cliente](#configuración-del-cliente)
  - [Comprobación](#comprobación)
- [Iniciar sesión como usuario del servidor LDAP](#iniciar-sesión-como-usuario-del-servidor-ldap)


## Introducción

Para esta práctica es necesario tener preparado un par de máquinas virtuales: una máquina server y un cliente, conexión a internet y conectividad entre ambas máquinas.

Podemos comprobar esto realizando un simple `ping` a la ip de nuestro servidor y comprobando si hay transferencia de paquetes.

<div align=center>
    <img src="./img/ping-to-server.png" alt="Ping to Server">
</div>

Otra cosa que necesitamos preparar (en caso de no tener configurado previamente) es el *hostname* de nuestro servidor usando `hostnamectl`. En mi caso:

```sh
sudo hostnamectl set-hostname apacheserver.jesus.local
```

Así como también el ajuste en `/etc/hosts` necesario para el buen funcionamiento de nuestro servidor.

```sh
# /etc/hosts
127.0.0.1   locahost
127.0.1.1   apacheserver.jesus.local
10.109.99.36    apacheserver.jesus.local
```

## Instalación de los paquetes

Primeramente, como siempre, actualizaremos el repositorio de paquetes de nuestro sistema operativo:
```sh
sudo apt-get update -y
```

Luego instalamos los siguientes paquetes:
```sh
sudo apt-get install slapd ldap-utils -y
```

## Configuración de los paquetes

Ahora necesitamos los paquetes que acabamos de instalar, para eso, ejecutamos:
```sh
sudo dpkg-reconfigure slapd
```

Después de haber configurado todo correctamente según nuestras necesidades, podemos comprobar la configuración con:
```sh
sudo slapcat
```

Y el comando anterior nos debería dar algo como:
```sh
dn: dc=jesus,dc=local
objectClass: top
objectClass: dcObject
objectClass: organization
o: jesus.local
dc: jesus
structuralObjectClass: organization
entryUUID: 7e1561ec-72a3-103f-9799-654519ec3a76
creatorsName: cn=admin,dc=jesus,dc=local
createTimestamp: 20250129154312Z
entryCSN: 20250129154312.833672Z#000000#000#000000
modifiersName: cn=admin,dc=jesus,dc=local
modifyTimestamp: 20250129154312Z
```

## Creación de la unidad organizativa

Para la práctica es necesaria la creación de la unidad organizativa aplicada en la guia otorgada: para crear una, debemos hacer los siguientes pasos.

### 1. Crear plantilla

Crearemos una plantilla para, posteriormente, crear unidades organizativas. Para ello, hacemos:
```sh
sudo nano ou.ldif
```

E insertamos como contenido:
```sh
dn: ou=informatica,dc=clockwork,dc=local
objectClass: top
objectClass: organizationalUnit
ou: informatica
```

### 2. Añadimos la unidad

Con:
```sh
sudo ldapadd -x -D cn=admin,dc=clockwork,dc=local -W -f ou.ldfi
```

Desplegando este comando:

`ldapadd`: comando base para agregar una entrada al servidor LDAP.

`-x`: Esta opción indica que se debe usar la autenticación simple en lugar de SASL (Simple Authentication and Security Layer).

`-D cn=admin,dc=clockwork,dc=local`: Esta opción especifica el DN (Distinguished Name) del usuario que se está autenticando. En este caso, se está utilizando el usuario admin en el dominio clockwork.local.

`-W`: Esta opción indica que se debe solicitar la contraseña del usuario especificado en el DN anterior. Al usar esta opción, el sistema pedirá que ingreses la contraseña de admin.

`-f ou.ldif`: Esta opción especifica el archivo que contiene las entradas LDAP que se desean agregar o modificar. En este caso, el archivo se llama ou.ldif.

## Creación de un grupo

Para crear un grupo debemos seguir el mismo *modus operandi* de la unidad organizativa: crear una plantilla base y luego añadir un ejemplo, pero esta vez, dicha plantilla será copiada de la previamente creada.

### 1. Crear la plantilla

Seguiremos usando como referencia la plantilla anterior copiándolo:

```sh
sudo cp ou.ldif grp.ldif
```

</div>

> [!NOTE]
> El nombre del fichero no es realmente importante sino su extensión .ldif

<div align=justify>

Luego entramos al fichero que acabamos de copiar con `nano grp.ldif` y realizaremos unos pequeños cambios:

```sh
dn: cn=informatica,ou=informatica,dc=clockwork,dc=local
objectClass: top
objectClass: posixGroup
gidNumber: 10000 
cn: informatica
```

Estos cambios son:
1. En la primera linea, indicamos que el *common name* de nuestro grupo (`cn`) es "informática", porque estamos creando un grupo para integrar a todos los trabajadores del area de informática, y dicho grupo está dentro de la unidad organizativa de informática (`ou`) en *clockwork.local*.
2. En la tercera linea indicamos que esta plantilla es de grupo con `posixGroup`
3. En la cuarta linea vemos necesarios indicar una id de grupo con `gidNumber`. Como base usaremos el diez mil para evitar solapamiento con los usuarios que, por lo general, tendrán de identificador los valores de 1000.
4. En la última linea indicamos nuevamente el *common name*.

### 2. Integramos la plantilla

Ahora es cuestión de introducir el grupo con:

```sh
sudo ldapapp -x -D cn=admin,dc=clockwork,dc=local -W -f grp.ldfi
```

Y nuevamente podremos comprobar con `sudo slapcat` como se introducido el grupo en nuestra estructura.

## Creación de un usuario

Nuevamente, copiamos el fichero `grp.ldif` para trabajar a partir de él y crear nuestra plantilla de usuario:

```sh
cp grp.ldif usr.ldif
nano usr.ldif
```

E introducimos nuevos valores:

```sh
dn: uid=clockworker,ou=informatica,dc=clockwork,dc=local
objectClass: top
objectClass: posixAccount
objectClass: inetOrgPerson
objectClass: person
cn: clockworker # Common Name
uid: clockworker # Identificador del usuario
ou: informatica # Unidad organizativa a la que pertenece
uidNumber: 2000 # Número de identificación de usuario
gidNumber: 10000 # Número de identificación del grupo al que pertenece
homeDirectory: /home/clockworker # Directorio Home
loginShell: /bin/bash 
userPassword: Cursos1
sn: Worker # Surname
mail: clockworker@clockwork.local
givenName: clockworker # Nombre de pila
```

Y finalmente introducimos en nuestra estructura la plantilla creada con:

```sh
sudo ldapadd -x -D cn=admin,dc=clockwork,dc=local -W -f usr.ldif
```

</div>

> [!NOTE]
> Para asignar las contraseñas, hay una forma de evitar ponerlas directamente como en este caso con `Cursos1` y es usando el comando `sudo slappasswd`, que te pide la contraseña a usar y te devuelve la misma ya encriptada para copiar y pegar dentro de la plantilla.

<div align=justify>

## Búsquedas dentro del directorio

**LDAP** nos proporciona herramientas para trabajar con nuestra estructura y una de ellas es la búsqueda de elementos. Por ejemplo, si deseamos obtener el *common name*, el *surname* y el nombre de pila de nuestro recién creado usuario, usamos:

```sh
ldapsearch -xLLL -b "dc=clockwork,dc=local" uid=clockworker sn givenName cn
```

O si queremos obtener los mismos datos pero de todos los usuarios:

```sh
ldapsearch -xLLL -b "dc=clockwork,dc=local" uid=* sn givenName cn
```

## Modificar usuarios

Otra de las herramientas es la modificación de nuestras entradas: si queremos realizarlo, debemos usar un fichero .ldif para ello con `nano changes.ldif`. Por ejemplo, si queremos cambiar el atributo `mail` de nuestro usuario.

```sh
dn: uid=clockworker,ou=informatica,dc=clockwork,dc=local
changetype: modify
replace: mail
mail: nuevoclock@clockwork.local
```

Y aplicamos el cambio con un comando SIMILAR al de añadir entradas:

```sh
sudo ldapmodify -x -D cn=admin,dc=clockwork,dc=local -W -f changes.ldif
```

## Eliminar usuarios

Para eliminar usuarios, debemos ejecutar:

```sh
sudo ldapdelete -x -W -D 'cn=admin,dc=clockwork,dc=local' "uid=clockworker,ou=informatica,dc=clockwork,dc=local"
```

</div>

> [!WARNING]
> Hay que distinguir entre el usuario con privilegios para eliminar del usuario eliminado. Entre comillas simples '' se encierra al administrador y con comillas dobles "" se encierra al que se va a eliminar.

<div align=justify>

## Instalación de LDAP en cliente

1. Descargamos los paquetes necesarios para trabajar con LDAP en la máquina cliente

```sh
sudo apt-get install libnss-ldap libpam-ldap ldap-utils -y
```

2. Mientras se instalan los paquetes nos pedirá la dirección de nuestro servidor LDAP, la cual debe ser `ldap://<ip-del-server>/`. Por ejemplo: `ldap://192.168.1.8/`
3. También debemos indicar el nombre distinguido base con `dc=clockwork,dc=local`.
4. La versión a utilizar es la **3**
5. Make local root Database admin: **Yes**
6. Does the LDAP database require login?: **No**
7. Indicamos ahora el usuario root con `cn=admin,dc=clockwork,dc=local`

</div>

> [!NOTE]
> En caso de equivocarnos con los pasos anteriores, podemos usar `sudo dpkg-reconfigure ldap-auth-config`

<div align=justify>

### Configuración del cliente

Debemos cambiar el sistema de ficheros para que use el servidor LDAP, para eso, entramos al fichero `/etc/nsswitch.conf` y cambiamos:

```conf
passwd:   files ldap
group:    files ldap
shadow:   files ldap
```

Y ahora con `sudo getent passwd` nos debería dar los usuarios ya registrados en el servidor LDAP.

Luego debemos hacer un cambio en el fichero `/etc/pam.d/common-session`, y es añadir como última linea:

```conf
session optional    pam_mkhomedir.so skel=/etc/skel umask=077
```

### Comprobación

Finalmente, con una búsqueda en el servidor LDAP podemos ver si está todo correctamente configurado, para ello:

```sh
ldapsearch -x -H ldap://<ip-del-server> -b "dc=clockwork,dc=local"
```

## Iniciar sesión como usuario del servidor LDAP

Se puede hacer de dos formas:

1. Por terminal: con `sudo su - clockworker`, siendo `clockworker` el uid de nuestro usuario del servidor
2. Versión gráfica: necesitamos instalar en la máquina cliente el paquete `nslcd` con `sudo apt-get install nslcd`, el cual nos permite conectar de forma gráfica. Una vez realizada la instalación, reiniciamos el equipo y después cuando nos pida iniciar sesión, podemos usar el usuario y contraseña de un usuario de LDAP.

</div>