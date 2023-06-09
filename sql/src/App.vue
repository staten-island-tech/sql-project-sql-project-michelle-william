<script setup>
import { ref } from 'vue'
import Account from './components/Account.vue'
import auth from './components/Auth.vue'
import { supabase } from './supabase'

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
