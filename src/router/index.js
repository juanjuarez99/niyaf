import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TiendaView from "../views/TiendaView.vue";
import AcercaView from "../views/AcercaView.vue";
import ProductoView from "../views/ProductoView.vue";
import CarritoView from "../views/CarritoView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/tienda",
      name: "tienda",
      component: TiendaView,
    },
    {
      path: "/acerca-de",
      name: "acerca",
      component: AcercaView,
    },
    {
			path: "/productos/:id",
      name: "productos",
      component: ProductoView,
    },
		{
      path: "/carrito",
      name: "carrito",
      component: CarritoView,
		}
  ],
});

export default router;
