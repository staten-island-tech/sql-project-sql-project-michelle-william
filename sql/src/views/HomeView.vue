<template>
  <div class="player-list">
    <h1>Player Stats</h1>
    <div class="card-list">
      <div class="card" v-for="player in players" :key="player.id">
        <h2 class="player-name">{{ player.Firstname }}</h2>
        <div class="stat"><span class="stat-label">Digs:</span> {{ player.Digs }}</div>
        <div class="stat"><span class="stat-label">Assists:</span> {{ player.Assists }}</div>
        <div class="stat"><span class="stat-label">Aces:</span> {{ player.Aces }}</div>
      </div>
    </div>
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

<style lang="scss" scoped></style>
