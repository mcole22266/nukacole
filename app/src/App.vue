<template>

  <Navbar />

</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
  methods: {
    isPage(pagename) {
      // Returns true if pagename matches the routename
      return pagename === this.$route.name;
    },
  },
};
</script>

<style>

</style>
