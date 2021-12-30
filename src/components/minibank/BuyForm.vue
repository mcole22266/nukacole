<template>

  <form>

    <div class="mb-3">
      <label for="description" class="form-label">Description</label>
      <input type="text" class="form-control" id="description">
    </div>

    <div class="mb-3">
      <label for="amt" class="form-label">Amount</label>
      <input type="number" class="form-control" id="amt">
    </div>

    <button class="btn btn-primary" type="submit">Submit</button>

  </form>

</template>

<script>
export default {

};
</script>

<style>

form {
  text-align: left;
}

</style>
