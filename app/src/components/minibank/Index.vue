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
    v-bind:account="account"
    v-bind:date="date"/>

</div>
</template>

<script>
import AccountService from '../../services/minibank/AccountService';
import CurrentStatus from './CurrentStatus.vue';
import HistoryTable from './HistoryTable.vue';

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
      account_id: '61d2136782f4667eb640a542',
      balance: 0,
      date: this.getCleanDate(),
      form_toggled: false,
    };
  },
  async created() {
    // fetch account information and calculate balance for display
    this.account = await this.fetchAccount(this.account_id);
    this.calculateBalance();
  },
  methods: {
    getCleanDate() {
      // Modify the stored date to present a cleaned up date for the HistoryTable
      const currentDate = Date();
      const splitDate = currentDate.split(' ');
      const date1 = splitDate.slice(0, 3).join(' ');
      const date2 = splitDate[3];
      const date3 = splitDate[4];
      const cleanDate = `${date1}, ${date2} - ${date3}`;

      return cleanDate;
    },
    calculateBalance() {
      // Recalculate the total balance based on the total activity
      this.balance = 0;
      this.account.activity.forEach((row) => {
        this.balance += row.amount;
      });
    },
    async fetchAccounts() {
      // Fetch all accounts
      const accounts = await accountService.fetchAccounts();
      return accounts;
    },
    async fetchAccount(id) {
      // Fetch a single account
      const account = await accountService.fetchAccount(id);
      return account;
    },
    async addActivity(newActivity) {
      // Add a new entry to the activity of an account
      await accountService.addActivity(this.account_id, newActivity);

      // Get updated information to present on the page
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
