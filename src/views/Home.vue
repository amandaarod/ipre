<template>
  <div class="home">
    <h1>Explorar Etapas</h1>
    <ul>
      <li><router-link to="/bajo-E3">Etapa 3 - Bajo involucramiento</router-link></li>
      <li><router-link to="/alto-E3">Etapa 3 - Alto involucramiento</router-link></li>
      <li><router-link to="/bajo-E4">Etapa 4 - Bajo involucramiento</router-link></li>
      <li><router-link to="/alto-E4">Etapa 4 - Alto involucramiento</router-link></li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 1rem 0;
}

a {
  text-decoration: none;
  color: #007bff;
}
</style>
