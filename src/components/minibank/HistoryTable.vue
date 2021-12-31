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

    <tbody v-for="row in activity" :key="row.id">
      <tr>
        <th scope="row">{{ row.id }}</th>
        <td>Dec 01, 2021</td>
        <td>{{ row.description }}</td>
        <td>${{ row.amount }}</td>
      </tr>
    </tbody>

  </table>
</template>

<script>
export default {
  name: 'Historytable',
  props: {
    account_activity: Array,
  },
  data() {
    return {
      activity: [
        { id: 0, description: 'Something', amount: 23.12 },
        { id: 1, description: 'Something Else', amount: -13.82 },
        { id: 2, description: 'One More Thing', amount: 12.02 },
      ],
    };
  },
};
</script>

<style>

</style>
