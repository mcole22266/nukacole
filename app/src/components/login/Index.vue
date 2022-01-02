<template>

  <h1 class="container sectioned">Login</h1>

  <LoginForm class="container sectioned" />

</template>

<script>
import LoginForm from './LoginForm.vue';

export default {
  name: 'Login Index',
  components: {
    LoginForm,
  },
};
</script>

<style>

</style>
