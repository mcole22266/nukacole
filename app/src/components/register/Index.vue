<template>
  <div>

    <h1 class="sectioned">This is the Registration Page</h1>

    <RegisterForm class="sectioned" />

    <router-link to="/login" class="centered"><p>Already have an account?</p></router-link>

  </div>
</template>

<script>
import RegisterForm from './RegisterForm.vue';

export default {
  name: 'Register Index',
  components: {
    RegisterForm,
  },
};
</script>

<style>

</style>
