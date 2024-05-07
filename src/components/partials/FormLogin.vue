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
  <div class="container">

    <div class="row">
      <div class="col-md-12">
        <form class="login-form" @submit.prevent="login">
          <div class="form-group mt-4">
            <label for="email">Email</label>
            <input v-model="formData.email" type="email" class="form-control dark-input" id="email" name="email" placeholder="Enter email">
          </div>
          <div class="form-group mt-4">
            <label for="password">Password</label>
            <input v-model="formData.password" type="password" class="form-control dark-input" id="password" name="password" placeholder="Password">
          </div>
          <p v-if="error" class="error align-mid">{{ error }}</p>
          <div class="form-group mt-4 mx-auto d-grid gap-2 col-6 mx-auto">
            <button type="submit" class="btn btn-primary btn-block btn-lg">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.error {
  color: red;
}
.btn{
  background-color: hsl(11, 92%, 65%);
  border-color: hsl(11, 92%, 65%);
}
.btn:hover{
  background-color: hsl(184, 94%, 40%);
  border-color: hsl(184, 94%, 40%);
}
</style>
