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

<style>
.player-list {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.card-list {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.player-name {
  font-size: 20px;
  margin-bottom: 8px;
}

.stat {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}

.stat-label {
  font-weight: bold;
  margin-right: 4px;
}
</style>

<script>
import { ref, onMounted } from 'vue'
import { createClient } from '@supabase/supabase-js'

export default {
  name: 'PlayerList',
  setup() {
    const players = ref([])

    // Create a Supabase client
    const supabaseUrl = 'https://qtbwblsfjwdtewafoqph.supabase.co'
    const supabaseKey =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0YndibHNmandkdGV3YWZvcXBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM4OTk1OTAsImV4cCI6MTk5OTQ3NTU5MH0.aHBemK6VllFXBqZII4cBXwnYYvVJkasV4pQ-oElV0zQ'
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Fetch player stats on component mount
    onMounted(async () => {
      try {
        const { data, error } = await supabase
          .from('players')
          .select('Firstname, Digs, Assists, Aces')
        if (error) throw error
        players.value = data
        console.log(data)
      } catch (error) {
        console.error('Error fetching player stats:', error.message)
      }
    })

    return {
      players
    }
  }
}
</script>
