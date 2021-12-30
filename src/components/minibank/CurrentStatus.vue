<template>

  <div class="card text-center minibank-status-card">

    <div class="card-header text-light bg-dark">Caleb Cole</div>

    <div class="card-body">
      <h3 class="card-title text-success">$38.29</h3>
      <p class="card-text text-muted">Caleb's Account</p>

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

    <div class="card-footer">December 30, 2021 | 1:38 pm</div>

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
