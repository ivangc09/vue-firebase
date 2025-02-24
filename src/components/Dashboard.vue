<template>
    <div class="dashboard-container">
      <h1 class="title">Bienvenido al Dashboard</h1>
      <p class="user-info">¡Hola, {{ user.name }}! Estás autenticado.</p>
      <button @click="logout" class="logout-button">Cerrar Sesión</button>
    </div>
  </template>
  
<script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { getAuth, signOut } from "firebase/auth";
  
  const router = useRouter();
  const user = ref({ name: "Usuario" });
  
  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        router.push("/login");
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
  };
  </script>
  
<style scoped>
.dashboard-container {
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
    font-size: 3rem;
    font-weight: bold;
    color: #f1f1f1;
    text-transform: uppercase;
    margin-bottom: 20px;
    letter-spacing: 2px;
}


.user-info {
    font-size: 1.5rem;
    color: #ccc;
    margin-bottom: 40px;
    font-weight: lighter;
}


.logout-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 12px 25px;
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 1px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.logout-button:hover {
    background-color: #c82333;
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
}

.logout-button:active {
    transform: translateY(2px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
</style>