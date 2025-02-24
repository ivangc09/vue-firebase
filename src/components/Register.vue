<script setup>
import { ref } from "vue";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();
const errorMessage = ref("");

const register = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    router.push("/dashboard");
  } catch (error) {
    errorMessage.value = error.message;
  }
};

const goBack = () => {
  router.push("/");
};
</script>

<template>
  <div class="register-container">
    <h2>Registro</h2>
    <input v-model="email" type="email" placeholder="Correo" />
    <input v-model="password" type="password" placeholder="Contraseña" />
    <div class="buttons">
        <button @click="register">Registrarse</button>
        <button @click="goBack">Regresar</button>
    </div>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<style>
.register-container {
    background-color: gray;;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 400px;
    text-align: center;
    padding: 0 20px;
    border-radius: 10px;
}

.register-container input{
    border-radius: 5px;
    border: 1px solid #ccc;
    margin: 10px;
}

.buttons {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>