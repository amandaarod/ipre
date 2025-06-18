<template>
  <div class="tarjeta">
    <img :src="imagen" alt="Imagen del producto" class="imagen" />
    <div class="contenido">
      <h3 class="marca">{{ marca }}</h3>
      <p class="nombre">{{ nombre }}</p>

      <!-- Número de Estrellas (opcional) -->
      <div v-if="typeof estrellas === 'number'" class="estrellas">
        <svg
          v-for="n in 5"
          :key="n"
          xmlns="http://www.w3.org/2000/svg"
          class="estrella"
          viewBox="0 0 24 24"
          fill="currentColor"
          :class="{ activa: n <= estrellas }"
        >
          <path
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      </div>

      <div class="precios">
        <span
          v-if="precioOriginal && precioOriginal !== ''"
          class="precio-original"
          >${{ precioOriginal }}</span
        >
        <div class="precio-con-descuento">
          <span
            v-if="descuento && descuento !== ''"
            class="descuento"
            :style="{ color: colorPrecio }"
            >{{ descuento }}%</span
          >
          <span class="precio" :style="{ color: colorPrecio }"
            >${{ precio }}</span
          >
        </div>
      </div>

      <button
        class="boton-carro"
        :style="{ borderColor: colorBoton, color: colorBoton }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="icono"
        >
          <path d="M6 6h15l-1.5 9H6z" />
          <circle cx="9" cy="21" r="1" />
          <circle cx="18" cy="21" r="1" />
        </svg>
        Agregar al carro
      </button>
    </div>
  </div>
</template>

<script setup>
import '../assets/style-tarjeta.css'
defineProps({
  imagen: String,
  nombre: String,
  marca: String,
  precio: String,
  precioOriginal: String,
  descuento: String,
  estrellas: Number, // opcional
  colorPrecio: {
    type: String,
    default: 'var(--color-precio-default)'
  },
  colorBoton: {
    type: String,
    default: 'var(--color-boton-default)'
  },
})
</script>
