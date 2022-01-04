<template>
  <div class="home container sectioned">

    <img id="nukacolalogo" alt="Nuka Cola Logo" src="../assets/nukacolalogo-transparent.png">
    <Index />

    {{ message }}

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
  computed: {
    message() {
      return this.$store.state.test;
    },
  },
};
</script>

<style scoped>

#nukacolalogo {
  max-width: 50%;
}

.home {
  align-content: center;
  align-items: center;
  justify-content: center;
  text-align: center;
}

</style>
