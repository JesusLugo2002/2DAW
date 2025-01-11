<script setup lang="ts">
import { signup } from '@/components/AuthProvider.vue';

function execSignup() {
    const emailElement = document.getElementById('floatingEmail') as HTMLInputElement;
    const passwordElement = document.getElementById('floatingPassword') as HTMLInputElement;
    const email = emailElement.value;
    const password = passwordElement.value;
    signup(email, password)
}
</script>

<template>
    <main class="form-signin w-100 m-auto">
        <form @submit.prevent="execSignup">
            <h1 class="mb-3 fw-normal">Please Signup</h1>

            <div class="form-floating">
                <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com">
                <label for="floatingEmail">Email address</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
            </div>
            <button class="btn btn-primary w-100 py-2" type="submit">Signup</button>
        </form>
    </main>
</template>