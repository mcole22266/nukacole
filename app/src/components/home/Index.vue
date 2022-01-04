<template>
  <div>

    <h1 class='sectioned' v-if='!this.$store.state.logged_in'>Home Page</h1>
    <h1 class="sectioned" v-else>Test</h1>

  </div>
</template>

<script>
export default {
  name: 'Home Index',
};
</script>

<style scoped>

</style>
