<template>
  <div class="card">
    <h2>{{ player.frstnm }}</h2>
    <h2>{{ player.lstnm }}</h2>
    <h2>{{ player.digs }}</h2>
    <h2>{{ player.kills }}</h2>
    <h2>{{ player.blocks }}</h2>
    <h2>{{ player.srvcpts }}</h2>
    <h2>{{ player.aces }}</h2>
    <h2>{{ player.plyrnmbr }}</h2>
    <h2>{{ player.assists }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    player: Object,
    frstnm: String,
    lstnm: String,
    digs: Number,
    kills: Number,
    blocks: Number,
    srvcpts: Number,
    aces: Number,
    plyrnmbr: Number,
    assists: Number
  },
  mounted() {
    this.fetchPlayerData()
  },
  methods: {
    async fetchPlayerData() {
      const { data, error } = await this.$supabase.from('players').select()

      if (error) {
        console.error(error)
      } else if (data.length > 0) {
        this.player = data[0]
      }
    }
  }
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
