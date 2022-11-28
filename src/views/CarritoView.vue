<template>
	<main>
	<h1 class="va-h1 va-text-center">Carrito</h1>
	<div class="row justify-center">
		<va-list class="flex xs12 md6">
			<va-list-item class="list__item" v-for="p in carrito.getCartItems" :key="p.Modelo">
				<va-list-item-section avatar>
				 <va-avatar>
					<img :src="`/images/${p.Imágenes}.jpg`">
				 </va-avatar>
				</va-list-item-section>
				<va-list-item-section class="va-text-center">
					<router-link :to="`/productos/${p.Modelo}`">{{p.Nombre}} {{p.Modelo}}</router-link>
				</va-list-item-section>
				<va-list-item-section>
					x{{p.quantity}}
				</va-list-item-section>
				<va-list-item-section>
					${{p.quantity * p.Atributos.Precio}}
				</va-list-item-section>
				<va-list-item-section>
					<va-button color="danger" icon="clear" @click="carrito.removeFromCart(p)">
					</va-button>
				</va-list-item-section>
			</va-list-item>
		</va-list>
	</div>
	<h3 class="va-h3 va-text-center">Total: ${{carrito.getCartTotal}}</h3>
	<div class="row justify-center">
		<va-button to="/venta" class="xs12 md4">Confirmar compra</va-button>
	</div>
	</main>
</template>

<script>
import { useCartStore } from "@/stores/cart.js";

export default {
  data () {
    return {
			carrito: useCartStore(),
		}
  }
}
</script>

<style scoped>
.list__item + .list__item {
  margin-top: 20px;
}
</style>
