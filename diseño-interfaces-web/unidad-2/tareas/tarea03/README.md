# WAI-ARIA en Bootstrap

<div align=center>
  <img src="./img/cover.webp" alt="Cover">
</div>

<div align=justify>

# Contenido

- [Introducción](#introducción)
- [Accordion](#accordion)
- [Button](#button)
- [Modal](#modal)
- [Checkboxes](#checkboxes)
- [Radios](#radios)


## Introducción

Según la web de [W3.org y sus estándares](https://www.w3.org/WAI/ARIA/apg/patterns/), debemos editar los componentes previamente creados y documentados en el sitio web oficial de Bootstrap para que estos cumplan con los mismos, convirtiéndolos en objetos que ofrezcan una mayor accesibilidad. Los componentes elegidos son:

## Accordion

Ya que los componentes de Bootstrap están bien trabajados y son muy accesibles de por si, es complicado hallar fallos que reparar, sin embargo en los "acordiones", cada botón o cabecera del mismo debe estar encerrado en algún elemento con el `role="heading"`, cosa que por defecto no está implementado.

```html
<h2 class="accordion-header" role="heading">
    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
    </button>
</h2>
```

## Button

Entre los cambios a realizar, uno de ellos podría darse si el objeto a utilizar como botón no es precisamente un `<button>`, sino algo como un enlace (`<a>`), un `<div>` o `<span>`. En estos casos, es necesario indicar su rol con `role="button"`. Tomando en cuenta uno de los botones encontrados en la documentación (específicamente los de [este apartado](https://getbootstrap.com/docs/5.3/components/buttons/#disabled-state)), podemos hacer los siguientes cambios:

1. Agregar un atributo `aria-disabled="true"` si el botón se encuentra inhabilitado.
2. Agregar un `aria-label` para adjuntar una descripción de la acción del botón si esta no se presenta en el contenido del botón.

```html
<button type="button" class="btn btn-primary" disabled aria-disabled="true" aria-label="Acción a realizar">Primary button</button>
```

## Modal

En el modal dado por la [documentación](https://getbootstrap.com/docs/5.3/components/modal/#live-demo) se pueden hacer algunos cambios como:

1. Añadir `role="dialog"` al contenedor en sí.
2. Añadir también el `aria-modal="true"` para indicar que es un modal.

```html
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" aria-modal="true" role="dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```

## Checkboxes

Desde la [documentación](https://getbootstrap.com/docs/5.3/forms/checks-radios/#checks) se puede extraer un ejemplo que puede presentar distintos cambios como:

1. Indicar con `aria-checked` si está *checked* o no.
2. `tabindex="0"` para incluir en la navegación por tabulación a los checkboxes

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" aria-checked="false" tabindex="0">
  <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" aria-checked="true" checked tabindex="0">
  <label class="form-check-label" for="flexCheckChecked">
    Checked checkbox
  </label>
</div>
```

## Radios

De forma similar a los checkboxes, se pueden hacer una serie de cambios:

1. Agregar `aria-checked` para mostrar el estado de los elementos.
2. Indicar su *label* con `aria-labelledby="id-del-label"`.

```html
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" aria-checked="false" aria-labelledby="flexRadioLabel1">
  <label class="form-check-label" for="flexRadioDefault1" id="flexRadioLabel1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" aria-checked="true" checked aria-labelledby="flexRadioLabel2">
  <label class="form-check-label" for="flexRadioDefault2" id="flexRadioLabel2">
    Default checked radio
  </label>
</div>
```

</div>