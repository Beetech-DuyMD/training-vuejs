<template>
  <navigation-brand />
  <slot />
</template>

<script>
import NavigationBrand from "@/pages/NavigationBrand";
export default {
  name,
  components: { NavigationBrand },
};
</script>

<style></style>
