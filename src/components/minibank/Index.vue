<template>

  <CurrentStatus
    id="current-status" class="centered sectioned"
    v-bind:form_toggled="form_toggled"
    v-bind:account="account"
    v-bind:date="date"
    v-on:update:form_toggled="form_toggled = $event"/>

  <HistoryTable
    id="history-table" class="centered sectioned"
    v-bind:account="account"/>

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
      account: {},
      date: this.getCleanDate(),
      form_toggled: false,
    };
  },
  async created() {
    this.account = await this.fetchAccount(0);
  },
  methods: {
    getCleanDate() {
      const currentDate = Date();
      const splitDate = currentDate.split(' ');
      const date1 = splitDate.slice(0, 3).join(' ');
      const date2 = splitDate[3];
      const date3 = splitDate[4];
      const cleanDate = `${date1}, ${date2} | ${date3}`;

      return cleanDate;
    },
    async fetchAccounts() {
      const res = await fetch('api/accounts');

      const accounts = await res.json();
      return accounts;
    },
    async fetchAccount(id) {
      const res = await fetch(`api/accounts/${id}`);

      const account = await res.json();
      return account;
    },
  },
};
</script>

<style scoped>

#current-status {
  min-width: 25%;
  max-width: 75%;
}

</style>
