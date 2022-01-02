<template>
  <div>

    <h1 class="sectioned">Login</h1>

    <LoginForm class="sectioned" />

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
