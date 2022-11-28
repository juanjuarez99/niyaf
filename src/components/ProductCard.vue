<script>
export default {
  data() {
    return {}
  },
	props: ['image', 'nombre', 'precio', 'productId'],
	computed: {
		productLink() {
			return `/productos/${this.productId}`
		}
	},
}
</script>

<template>
	<div class="container">
		<va-card :to=productLink>
			<va-image contain
			:src="`/niyaf/images/${image}.jpg`"
			style="height: 200px;"
			/>
			<va-card-title>${{precio}}</va-card-title>
			<va-card-content>{{nombre}}</va-card-content>
		</va-card>
	</div>
</template>

<style scoped>
.container {
	padding: 1em;
}
</style>
