<template>
	<main>
		<div class="row justify-center">
			<div class="flex xs12 md6">
				<h1 class="va-h1 va-text-center">Acerca de nosotros</h1>
				<h2 class="va-h2 va-text-center">Misión</h2>
				<va-card>
				<va-card-content>Satisfacer las necesidades de nuestros clientes, produciendo las
				mejores mochilas no solo impermeables si no diseñados por los clientes y
				que se ajusten totalmente a su necesidad, para con ello poder llevar y
				transportar cualquier artículo de uso personal con total seguridad.</va-card-content>
				</va-card>
				<h2 class="va-h2 va-text-center">Visión</h2>
				<va-card>
				<va-card-content>Ser una empresa totalmente innovadora, posicionarnos como la empresa
				líder a nivel global, desarrollando las mejores mochilas que se ajusten
				a su necesidad.</va-card-content>
				</va-card>
				<br>
				<h1 class="va-h1 va-text-center">Conocenos</h1>
				<div class="row justify-center">
					<va-card class="flex xs12 md4">
						<va-image src="/images/autores/autor2.jpg" style="height: 200px;" contain />
						<va-card-title class="va-text-center">Francisco Castaneda Morales</va-card-title>
						<va-card-content class="va-text-center">Director General</va-card-content>
					</va-card>
				</div>
				<br>
				<div class="row justify-center">
					<va-card class="flex xs12 md4">
						<va-image src="/images/autores/autor4.jpg" style="height: 200px;" contain />
						<va-card-title class="va-text-center">Nancy Munoz Ramirez</va-card-title>
						<va-card-content class="va-text-center">Finanzas</va-card-content>
					</va-card>
					<va-card class="flex xs12 md4">
						<va-image src="/images/autores/autor1.jpg" style="height: 200px;" contain />
						<va-card-title class="va-text-center">Angelica Patricia Sanchez Flores</va-card-title>
						<va-card-content class="va-text-center">Marketing</va-card-content>
					</va-card>
					<va-card class="flex xs12 md4">
						<va-image src="/images/autores/autor3.jpg" style="height: 200px;" contain />
						<va-card-title class="va-text-center">Ivan Gutierrez Gonzales</va-card-title>
						<va-card-content class="va-text-center">Produccion</va-card-content>
					</va-card>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
  data () {
    return {
		}
  },
}
</script>

<style>
.va-card__title {
	display: block;
}
</style>
