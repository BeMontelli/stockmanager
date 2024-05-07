import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: null,
    token: null,
    isAuthenticated: false,
  }),
  actions: {
    setUser(user, token) {
      this.user = user;
      this.token = token;
      this.isAuthenticated = true;
      this.persistState();
    },
    logout() {
      console.log("logout");
      this.user = null;
      this.token = null;
      this.isAuthenticated = false;
      this.persistState();
    },
    persistState() {
      console.log("persistState",JSON.stringify(this.$state));
      localStorage.setItem('authStore', JSON.stringify(this.$state));
    },
    initState() {
      console.log("initState");
      const savedState = localStorage.getItem('authStore');
      console.log(savedState);
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