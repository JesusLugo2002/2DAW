<script setup lang="ts">
import AuthProvider from './components/AuthProvider.vue';
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar />
  <AuthProvider>
    <RouterView />
  </AuthProvider>
</template>
