<template>
  <nav class="navbar">
    <div class="logo">
      🛍️ <strong>Tienda Virtual</strong>
    </div>
    <div class="search-cart">
      <div class="search-box">
        <input type="text" placeholder="Buscar..." />
        <span class="lupa">🔍</span>
      </div>
      <div class="carrito">🛒</div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
  z-index: 10;
}

.logo {
  font-size: 1.2rem;
  color: #333;
  padding-left: 25px;
}

.links {
  list-style: none;
  display: flex;
  gap: 20px;

}

.links li a {
  text-decoration: none;
  color: #007bff;
  font-weight: 500;
}

.search-cart {
  display: flex;
  align-items: center;
  gap: 16px;
}

.search-box {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 4px 8px;
  width: 300px;
  margin-right: 50px;
}

.search-box input {
  border: none;
  outline: none;
  width: 100%;
}

.lupa {
  margin-left: 4px;
  color: #888;

}

.carrito {
  font-size: 1.4rem;
  cursor: pointer;
  padding-right: 50px;
}
</style>
