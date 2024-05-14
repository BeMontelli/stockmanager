<script setup>
import TheTitle from "@/components/partials/TheTitle.vue";
import FormProductEdit from '@/components/partials/FormProductEdit.vue';
</script>

<template>
  <section class="product__edit">
    <TheTitle msg="Edit Product" />

    <FormProductEdit />
  </section>
</template>

<style>
section.product__edit {
}
</style>