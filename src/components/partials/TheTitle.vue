<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <section class="page__title_area">
    <div class="container">
      <h1 class="page__title">{{ msg }}</h1>
    </div>
  </section>
</template>

<style scoped>
.page__title_area{
  text-align: center;
}
.page__title{
  position: relative;
  text-align: center;
  font-weight: bold;
  color: hsl(11, 92%, 65%);
  display: inline-block;
  margin: 0 auto;
  padding: 0 20px;
}
.page__title:before,.page__title:after{
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  height: 3px;
  width: 200px;
  border-radius: 3px;
  background-color: hsl(11, 92%, 65%);
}
.page__title:before{
  right: 100%;
  background-color: #06BBC8;
}
.page__title:after{
  left: 100%;
  background-color: #86D610;
}
</style>