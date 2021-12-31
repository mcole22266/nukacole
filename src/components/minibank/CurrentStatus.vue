<template>

  <div class="card text-center minibank-status-card">

    <div class="card-header text-light bg-dark">{{ account.owner }}</div>

    <div class="card-body">
      <h3 class="card-title text-success">$38.29</h3>
      <p class="card-text text-muted">{{ account.name }}</p>

      <button class="btn btn-primary btn-sm" v-if="!form_toggled" v-on:click="toggleForm">
        Buy Something
      </button>
      <button class="fa-btn" v-else v-on:click="toggleForm">
        <i class="fa-solid fa-circle-xmark fa-2x"></i>
      </button>

      <BuyForm
        v-if="form_toggled" v-bind:form_toggled="form_toggled"
        v-on:update:form_toggled="toggleForm"
        />

    </div>

    <div class="card-footer">{{ date }}</div>

  </div>

</template>

<script>
import BuyForm from './BuyForm.vue';

export default {
  name: 'CurrentStatus',
  components: {
    BuyForm,
  },
  props: {
    account: Object,
    date: String,
    form_toggled: Boolean,
  },
  data() {
    return {
      account_activity: [],
    };
  },
  methods: {
    toggleForm() {
      this.$emit('update:form_toggled', !this.form_toggled);
    },
  },
};
</script>

<style>

.fa-btn {
  border-style: none;
  color: red;
  background-color: white;
  width: 8rem;
}

</style>
