<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue"
</script>

<template>
	<Header />
  <RouterView />
	<div class="footer">
	<p class="va-text-center">Creado por Juan de Dios Juárez Castro (juarez.c.juan.d@gmail.com) - 18030514 Ingenieria ITESA</p>
	</div>
</template>

<style>
html, body {
	height: 100%;
}

#app {
	min-height: 100%;
	position: relative;
}

main {
	padding-bottom: 6em;
}

.footer {
	width: 100%;
	position: absolute;
	bottom: 0;
	padding: 1em;
	text-align: center;
	font-weight: bold;
	display: block;
}
</style>
