<script>
import products from "@/stores/products";

const atributos = new Map();

products.forEach(p => {
	Object.keys(p.Atributos).forEach(a => {
		let attr = atributos.get(a);
		if (attr) {
			if (p.Atributos[a]) {
				attr.add(p.Atributos[a])
			}
		} else {
			atributos.set(a, new Set());
			if (p.Atributos[a]) {
				atributos.get(a).add(p.Atributos[a]);
			}
		}
	})
});

export default {
  data() {
    return {
			atributos,
			valores: {},
		}
  },
	methods: {
		handleSubmit() {
			this.$emit("filtrar", this.valores);
		},
		reset() {
			this.valores = {};
			this.$emit("filtrar", this.valores);
		}
	}
}
</script>

<template>
	<va-form class="xs12 md6 justify-center row" tag="form" @submit.prevent="handleSubmit">

		<div class="flex xs12">
		<div class="filtro flex xs12 row" v-for="[nombre, valor] in atributos">
			<template v-if="nombre != 'Precio'">
				<label class="xs12 md2">
					{{nombre}}
				</label>
				<va-select class="xs12 md10" v-model="valores[nombre]" :options=Array.from(valor) />
			</template>
		</div>
		</div>

		<va-button type="submit" class="xs12 md5 flex">
			Filtrar
		</va-button>
		<div class="md2 flex"></div>
		<va-button @click="reset" class="xs12 md5 flex">
			Reiniciar filtro
		</va-button>
	</va-form>
</template>

<style scoped>
.filtro {
	margin-bottom: 0.7em;
}

label {
max-width: 100px;
}

/*.va-select {
	width: 90%;
}*/
</style>
