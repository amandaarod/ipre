<script setup>
import TarjetaProducto from '../components/TarjetaProducto.vue'
import NavBar from '../components/NavBar.vue';
import productos from '../data/productos-E3-bajo';

</script>

<template>
<div>
    <NavBar />
    <router-view />
  </div>
  <div class="galeria">
    <TarjetaProducto
      v-for="p in productos"
      :key="p.id"
      v-bind="p"
    />
  </div>
</template>

<style scoped>
.galeria {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 3%;
}
</style>
