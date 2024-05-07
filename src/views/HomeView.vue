<script setup>
import TheTitle from "@/components/partials/TheTitle.vue";
import WelcomeMsg from "@/components/partials/WelcomeMsg.vue";

import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore();
authStore.initState();

</script>

<template>
  <main>
    <section class="home">
      <TheTitle v-if="!authStore.isAuthenticated" msg="Home" />
      <TheTitle v-if="authStore.isAuthenticated" msg="Home Logged" />

      <WelcomeMsg v-if="!authStore.isAuthenticated" icon="👍"/>
    </section>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  section.home {
  }
}
</style>
