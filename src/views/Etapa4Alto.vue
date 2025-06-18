<template>

  <div>
    <NavBar />
    <router-view />
  </div>
  <div class="producto-detalle">

    <div class="imagenes">
      <div class="imagenes-grandes">
        <img :src="imagenPrincipal" alt="Producto" class="img-grande" />   
      </div>
      <div class="miniaturas">
        <img
          v-for="(img, i) in imagenes"
          :key="i"
          :src="img"
          class="miniatura"
          @click="cambiarImagenPrincipal(i)"
        />
      </div>
    </div>

    <!-- Info del producto -->
    <div class="info-producto">
      <p class="marca-grande">{{ marca }}</p>
      <h1 class="titulo">{{ nombre }}</h1>
      <p class="descripcion">{{ descripcion }}</p>
      <div class="precio-estrellas">
        <span class="precio-grande">{{ precio }} CLP</span>
        <span class="estrellas">
          <svg
            v-for="n in 5"
            :key="n"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="estrella"
            :class="{ activa: n <= estrellas }"
          >
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        </span>
      </div>
      <button class="boton-agregar">Agregar al carrito</button>
    </div>
  </div>

  <!-- Productos relacionados -->
  <div class="relacionados">
    <h2>Productos relacionados</h2>
    <div class="galeria">
      <TarjetaProductoRecomendado
        v-for="(producto, i) in productos"
        :key="i"
        v-bind="producto"
      />
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'
import TarjetaProductoRecomendado from '../components/TarjetaProductoRecomendado.vue'
import productos from '../data/productos-alto'
import producto from '../data/producto-alto'
import '../assets/style-E4.css';


const { nombre, descripcion, precio, marca, estrellas, imagenes } = producto


const indicePrincipal = ref(0)
const imagenPrincipal = ref(imagenes[indicePrincipal.value])

function cambiarImagenPrincipal(nuevoIndice) {
  indicePrincipal.value = nuevoIndice
  imagenPrincipal.value = imagenes[nuevoIndice]
}
</script>
<style scoped>

.img-grande {
  width: 75%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
