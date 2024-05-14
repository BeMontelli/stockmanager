<script setup>
import TheTitle from "@/components/partials/TheTitle.vue";
import FormProduct from '@/components/partials/FormProduct.vue';
</script>

<template>
  <section class="product__create">
    <TheTitle msg="Create Product" />

    <FormProduct />
  </section>
</template>

<style>
section.product__create {
}
</style>