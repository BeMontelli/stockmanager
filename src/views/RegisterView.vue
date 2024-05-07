<script setup>
import TheTitle from "@/components/partials/TheTitle.vue";
import FormRegister from '@/components/partials/FormRegister.vue';
</script>

<template>
  <section class="register">
    <TheTitle msg="Register" />

    <FormRegister />
  </section>
</template>

<style>
@media (min-width: 1024px) {
  section.register {
  }
}
</style>