<template>
  <div>

    <h1 class="sectioned">Login</h1>

    <LoginForm class="sectioned" />

    <router-link to="/register" class="centered"><p>Don't have an account?</p></router-link>

  </div>
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
