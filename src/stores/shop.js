import { defineStore } from 'pinia';

export const useShopStore = defineStore({
  id: 'shop',
  state: () => ({
    products: [],
    categories: [],
    orders: [],
  }),
  actions: {
    setProducts(products) {
      this.products = products;
      this.setCategoriesFromProducts(products);
    },
    setCategoriesFromProducts(products) {
      this.categories = [];
      const categoriesTitles = products.reduce((acc, product) => {
        product.categories.forEach(category => {
          if (!acc.includes(category.title)) {
            acc.push(category.title);
            this.categories.push(category);
          }
        });
        return acc;
      }, []);
      this.persistState();
    },
    setOrders(orders) {
      this.orders = orders;
      this.persistState();
    },
    empty() {
      this.products = [];
      this.categories = [];
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