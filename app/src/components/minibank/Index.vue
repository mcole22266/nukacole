<template>
<div>

  <CurrentStatus
    id="current-status" class="centered sectioned"
    v-bind:form_toggled="form_toggled"
    v-bind:account="account"
    v-bind:balance="balance"
    v-bind:date="date"
    v-on:update:form_toggled="form_toggled = $event"
    v-on:update:add_activity="addActivity"/>

  <HistoryTable
    id="history-table" class="centered sectioned"
    v-bind:account="account"/>

</div>
</template>

<script>
import CurrentStatus from './CurrentStatus.vue';
import HistoryTable from './HistoryTable.vue';

import AccountService from '../../services/minibank/AccountService';

const accountService = new AccountService();

export default {
  name: 'Minibank Index',
  components: {
    CurrentStatus,
    HistoryTable,
  },
  data() {
    return {
      account: { activity: [] },
      account_id: '61d0e79991fba54c80021c1f',
      balance: 0,
      date: this.getCleanDate(),
      form_toggled: false,
    };
  },
  async created() {
    this.account = await this.fetchAccount(this.account_id);
    this.calculateBalance();
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
    calculateBalance() {
      this.balance = 0;
      this.account.activity.forEach((row) => {
        this.balance += row.amount;
      });
    },
    async fetchAccounts() {
      return accountService.fetchAccounts();
    },
    async fetchAccount(id) {
      return accountService.fetchAccount(id);
    },
    async addActivity(newActivity) {
      await accountService.addActivity(this.account_id, newActivity);

      this.account = await this.fetchAccount(this.account_id);
      this.calculateBalance();
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
