# IPRE App

Este proyecto fue desarrollado con **Vite** y **Vue 3**. A continuación se detallan los pasos para editar y ejecutar la aplicación, incluso si no tienes nada instalado previamente en tu computador.

---

## ✅ Requisitos previos instalados

Antes de comenzar, debes instalar los siguientes programas en tu computador:

1. **Node.js** (incluye `npm`)
   - Descárgalo desde: https://nodejs.org/
   - Recomendado: versión LTS (por ejemplo, 20.x.x o superior)
   - Al instalar Node.js también se instala automáticamente `npm` (el gestor de paquetes de Node).

2. **Editor de código recomendado: Visual Studio Code**
   - Descarga desde: https://code.visualstudio.com/

---

## ▶️ Correr el proyecto

Una vez que tengas instalados Node.js y npm, sigue estos pasos en orden:

1. **Clona o descarga este proyecto**
   - Si te lo mandaron como una carpeta `.zip`, descomprímela en una carpeta de tu computador.

2. **Abre una terminal dentro de la carpeta del proyecto**
   - En Windows: abre la carpeta, escribe `cmd` en la barra de dirección y presiona Enter.
   - O bien, si usas Visual Studio Code, haz clic en "Terminal" → "New Terminal".

3. **Instala las dependencias**
   ```bash
   npm install
   ```
4. **Ejecuta el servidor local de desarrollo**
   ```bash
   npm run dev
   ```
   Se mostrará una URL (por ejemplo, http://localhost:5173) en la consola. Ábrela en tu navegador para ver la aplicación.

---

## 🖥️ Vistas disponibles

La aplicación cuenta con 4 vistas principales que puedes probar accediendo a las siguientes rutas desde tu navegador. Todas se cargan sobre el servidor local (`http://localhost:5173`) que se inicia con `npm run dev`.

---

### 🔹 Etapa 3 - Bajo involucramiento
**Ruta:** [`http://localhost:5173/bajo-E3`](http://localhost:5173/bajo-E3)

- Muestra productos de ropa de bajo involucramiento.
- Puedes editar los **colores por defecto** de los precios y del botón de agregar en:  
  `src/assets/style-tarjeta.css`, en las siguientes líneas:
  ```css
  --color-precio-default: #XXXXXX;
  --color-boton-agregar-carrito: #XXXXX;
- La información de los productos se encuentra en:
`src/data/productos-E3-bajo.js`

- Para cada producto individual también puedes personalizar los colores así:
```js
colorPrecio: "#xxxxxx"  // color individual del precio
colorBoton: "#xxxxxx"    // color individual del botón
```

---

### 🔹 Etapa 3 - Alto involucramiento  
**Ruta:** [`http://localhost:5173/Alto-E3`](http://localhost:5173/Alto-E3)

Muestra notebooks como productos de alto involucramiento.

Puedes editar los **colores por defecto** en el archivo:  
`src/assets/style-tarjeta.css`, en las siguientes variables CSS:

```css
--color-precio-default: #XXXXX;
--color-boton-agregar-carrito: #XXXXX;
```
- La información de los productos está en:
`src/data/productos-alto.js`

T- ambién puedes personalizar individualmente los colores de cada producto usando:

```js
colorPrecio: "#xxxxxx",   // color individual del precio
colorBoton: "#xxxxxx"     // color individual del botón
```

---
### 🔹 Etapa 4 - Bajo involucramiento  
**Ruta:** [`http://localhost:5173/bajo-E4`](http://localhost:5173/bajo-E4)

Esta vista se divide en dos secciones:

---

#### Producto principal (grande)  
**Ejemplo:** un polar.

- **Información editable en:**  
  `src/data/producto-bajo.js`

- **Estilos personalizables en:**  
  `src/assets/style-E4.css`

```css
--color-precio-grande-E4: #1a8f2b;
--color-boton-agregar: #007bff;
```

#### Productos Recomendados  

- **Información editable en:**  
  `src/data/productos-E4-bajo.js`

- **Estilos editables en:**  
  `src/assets/style-tarjeta.css`
  (similar a etapa 3)

---
### 🔹 Etapa 4 - Alto involucramiento  
**Ruta:** [`http://localhost:5173/alto-E4`](http://localhost:5173/alto-E4)

Esta vista también se divide en dos secciones:

---

#### 🧍 Producto principal (grande)  
**Ejemplo:** un notebook Dell.

- **Datos en:**  
  `src/data/producto-alto.js`

- **Estilos personalizables en:**  
  `src/assets/style-E4.css`

```css
--color-precio-grande-E4: #XXXXX;
--color-boton-agregar: #XXXXX;
```
#### Productos Recomendados  

- **Información editable en:**  
  `src/data/productos-alto.js`

- **Estilos editables en:**  
  `src/assets/style-tarjeta.css`
  (similar a etapa 3)

---

# Resumen de la personalización

- Todos los estilos se configuran mediante variables CSS.
- Cada producto puede tener su propio color editándolo del js o tomar los valores por defecto definidos en el archivo de estilos correspondiente.
- Puedes editar los archivos .js en la carpeta src/data/ para cambiar nombres, precios, colores, imágenes, etc.# ipre
