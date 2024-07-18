<template>
  <div>
    <h1>Home Page Is Here</h1>

    <div v-if="user">{{ user.displayName }}</div>
  </div>
</template>

<script>
import { useUser } from "@/composables/useUser";

export default {
  name,
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();
    return { user };
  },
};
</script>

<style></style>
