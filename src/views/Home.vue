<template>

  <div class="home container">
    <img id="nukacolalogo" alt="Nuka Cola Logo" src="../assets/nukacolalogo-transparent.png">
    <IndexHome />
  </div>

</template>

<script>
// @ is an alias to /src
import IndexHome from '@/components/Home/IndexHome.vue';

export default {
  name: 'Home',
  components: {
    IndexHome,
  },
};
</script>

<style scoped>

#nukacolalogo {
  width: 50vh;
}

.home {
  align-content: center;
  align-items: center;
  justify-content: center;
  text-align: center;
}

</style>
