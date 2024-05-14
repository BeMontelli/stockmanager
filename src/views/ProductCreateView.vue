<script setup>
import TheTitle from "@/components/partials/TheTitle.vue";
import FormProductCreate from '@/components/partials/FormProductCreate.vue';
</script>

<template>
  <section class="product__create">
    <TheTitle msg="Create Product" />

    <FormProductCreate />
  </section>
</template>

<style>
section.product__create {
}
</style>