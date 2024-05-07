<template>
  <section class="login">
    <TheTitle msg="Login" />
  </section>
</template>

<style>
@media (min-width: 1024px) {
  section.login {
  }
}
</style>
<script>
import TheTitle from "@/components/partials/TheTitle.vue";
export default {
  components: {TheTitle}
}
</script>