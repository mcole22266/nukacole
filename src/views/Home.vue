<template>

  <div class="home">
    <img id="nukacolalogo" alt="Nuka Cola Logo" src="../assets/nukacolalogo-transparent.png">
    <Landing />
  </div>

</template>

<script>
// @ is an alias to /src
import Landing from '@/components/Landing.vue';

export default {
  name: 'Home',
  components: {
    Landing,
  },
};
</script>

<style scoped>
#nukacolalogo {
  width: 50vh;
}
</style>
