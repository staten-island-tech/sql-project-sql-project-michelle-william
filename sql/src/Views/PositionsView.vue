<template>
  <h1>Positions</h1>
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

<style lang="scss" scoped></style>
