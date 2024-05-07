<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const formData = ref({
  email: '',
  password: ''
});
const error = ref('');

const login = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/v1/login', formData.value);
    // Handle successful login
    console.log(response);
    console.log('Login successful');
  } catch (err) {
    error.value = 'Invalid username or password';
    console.error('Error logging in:', err);
  }
};
</script>

<template>
  <form @submit.prevent="login">
    <div>
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="formData.email">
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="formData.password">
    </div>
    <button type="submit">Login</button>
  </form>
  <p v-if="error" class="error">{{ error }}</p>
</template>

<style>
.error {
  color: red;
}
</style>
