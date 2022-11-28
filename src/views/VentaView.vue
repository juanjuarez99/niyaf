<template>
	<main>
	<div class="row justify-center">
		<div class="xs12 md1">
			<h2 class="va-h2 va-text-center">Venta por ${{carrito.getCartTotal}}</h2>
			<va-divider/>
			<va-form @submit.prevent>
				<div class="row flex">
					<va-input label="Nombre" v-model="nombre" class="xs12 md6" />
					<va-input label="Apellidos" v-model="apellidos" class="xs12 md6" />
					<va-input label="Calle" v-model="calle" class="xs12 md6" />
					<va-input label="Codigo postal" v-model="codigopostal" class="xs12 md6" />
					<va-input label="Telefono" v-model="telefono" class="xs12 md6" />
					<va-input label="Correo Electronico" v-model="correo" class="xs12 md6" />
				</div>
				<va-divider/>
				<h3 class="va-h3 va-text-center">Informacion de pago</h3>
				<div class="row flex">
					<va-input label="Numero de tarjeta" v-model="tarjeta" class="xs12 md6" />
					<va-input label="Fecha de expiracion" v-model="fecha" class="xs12 md6" />
					<va-input label="CVV" v-model="cvv" class="xs12 md6" />
				</div>
				<va-divider/>
				<div class="row justify-center">
					<va-button type="submit" class="xs12 md6" @click="comprar">Confirmar pago</va-button>
				</div>
			</va-form>
		</div>
	</div>
	</main>
	<va-modal v-model="mostrarComprar"  hide-default-actions>
		<template #content="{ok}">
			<h1 class="va-h1">Gracias por su compra</h1>
			<br>
			<p>
Hola <b>{{nombre}} {{apellidos}}</b>, se ha confirmado tu compra de forma
exitosa, con un costo total de <b>${{carrito.getCartTotal}}</b> con cargo al número de
cuenta **** **** **** {{tarjeta.substring(tarjeta.length - 4)}}. Eres lo más importante para nosotros, por
ello nos encargaremos de que recibas tu pedido lo antes posible, dentro de los
días hábiles al síguete domicilio: <b>{{calle}} {{codigopostal}}</b>.
</p>
<p>
Gracias por tu compra, agradecemos tu preferencia.
</p>
		</template>
	</va-modal>
</template>

<script>
import { useCartStore } from "@/stores/cart.js";

export default {
  data () {
    return {
			carrito: useCartStore(),
			mostrarComprar: false,
			nombre: "",
			apellidos: "",
			calle: "",
			codigopostal: "",
			telefono: "",
			correo: "",
			tarjeta: "",
			fecha: "",
			cvv: "",
		}
  },
	methods: {
		comprar() {
			this.mostrarComprar = true
		}
	},
}
</script>

<style scoped>
.flex {
	gap: 1em;
}

p + p {
	margin-top: 1em;
}
</style>
