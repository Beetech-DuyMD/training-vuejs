<template>
  <h1>Transition Detail Page is here</h1>
  <h2>{{ $route.params.id }}</h2>
</template>

<script>
export default {
  name,
  created() {
    fetch("http://localhost:3000/transitions/" + this.$route.params.id)
      .then((response) => response.json())
      .then((data) => (this.transitions = data))
      .then(() => console.log(this.transitions));
  },
};
</script>

<style></style>
