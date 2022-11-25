<template>
	<main>
		<div class="row justify-center">
			<h1 class="va-h1">{{producto.Nombre}}</h1>
		</div>
		<va-divider />
		<div class="row justify-center">
			<va-image contain :src="`/images/${producto.Imágenes}.jpg`" class="flex sm6 xs12"/>
		</div>
		<va-divider />
		<div class="row justify-center">
			<div class="flex xs12 va-text-center va-h4">Precio: ${{producto.Atributos.Precio}}</div>
			<va-button @click="carrito.addToCart(producto)" class="flex xs12 md4 va-text-center">Añadir al carrito</va-button>
		</div>
		<va-divider />
		<div class="row justify-center">
			<div class="flex xs12 md6">
				<va-tabs v-model="tab">
					<template #tabs>
						<va-tab >Descripción</va-tab>
						<va-tab >Especificaciones</va-tab>
					</template>
				</va-tabs>
				<va-card square outlined>
					<va-card-content>
						<template v-if="tab == 0">
						{{ producto.Descripción }}
						</template>
						<template v-else>
							<va-list>
								<va-list-item v-for="atributo in Object.keys(producto.Atributos)" :key="atributo">
									<va-list-item-section>
										<b>{{atributo}}</b>
									</va-list-item-section>
									<va-list-item-section>
										{{producto.Atributos[atributo]}}
									</va-list-item-section>
								</va-list-item>
							</va-list>
						</template>
					</va-card-content>
				</va-card>
			</div>
		</div>
	</main>
</template>

<script>
import products from "@/stores/products"
import { useCartStore } from "@/stores/cart.js";

export default {
  data () {
    return {
			producto: products.filter(p => 
				p.Modelo == this.$route.params.id
			)[0],
			tab: 0,
			carrito: useCartStore(),
		}
  }
}
</script>

<style scoped>
.va-image {
	max-height: 300px;
}
</style>
