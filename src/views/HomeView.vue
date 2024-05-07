<script setup>
import TheTitle from "@/components/partials/TheTitle.vue";
import WelcomeMsg from "@/components/partials/WelcomeMsg.vue";

</script>

<template>
  <main>
    <section class="home">
      <TheTitle msg="Home" />
      <WelcomeMsg icon="👍"/>
    </section>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  section.home {
  }
}
</style>
