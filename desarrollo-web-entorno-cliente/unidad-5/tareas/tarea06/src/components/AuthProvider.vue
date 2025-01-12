<script lang="ts">
import DatabaseConnection from '@/firebase/firebase';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const database = new DatabaseConnection()
const isAuthenticated = ref(false);
const token = ref('');
const router = useRouter()

function emailIsValid(email: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function passwordIsValid(password: string): boolean {
    const hasMinLength = password.length >= 8;
    const hasNumber = /[0-9]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /\W/.test(password);
    return hasMinLength && hasNumber && hasUpperCase && hasSpecialChar;
}

function isInputValid(email: string, password: string): boolean {
    if (emailIsValid(email) == false) {
        alert('Email no válido!')
        return false
    }
    if (passwordIsValid(password) == false) {
        alert('Contraseña no válida, debe tener al menos 8 caracteres, una letra mayúscula, un número y un símbolo especial.')
        return false
    }
    return true
}

function generateToken() {
    const newToken = Math.random().toString(36).substring(2)
    sessionStorage.setItem('token', newToken);
    isAuthenticated.value = true;
    token.value = newToken;
    return newToken
}

async function signup(email: string, password: string) {
    if (isInputValid(email, password) == false) {
        throw new Error('Credenciales no válidas')
    }
    const userData = {
        email: email,
        password: password
    }
    if (await database.userExists(email) == false) {
        await database.createAccount(userData)
        alert("El usuario acaba de ser creado, por favor, inicie sesión")
    } else {
        alert("El usuario ya existe")
    }
}

async function login(email: string, password: string) {
    if (isInputValid(email, password) == false) {
        throw new Error('Credenciales no válidas')
    }
    const userData = {
        email: email,
        password: password
    }
    if (await database.authenticate(email, password)) {
        const token = generateToken()
        alert('Has iniciado sesión, tu token de sesión es ' + token);
        router.push('/signup');
    }
}

export { signup, login }
</script>

<template>
    <div class="container">
        <slot></slot>
    </div>
</template>