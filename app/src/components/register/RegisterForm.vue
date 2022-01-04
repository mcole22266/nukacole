<template>

  <form v-on:submit="onSubmit">

    <div class="row">

      <div class="col">
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input type="text" class="form-control" id="username" name="username" v-model="username">
        </div>
      </div>

      <div class="col">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" name="name" v-model="name">
        </div>
      </div>

    </div>

    <div class="row">

      <div class="col">
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password" autocomplete="current_password" class="form-control"
            id="password" password="password" v-model="password">
        </div>
      </div>

      <div class="col">
        <div class="mb-3">
          <label for="passwordConfirm" class="form-label">Password Confirmation</label>
          <input
            type="password" autocomplete="current_password" class="form-control"
            id="passwordConfirm" passwordConfirm="passwordConfirm" v-model="passwordConfirm"
            aria-describedby="passwordConfirm">
          <div class="form-text" id="passwordConfirm">Please re-type your password</div>
        </div>
      </div>

    </div>

    <input type="submit" class="btn btn-primary">

  </form>

</template>

<script>
import UserService from '../../services/login/UserService';
import router from '../../router/index';

const userService = new UserService();

export default {
  name: 'RegisterForm',
  data() {
    return {
      username: '',
      name: '',
      password: '',
      passwordConfirm: '',
    };
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();

      // Create User
      const user = {
        username: this.username,
        password: this.password,
        name: this.name,
        created_date: new Date(),
      };

      // Register User
      const registeredUser = await userService.registerUser(user);

      if (registeredUser) {
        router.push('/');
      } else {
        console.log('failed to authenticate');
      }

      // Clear the form
      this.username = '';
      this.name = '';
      this.password = '';
      this.passwordConfirm = '';
    },
  },
};
</script>

<style>

</style>
