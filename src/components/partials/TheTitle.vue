<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h1 class="page__title">{{ msg }}</h1>
</template>

<style scoped>
.page__title{
  color: floralwhite;
}
</style>