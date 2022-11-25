<template>
	<main>
		<va-carousel :items="items" v-model="value" />
		<va-divider />
		<div class="row">
			<ProductCard v-for="p in products" :nombre=nombreMochila(p) :precio=p.Atributos.Precio
				:image=p.Imágenes :productId=p.Modelo class="flex md6 xs12"/>
		</div>
		<div class="row justify-center">
			<div class="flex">
				<va-button to="/tienda">Ingresa a la tienda</va-button>
			</div>
		</div>
	</main>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue"
import products from "@/stores/products"

export default {
	components: {
			ProductCard
	},
  data () {
    return {
      value: 0,
      items: [
        'https://picsum.photos/1500',
        'https://picsum.photos/1501',
        'https://picsum.photos/1502',
        'https://picsum.photos/1503',
        'https://picsum.photos/1504',
      ],
			products: [
				products[0],
				products[1],
				products[2],
				products[3],
			]
    }
  },
	methods: {
		nombreMochila(p) {
			return `Mochila ${p.Modelo} color ${p.Atributos.Color} marca ${p.Atributos.Marca}`
		}
	}
}
</script>

<style>
</style>
