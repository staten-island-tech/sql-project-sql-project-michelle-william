<!-- <template>
  <div>
    <h1>Volleyball Team Builder</h1>
  </div>
</template>

<script>
import supabase from '../supabase'
import { ref } from 'vue'

const data = await supabase.from('players').select()

let { data: players, error } = await supabase.from('players').insert([{ id: 1 }])

console.log(data)
</script>

<style lang="scss" scoped></style>
 -->
<template>
  <div class="whatever">
    <h2 v-if="!ready">Click to start</h2>
    <div class="home"></div>
  </div>
</template>

<script>
import PlayerCards from '../components/playerCards.vue'
import { ref } from 'vue'
import counter from '../stores/counter'
import { supabase } from '../supabase'

export default {
  name: 'players',
  components: {
    card
  },
  data() {}
}
</script>

<style lang="scss" scoped></style>
