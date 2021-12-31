<template>

  <div class="card text-center minibank-status-card">

    <div class="card-header text-light bg-dark">{{ account.owner }}</div>

    <div class="card-body">
      <h1
        class="card-title"
        v-bind:class="[{ 'text-success': balance >= 0, 'text-danger': balance < 0 }]">
        ${{ balance.toString().replace('-', '') }}
      </h1>
      <p class="card-text">{{ account.name }}</p>

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

    <div class="card-footer text-muted">{{ date }}</div>

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
    balance: Number,
    date: String,
    form_toggled: Boolean,
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
