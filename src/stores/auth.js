import { ref, computed } from 'vue'
import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: null,
    token: null,
    isAuthenticated: false,
  }),
  actions: {
    setUser(user,token) {
      console.log("====== setUser", user, token);
      this.user = user;
      this.token = token;
      this.isAuthenticated = true;
    },
    logout() {
      this.user = null;
      this.token = null;
      this.isAuthenticated = false;
    },
  },
});
