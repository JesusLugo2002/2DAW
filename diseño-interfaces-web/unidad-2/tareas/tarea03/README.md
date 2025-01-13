# WAI-ARIA en Bootstrap

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

