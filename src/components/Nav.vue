<template>
  <nav class="nav">
    <router-link :to="{name: 'home-page'}"> DashBoard </router-link>
    <router-link to="/transitions"> Transitions </router-link>
    <router-link to="/budgets"> Budgets </router-link>
    <router-link to="/reports"> Reports </router-link>
    <router-link to="/settings"> Settings </router-link>
  </nav>
</template>

<script>
export default {
  name,
};
</script>

<style></style>
