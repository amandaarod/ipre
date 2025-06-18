import { createRouter, createWebHistory } from 'vue-router'
import Etapa3Bajo from '../views/Etapa3Bajo.vue'
import Etapa4Alto from '../views/Etapa4Alto.vue'
import Etapa4Bajo from '../views/Etapa4Bajo.vue'
import Etapa3Alto from '../views/Etapa3Alto.vue'

const routes = [
  { path: '/bajo-E3', component: Etapa3Bajo },
  { path: '/bajo-E4', component: Etapa4Bajo},
  { path: '/alto-E4', component: Etapa4Alto},
  { path: '/alto-E3', component: Etapa3Alto}
]

export default createRouter({
  history: createWebHistory(),
  routes
})
