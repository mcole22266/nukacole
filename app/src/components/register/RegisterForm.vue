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
    onSubmit(e) {
      e.preventDefault();

      // Temporarily log the form inputs until functionality is added
      console.log(this.username);
      console.log(this.name);
      console.log(this.password);
      console.log(this.passwordConfirm);

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
