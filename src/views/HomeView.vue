<template>
	<main>
		<va-carousel :items="items" v-model="value" :ratio="4/1"/>
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
        '/niyaf/images/carrusel/image1.jpeg',
        '/niyaf/images/carrusel/image2.jpeg',
        '/niyaf/images/carrusel/image3.jpeg',
        '/niyaf/images/carrusel/image4.jpeg',
        '/niyaf/images/carrusel/image5.jpeg',
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
