<script>

</script>

<template>
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-4">Portafolio</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><RouterLink to="/about">Sobre mi</RouterLink></li>
        <li class="nav-item"><RouterLink to="/projects">Proyectos</RouterLink></li>
        <li class="nav-item"><RouterLink to="/skills">Habilidades</RouterLink></li>
        <li class="nav-item"><RouterLink to="/experience">Experiencias</RouterLink></li>
        <li class="nav-item"><RouterLink to="/contact">Contacto</RouterLink></li>
      </ul>
    </header>
</template>

<style>

</style>