<template>
  <div class="about">
    <h1>(Farthest we got)</h1>
  </div>
</template>

<script>
import supabase from '../supabase'
const { data, error } = await supabase.from('players').select()
if (error) {
  console.error(error)
} else {
  console.log(data)
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
