# Ejercicios para practicar SassScript

# Contenidos

- [Ejercicio 1](#ejercicio-1)
- [Ejercicio 2](#ejercicio-2)
- [Ejercicio 3](#ejercicio-3)
- [Ejercicio 4](#ejercicio-4)
- [Ejercicio 5](#ejercicio-5)
- [Ejercicio 6](#ejercicio-6)
- [Ejercicio 7](#ejercicio-7)
- [Ejercicio 8](#ejercicio-8)
- [Ejercicio 9](#ejercicio-9)


## Ejercicio 1
```css
.box {
    width: 100px;
    height: 50px;
    margin-top: 10px;
}
```

## Ejercicio 2
```css
@media (min-width: 800px) {
    p {
        font-size: 16px;
    }
}

@media (max-width: 799px) {
    p {
        font-size: 12px;
    }
}
```

## Ejercicio 3
```css
@media (min-width: 800px) {
    button {
        background-color: #333;
        color: #fff;
    }
}

@media (max-width: 799px) {
    button {
        background-color: #fff;
        color: #333;
    }
}
```

## Ejercicio 4 
(Puedes hacer varias propuestas)

```css
.content::before {
    content: "Hello World";
}
```

## Ejercicio 5
Existe una cadena que tiene el texto “Hola. Bienvenido al aula
Click”. Y quiero que se genere el código:

```css
p::before {
    content: "Bienvenido";
}
```

## Ejercicio 6
Haciendo uso de la Interpolación. Plantea una solución para que nos de
el código CSS siguiente:

```css
h1::before {
    content: "Welcome to SASS!";
}
```

## Ejercicio 7
Haciendo uso de la Interpolación. Proponga un código SCSS que tras
precompilar genere:

```css
.link {
    color: #333;
    background-color: #fff;
}
```

## Ejercicio 8
Haciendo uso de la Interpolación. Proponga un código SCSS, donde el
elemento p sea interpolado:

```css
.box p {
    font-size: 16px;
}
```

## Ejercicio 9
Dado el código CSS siguiente aplica todo lo aprendido hasta ahora,
incluido del tema anterior de Referencias:

```css
.box {
    width: 200px;
    height: 100px;
    margin-top: 20px;
    p {
        font-size: 16px;
    }
}

@media (min-width: 800px) {
    .box {
        margin-top: 40px;
        p {
            font-size: 18px;
        }
    }
}

@media (min-width: 1200px) {
    .box {
        margin-top: 60px;
        p {
            font-size: 20px;
        }
    }
}