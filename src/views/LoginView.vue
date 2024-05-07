<script setup>
import TheTitle from "@/components/partials/TheTitle.vue";
import FormLogin from "@/components/partials/FormLogin.vue";
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