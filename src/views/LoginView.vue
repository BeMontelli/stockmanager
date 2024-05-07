<script setup>
import TheTitle from "@/components/partials/TheTitle.vue";
import FormLogin from "@/components/partials/FormLogin.vue";

import { useRouter } from 'vue-router';
const router = useRouter();

import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore();

if (authStore.isAuthenticated) router.push('/');
</script>

<template>
  <section class="login">
    <TheTitle msg="Login" />

    <FormLogin />
  </section>
</template>

<style>
@media (min-width: 1024px) {
  section.login {
  }
}
</style>