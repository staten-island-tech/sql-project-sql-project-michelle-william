<template>
  <button>{{ title }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: String
  }
}
</script>

<style scoped>
button {
  font-size: var(--big);
  padding: 1rem;
  border: none;
  transition: 0.2s;
  background: none;
}
</style>
