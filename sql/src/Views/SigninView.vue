<template>
  <div class="container">
    <!-- error handling -->
    <div v-if="errorMsg" class="error">
      <p class="text">{{ errorMsg }}</p>
    </div>
    <!-- log in -->
    <form class="form" @submit.prevent="login">
      <h1 class="heading">LOGIN</h1>
      <div>
        <label for="email" class="email">EMAIL</label>
        <input type="email" required class="text" v-model="email" />
      </div>
      <div>
        <label for="password" class="password">PASSWORD</label>
        <input type="password" required class="text" v-model="password" />
      </div>

      <button type="submit" class="btn">LOGIN</button>
      <router-link :to="{ name: 'register' }" class="routerlink">
        DON'T HAVE AN ACCOUNT? REGISTER HERE</router-link
      >
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { supabase } from '../supabase'
import { useRouter } from 'vue-router'
export default {
  name: 'login',
  setup() {
    // create data / vars
    const router = useRouter()
    const email = ref(null)
    const password = ref(null)
    const errorMsg = ref(null)

    // login function
    const login = async () => {
      try {
        const { error } = await supabase.auth.signInWithPassword({
          email: email.value,
          password: password.value
        })
        if (error) throw error
        router.push({ name: 'home' })
      } catch (error) {
        let msg = error.message.toString()
        errorMsg.value = msg
        setTimeout(() => {
          errorMsg.value = null
        }, 5000)
      }
      return
    }

    return { email, password, errorMsg, login }
  }
}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
}
button {
  color: #2d1b4b;
  height: 3vh;
  border-radius: 5px;
  border: none;
  background-color: aliceblue;
}
label {
  font-size: 3vh;
}

.routerlink {
  font: 2rem;
  color: aliceblue;
  margin: 1rem;
}
form {
  margin-top: 20vh;
}
.heading {
  text-decoration: underline;
}
.text {
  color: #2d1b4b;
  font-size: 2.5vh;
  background-color: aliceblue;
  border: none;
  border-radius: 10px;
  height: 1.75rem;
  width: 10rem;
}
</style>
