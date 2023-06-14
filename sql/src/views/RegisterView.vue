<template>
  <div class="container">
    <!-- error handling -->
    <div v-if="errorMsg" class="error">
      <p class="text">{{ errorMsg }}</p>
    </div>
    <!-- register -->
    <form class="form" @submit.prevent="register">
      <h1 class="heading">REGISTER</h1>
      <div>
        <label for="email" class="email">EMAIL</label>
        <input type="email" required class="text" v-model="email" />
      </div>
      <div>
        <label for="username" class="username">USERNAME</label>
        <input type="username" required class="text" v-model="full_name" />
      </div>
      <div>
        <label for="password" class="password">PASSWORD</label>
        <input type="password" required class="text" v-model="password" />
      </div>
      <div>
        <label for="confirmPassword" class="confirmPassword">CONFIRM PASSWORD</label>
        <input type="password" required class="text" v-model="confirmPassword" />
      </div>

      <button type="submit" class="btn">REGISTER</button>
      <router-link :to="{ name: 'login' }" class="routerlink">
        ALREADY HAVE AN ACCOUNT? LOGIN HERE</router-link
      >
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { supabase } from '../supabase'
import { useRouter } from 'vue-router'
import counter from '../stores/counter'
export default {
  name: 'register',
  setup() {
    // create data / vars
    const router = useRouter()
    const email = ref(null)
    const password = ref(null)
    const full_name = ref(null)
    const confirmPassword = ref(null)
    const errorMsg = ref(null)

    // register function
    const register = async () => {
      if (password.value === confirmPassword.value) {
        try {
          const { error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
            options: {
              data: {
                full_name: full_name.value
              }
            }
          })
          if (error) throw error
          router.push({ name: 'login' })
        } catch (error) {
          errorMsg.value = error.message
          setTimeout(() => {
            errorMsg.value = null
          }, 5000)
        }
        return
      }
      errorMsg.value = 'error: passwords do not match'
      setTimeout(() => {
        errorMsg.value = null
      }, 5000)
    }

    return { email, password, confirmPassword, full_name, errorMsg, register }
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
