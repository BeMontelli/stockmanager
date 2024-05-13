<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore();

import { useShopStore } from '@/stores/shop'
const shopStore = useShopStore();
shopStore.initState();

const products = ref(shopStore.products);

onMounted(() => {
  if(!shopStore.products.length) fetchProducts();
});

if(!authStore.isAuthenticated) router.push('/login');

const fetchProducts = () => {
    axios.get('http://127.0.0.1:8000/api/v1/products', {
      headers: {
        Authorization: 'Bearer '+authStore.token
      }
    })
      .then(response => {
        products.value = response.data;
        console.log(response.data);
        shopStore.setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products message:', error);
      });
};
</script>

<template>
  <section class="page__products">
    <div v-if="products.length > 0">
      <ul class="row">
        <li class="col-lg-3 col-md-4 col-sm-6 col-12" v-for="product in products" :key="product.id">
          <div class="card mb-3">
            <div class="card-img" :style="{ backgroundImage: 'url(http://127.0.0.1:8000/' + product.image + ')' }"></div>
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <div class="price-line">
                <span class="price">{{ product.price }} €</span>
              </div>
              <div class="actions-line">
                <a href="#" class="btn btn-primary">-</a>
                <span class="stock">{{ product.stock }}</span>
                <a href="#" class="btn btn-primary">+</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      No products available.
    </div>
  </section>
</template>

<style scoped>

.page__products{
  margin-top: 40px;
}
.page__products ul{
  list-style-type: none;
}

.card .card-title{
  height: 48px;
}
.card .card-text{
  height: 55px;
}
.card-img{
  width: 100%;
  height: 200px;
  /*background-size: cover;*/
  /*background-repeat: no-repeat;*/
  /*background-position: center center;*/
  background: center center/cover no-repeat;
}
.card .price-line{
  border-top: solid 1px #d5d5d5;
  text-align: center;
  padding: 15px 0;
}
.card .price{
  font-weight: bold;
  font-size: 18px;
}
.card .actions-line{
  border-top: solid 1px #d5d5d5;
  padding-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card .stock{
  font-weight: bold;
  font-size: 16px;
}

</style>