<template>

  <table class="table table-striped table-hover">

    <thead class="table-dark">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Date</th>
        <th scope="col">Description</th>
        <th scope="col">Amount</th>
      </tr>
    </thead>

    <tbody v-for="row in account.activity" :key="row.id">
      <tr>
        <th scope="row">{{ row.id }}</th>
        <td>{{ row.date }}</td>
        <td>{{ row.description }}</td>
        <td v-bind:class="[{ 'text-danger': row.amount <= 0, 'text-success': row.amount > 0 }]">
          ${{ row.amount }}
        </td>
      </tr>
    </tbody>

  </table>
</template>

<script>
export default {
  name: 'Historytable',
  props: {
    account: Object,
  },
};
</script>

<style>

</style>
