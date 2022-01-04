<template>
  <div>
    <p>Logging you out</p>
  </div>
</template>

<script>
import UserService from '../services/login/UserService';

const userService = new UserService();

export default {
  name: 'Logout',
  created() {
    userService.logoutUser();
  },
};
</script>

<style>

</style>
