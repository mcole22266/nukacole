<template>

  <form v-on:submit="onSubmit">

    <div class="mb-3">
      <label for="description" class="form-label">Description</label>
      <input v-model="description" type="text" class="form-control" id="description">
    </div>

    <div class="mb-3">
      <label for="amt" class="form-label">Amount</label>
      <input v-model="amount" type="float" class="form-control" id="amount">
    </div>

    <input class="btn btn-primary" type="submit" />

  </form>

</template>

<script>
export default {
  name: 'Buyform',
  data() {
    return {
      description: '',
      amount: '',
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      console.log(this.description);
      console.log(this.amount);

      this.$emit('update:form_toggled', !this.form_toggled);
    },
  },
};
</script>

<style>

form {
  text-align: left;
}

</style>
