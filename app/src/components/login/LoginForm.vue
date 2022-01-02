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
export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      // temporarily log the inputs until functionality is added
      console.log(this.username);
      console.log(this.password);

      // Clear the form
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style>

</style>
