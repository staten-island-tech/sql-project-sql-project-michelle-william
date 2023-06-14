<script>
import { ref } from 'vue'
import { useStore } from '../stores'
const store = useStore()

const email = ref('')
const password = ref('')

const login = async (e) => {
  e.preventDefault()
  await store.signInWithEmail(email.value, password.value)
}
return {
  email,
  password,
  login
}
</script>

<template>
  <div>
    <form @submit="login">
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>
