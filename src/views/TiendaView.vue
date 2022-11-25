<template>
	<main>
		<div class="row justify-center">
			<FiltroTienda @filtrar="actualizarFiltro"/>
			<div class="row">
			<ProductCard v-for="p in productosFiltrados" :nombre=nombreMochila(p) :precio=p.Atributos.Precio
				:image=p.Imágenes :productId=p.Modelo :key=p.Modelo class="flex md6 xs12"/>
			</div>
		</div>
	</main>
</template>

<script>
import FiltroTienda from "@/components/FiltroTienda.vue";
import ProductCard from "@/components/ProductCard.vue";
import products from "@/stores/products";

export default {
	components: {
			ProductCard,
			FiltroTienda,
	},
  data () {
    return {
			products,
			filtro: {}
		}
  },
	methods: {
		nombreMochila(p) {
			return `Mochila ${p.Modelo} color ${p.Atributos.Color} marca ${p.Atributos.Marca}`
		},
		actualizarFiltro(f) {
			this.filtro = f;
		}
	},
	computed: {
		productosFiltrados() {
			console.log("Actualizado");
			let productos = [];
			this.products.forEach(p => {
				let agregar = true;
				for (const [key, value] of Object.entries(p.Atributos)) {
					if (this.filtro[key]) {
						if (value != this.filtro[key]) {
							agregar = false;
						}
					}
				}
				if (agregar) {
					productos.push(p);
				}
			})
			return productos;
		}
	}
}
</script>

<style>
</style>
