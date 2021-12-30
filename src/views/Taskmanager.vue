<template>
  <div class="taskmanager container">

    <Index />

  </div>
</template>

<script>
import Index from '@/components/taskmanager/Index.vue';

export default {
  name: 'Taskmanager',
  components: {
    Index,
  },
};
</script>

<style scoped>

</style>
