<script setup lang="ts">
import { isAuthenticated, logout } from './AuthProvider.vue';
</script>

<template>
    <header class="p-3">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <ul class="nav col-6 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <RouterLink to="/" class="nav-link px-2">Home</RouterLink>
                    <RouterLink to="/shop" class="nav-link px-2">Shop</RouterLink>
                </ul>

                <div v-if="isAuthenticated">
                    <button class="btn btn-danger" @click="logout">Logout</button>
                </div>
                <div class="text-end" v-else>
                    <RouterLink to="/login" class="btn btn-primary mx-2 px-2">Login</RouterLink>
                    <RouterLink to="/signup" class="btn btn-warning px-2">Signup</RouterLink>
                </div>
            </div>
        </div>
    </header>
</template>