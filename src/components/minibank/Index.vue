<template>

  <CurrentStatus
    id="current-status" class="centered sectioned"
    v-bind:form_toggled="form_toggled"
    v-on:update:form_toggled="form_toggled = $event"/>

  <HistoryTable id="history-table" class="centered sectioned" />

</template>

<script>
import CurrentStatus from './CurrentStatus.vue';
import HistoryTable from './HistoryTable.vue';

export default {
  name: 'Minibank Index',
  components: {
    CurrentStatus,
    HistoryTable,
  },
  data() {
    return {
      form_toggled: false,
    };
  },
};
</script>

<style scoped>

#current-status {
  min-width: 25%;
  max-width: 75%;
}

</style>
