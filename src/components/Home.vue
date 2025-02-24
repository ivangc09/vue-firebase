<template>
    <div class="home-container">
      <h1 class="title">Página de Inicio</h1>
      <p class="welcome-message">Bienvenido a la aplicación</p>
      <div class="buttons-container">
        <button @click="goToLogin" class="button">Iniciar Sesión</button>
        <button @click="goToRegister" class="button">Registrarse</button>
      </div>
    </div>
  </template>
  
<script setup>
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  
  const goToLogin = () => {
    router.push("/login");
  };
  
  const goToRegister = () => {
    router.push("/register");
  };
</script>
  
<style scoped>
  .home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #333;
  color: #fff;
  text-align: center;
  font-family: 'Arial', sans-serif;
  padding: 20px;
}

.title {
  font-size: 3.5rem;
  font-weight: bold;
  color: #f1f1f1;
  text-transform: uppercase;
  margin-bottom: 20px;
  letter-spacing: 2px;
}


.welcome-message {
  font-size: 1.5rem;
  color: #ccc;
  margin-bottom: 40px;
  font-weight: lighter;
}


.buttons-container {
  display: flex;
  gap: 30px;
}

.button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.1rem;
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
  