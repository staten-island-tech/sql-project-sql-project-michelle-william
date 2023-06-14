<script>
import Volleyball from '../components/volleyball.vue'
import { supabase } from '../supabase.js'
import { ref } from 'vue'
export default {
  components: {
    Volleyball
  },
  setup() {
    const users = ref(null)
    const dataLoaded = ref(null)
    const errorMsg = ref(null)

    const getData = async () => {
      try {
        let { data, error } = await supabase.from('players').select()
        if (error) throw error
        console.log(data)
        users.value = data
        console.log(users.value)
        dataLoaded.value = true
      } catch (error) {
        console.log('hey')
        errorMsg.value = error.message
        setTimeout(() => {
          errorMsg.value = false
        }, 5000)
      }
    }

    const reorder = (users) => {
      users.forEach((el) => {
        let i = users.indexOf(el)
        console.log(i)
      })
    }

    getData()

    return {
      users,
      dataLoaded,
      errorMsg
    }
  }
}
</script>

<template>
  <div class="container">
    <h1>{{ errorMsg }}</h1>
    <div class="headings">
      <h1 class="head">name</h1>
      <h1 class="head">stats:</h1>
      <h1 class="head">number:</h1>
    </div>
    <Volleyball
      v-for="player in players"
      :key="player.id"
      :name="player.first"
      :high_score="player.high_score"
      :avatar_url="player.avatar_url"
      class="user"
    />
  </div>
</template>

<style scoped>
.container {
  margin-top: 10vh;
}
.user {
  background-color: #6969b35d;
}
.headings {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #6969b35d;
  width: 100vw;
}
.head {
  background-color: transparent;
}
</style>
