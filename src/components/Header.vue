<script setup>
import { RouterLink } from 'vue-router'

import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore();
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/stockmanager-logo.png" width="70" height="70" />

    <div class="wrapper">
      <nav>
        <ul>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink v-if="!authStore.isAuthenticated" to="/login">Login</RouterLink>
          <RouterLink v-if="!authStore.isAuthenticated" to="/register">Register</RouterLink>
          <RouterLink v-if="authStore.isAuthenticated" to="/logout">Logout</RouterLink>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  align-content: center;
  justify-content: center;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}

.logo {
  display: block;
  margin: 0;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 1.2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {

  header {
    margin: 20px 0;
  }
  nav {
    font-size: 1rem;
  }
}
</style>