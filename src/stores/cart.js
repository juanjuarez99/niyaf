import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
	state: () => {
		return {
			products: []
		};
	},
	getters: {
		countCartItems() {
			return this.products.length;
		},
		getCartItems() {
			return this.products;
		},
		getCartTotal() {
			let total = 0;
			this.products.forEach(p => 
				total += p.Atributos.Precio * p.quantity
			);
			return total;
		}
	},
	actions: {
		addToCart(item) {
			let index = this.products.findIndex(p => p.Modelo === item.Modelo);
			if (index !== -1) {
				this.products[index].quantity += 1;
			} else {
				this.products.push({
					...item,
					quantity: 1
				});
			}
		},
		removeFromCart(item) {
			this.products = this.products.filter(p => p.Modelo !== item.Modelo);
		}
	}
});
