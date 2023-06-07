<template>
  <h1>Positions</h1>
</template>

<script>
import supabase from '../supabase'

const { error } = await supabase.from('player').insert([{ id: 1 }])
</script>

<style lang="scss" scoped></style>
