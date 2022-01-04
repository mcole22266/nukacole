<template>

  <form v-on:submit="onSubmit">

    <div class="mb-3">
      <label for="username" class="form-label">Username</label>
      <input type="text" name="username" id="username" class="form-control" v-model="username">
    </div>

    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input
        type="password" name="password" id="password" class="form-control"
        v-model="password" autocomplete="current_password">
    </div>

    <input type="submit" class="btn btn-primary">

  </form>

</template>

<script>
import UserService from '../../services/login/UserService';
import router from '../../router/index';

const userService = new UserService();

export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();

      const user = await userService.loginUser({
        username: this.username,
        password: this.password,
      });

      // temporarily log the user data until functionality is added
      if (user) {
        router.push('/');
      } else {
        console.log('failed to authenticate');
      }

      // Clear the form
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style>

</style>
