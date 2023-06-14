<template>
  <div class="player-list">
    <h1>Player Stats</h1>
    <div class="card-list">
      <div class="card" v-for="player in players" :key="player.id">
        <h2 class="player-firstname">{{ player.Firstname }}</h2>
        <h2 class="player-lastname">{{ player.Lastname }}</h2>
        <div class="stat">
          <span class="stat-label">Player Number:</span> {{ player.PlayerNumber }}
        </div>
        <div class="stat"><span class="stat-label">Digs:</span> {{ player.Digs }}</div>
        <div class="stat">
          <div class="stat-label">Kills:</div>
          {{ player.Kills }}
          <div class="stat"><span class="stat-label">Assists:</span> {{ player.Assists }}</div>
          <div class="stat"><span class="stat-label">Blocks:</span> {{ player.Blocks }}</div>
          <div class="stat"></div>
          <div class="stat"><span class="stat-label">Aces:</span> {{ player.Aces }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.player-list {
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 30px;
  margin-bottom: 10px;
}

.card-list {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.player-name {
  font-size: 30px;
  margin-bottom: 8px;
}

.stat {
  display: flex;
  align-items: center;
}

.stat-label {
  font-weight: bold;
  margin-right: 2px;
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
    const supabaseUrl = 'https://qtbwblsfjwdtewafoqph.supabase.co/'
    const supabaseKey =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0YndibHNmandkdGV3YWZvcXBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM4OTk1OTAsImV4cCI6MTk5OTQ3NTU5MH0.aHBemK6VllFXBqZII4cBXwnYYvVJkasV4pQ-oElV0zQ'
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Fetch player stats on component mount
    onMounted(async () => {
      try {
        const { data, error } = await supabase
          .from('players')
          .select(
            'Firstname, Lastname,Digs, Kills, Blocks, Assists, Aces, ServicePoints, PlayerNumber'
          )
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
