<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'

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
</script>

<template>
  <button @click="signUp">Sign Up</button>
  <button @click="signIn">Sign In</button>
  <input v-model="email" type="input" placeholder="Enter Email Here" />
  <input v-model="password" type="input" placeholder="Enter Password Here" />
</template>

<style>
@media (min-width: 1024px) {
  .inputs {
    width: 100%;
    align-content: center;
    display: flex;
    justify-content: space-evenly;
    margin: 300px;
  }
}
</style>

<!-- const signIn = async function () { console.log(supabase.auth.signIn) try { console.log('ran') const
{ user, session, error} = await supabase.auth.signIn({ email: email.value, password: password.value
}); if (error) { console.log(error); } else { store } } -->