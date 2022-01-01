<template>
  <div class="home container sectioned">

    <img id="nukacolalogo" alt="Nuka Cola Logo" src="../assets/nukacolalogo-transparent.png">
    <Index />

  </div>
</template>

<script>
// @ is an alias to /src
import Index from '@/components/home/Index.vue';

export default {
  name: 'Home',
  components: {
    Index,
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
