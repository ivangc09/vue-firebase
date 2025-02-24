<script setup>
import { ref } from "vue";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();
const errorMessage = ref("");

const login = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
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
    <div class="login-container">
        <h2>Iniciar Sesión</h2>
        <input v-model="email" type="email" placeholder="Correo" />
        <input v-model="password" type="password" placeholder="Contraseña" />
        <div class="buttons">
            <button @click="login">Iniciar Sesión</button>
            <button @click="goBack">Regresar</button>
        </div>
        <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
</template>

<style>
.login-container {
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

.login-container input{
    border-radius: 5px;
    border: 1px solid #ccc;
    margin: 10px;
}


.buttons{
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 10px;
}

.buttons button{
    background-color: #007bff;
    color: white;
    border: none;
    padding: 15px 30px;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    letter-spacing: 1px;
}

.button:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
}

.button:active {
    transform: translateY(2px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

</style>
