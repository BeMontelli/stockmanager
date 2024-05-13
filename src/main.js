import 'boxicons'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import { useAuthStore } from '@/stores/auth'

import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

// const authStore = useAuthStore();
// app.provide('authStore', authStore)
// app.config.globalProperties.$authStore = authStore;

app.use(router)

app.mount('#app')
