<script setup>
import TheTitle from "@/components/partials/TheTitle.vue";
import WelcomeMsg from "@/components/partials/WelcomeMsg.vue";
import ProductsList from "@/components/partials/ProductsList.vue";

import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore();
authStore.initState();

</script>

<template>
  <main>
    <section class="home">
      <TheTitle v-if="!authStore.isAuthenticated" msg="Home" />
      <WelcomeMsg v-if="!authStore.isAuthenticated" icon="👍"/>

      <TheTitle v-if="authStore.isAuthenticated" msg="Products & Stock" />
      <ProductsList v-if="authStore.isAuthenticated"/>
    </section>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  section.home {
  }
}
</style>
