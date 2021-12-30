<template>

  <div class="card text-center minibank-status-card">

    <div class="card-header text-light bg-dark">Caleb Cole</div>

    <div class="card-body">
      <h3 class="card-title text-success">$38.29</h3>
      <p class="card-text text-muted">Caleb's Account</p>
      <button class="btn btn-primary btn-sm">Buy Something</button>

      <BuyForm />

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
};
</script>

<style>
</style>
