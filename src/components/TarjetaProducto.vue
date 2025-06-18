<template>
  <div class="tarjeta">
    <img :src="imagen" alt="Imagen del producto" class="imagen" />
    <div class="contenido">
      <h3 class="marca">{{ marca }}</h3>
      <p class="nombre">{{ nombre }}</p>

      <div class="precios">
        <span v-if="precioOriginal" class="precio-original">
          ${{ precioOriginal.toLocaleString() }}
        </span>
        <div class="precio-con-descuento">
          <span
            v-if="descuento"
            class="descuento"
            :style="{ color: colorPrecio }"
          >
            {{ descuento }}%
          </span>
          <span class="precio" :style="{ color: colorPrecio }">
            ${{ precio.toLocaleString() }}
          </span>
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
  precio: Number,
  precioOriginal: Number,
  descuento: Number,
  colorPrecio: {
    type: String,
    default: 'var(--color-precio-default)'
  },
  colorBoton: {
    type: String,
    default: 'var(--color-boton-default)'
  }
})
</script>
