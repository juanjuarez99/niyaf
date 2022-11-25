<script>
import { useCartStore } from "@/stores/cart.js";

export default {
  data() {
    return {
			carrito: useCartStore(),
		}
  }
}
</script>

<template>
 <va-navbar color="primary" class="xs">
    <template #left>
      <va-navbar-item>
				<router-link to="/"><img class="logo" src="../assets/logo.jpg"></router-link>
			</va-navbar-item>
    </template>
    <template #right>
      <va-navbar-item>
				<router-link to="/tienda">Tienda</router-link>
			</va-navbar-item>
      <va-navbar-item>
				<router-link to="/acerca-de">Acerca de</router-link>
			</va-navbar-item>
      <va-navbar-item>
				<va-badge :text="carrito.countCartItems" overlap>
				<router-link to="/carrito">
					<va-icon name="shopping_cart" />
				</router-link>
				</va-badge>
			</va-navbar-item>
    </template>
  </va-navbar>
</template>

<style scoped>
.va-navbar {
	height: auto;
	min-height: 4.0625rem;
}

.logo {
	max-height: 100px;
}

a {
	color: white;
	padding: 0.5em 0.8em;
}

a:hover {
	outline: 1px solid white;
}
</style>
