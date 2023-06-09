<template>
  <input class="inputs" v-model="message" placeholder="Enter Username" />
  <input class="inputs" v-model="message" placeholder="Enter Password" />
</template>

<script>
export default {}
</script>

<style scoped>
.inputs {
  width: 100%;
  align-content: center;
  display: flex;
  justify-content: space-evenly;
  margin: 300px;
}
</style>
