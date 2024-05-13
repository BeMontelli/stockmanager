import { defineStore } from 'pinia';

export const useShopStore = defineStore({
  id: 'shop',
  state: () => ({
    products: [],
    orders: [],
  }),
  actions: {
    setProducts(products) {
      this.products = products;
      this.persistState();
    },
    setOrders(orders) {
      this.orders = orders;
      this.persistState();
    },
    empty() {
      this.products = [];
      this.orders = [];
      this.persistState();
    },
    persistState() {
      localStorage.setItem('shopStore', JSON.stringify(this.$state));
    },
    initState() {
      const savedState = localStorage.getItem('shopStore');
      if (savedState) {
        const parsedState = JSON.parse(savedState);
        Object.assign(this.$state, parsedState);
      }
    },
  },
  created() {
    this.initState();
  },
});