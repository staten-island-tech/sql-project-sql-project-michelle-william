<template>
  <header>
    <nav>
      <div class="container"></div>
      <ul class="list">
        <router-link class="cursor-point" :to="{ name: 'home' }">HOME</router-link>
        <router-link class="cursor-point" :to="{ name: 'players' }">PLAYERS</router-link>
        <router-link v-if="!user" class="cursor-point" :to="{ name: 'login' }">LOGIN</router-link>
        <router-link v-if="user" class="cursor-point" :to="{ name: 'account' }"
          >ACCOUNT</router-link
        >
        <router-link v-if="user" @click="logout" class="cursor-point" :to="{ name: 'home' }"
          >LOGOUT</router-link
        >
      </ul>
    </nav>
  </header>
</template>

<script>
import { supabase } from '../supabase'
import { useRouter } from 'vue-router'
import counter from '../stores/counter'
import { computed } from 'vue'
export default {
  setup() {
    // get user from store
    const user = computed(() => counter.state.user)
    // setup ref to router
    const router = useRouter()

    // logout function
    const logout = async () => {
      await supabase.auth.signOut()
      router.push({ name: 'home' })
    }

    return {
      logout,
      user
    }
  }
}
</script>

<style scoped>
.list {
  justify-content: flex-end;
}

.cursor-point {
  text-align: center;
  margin: 2rem;
  color: aliceblue;
  text-decoration: none;
  font-size: 2rem;
  list-style-type: none;
}
.cursor-point:hover {
  background-color: rgba(153, 0, 255, 0.356);
}

nav {
  display: flex;
  flex-direction: row;
  font-size: 5vh;
  width: 100vw;
}
p {
  text-decoration: underline;
  background-color: transparent;
}
</style>
