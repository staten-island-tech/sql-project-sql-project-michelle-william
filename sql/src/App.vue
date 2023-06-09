<script setup>
import { ref } from 'vue'
// import auth from './components/Auth.vue'
import supabase from './supabase'

const email = ref('')
const password = ref('')

const signUp = async function () {
  console.log(supabase.auth.signUp)
  try {
    console.log('ran')
    await supabase.auth.signUp({
      email: email.value,
      password: password.value
    })
  } catch (error) {
    console.log(error)
  }
}

/* const signIn = async function () {
  console.log(supabase.auth.signIn)
  try {
    console.log('ran')
    const { user, session, error} =
    await supabase.auth.signIn({
      email: email.value,
      password: password.value
    });
   if (error) {
    console.log(error);
  } else {
    store
  }
} */
</script>

<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <button @click="signUp">Sign Up</button>
    <button @click="signIn">Sign In</button>
  </div>
  <input v-model="email" type="input" placeholder="Enter Email Here" />
  <input v-model="password" type="input" placeholder="Enter Password Here" />
</template>

<style scoped>
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(114, 76, 76, 0.87);
  background-color: #db7a65;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}
</style>
