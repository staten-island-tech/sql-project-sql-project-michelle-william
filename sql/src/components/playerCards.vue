<template>
  <div class="card"></div>
</template>

<script>
export default {
  name: 'card',
  props: {
    card: Object
  },
  methods: {}
}
</script>

<style scoped>
.card {
  width: 7%;
  height: 55px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
