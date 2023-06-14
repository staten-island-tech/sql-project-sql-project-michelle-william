<script>
import Navigation from './components/Navigation.vue'
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import counter from './stores/counter'
import { supabase } from './supabase'
export default {
  components: {
    Navigation
  },
  setup() {
    const appReady = ref(null)
    const getCurrentUser = async () => {
      try {
        const { player, session } = await supabase.auth.getSession()

        if (user) {
          const { data, error } = await supabase.auth.getUser(user.id)
          console.log('user logged in')
          if (error) {
            throw error
          }

          console.log('User:', data)
        } else {
          console.log('No user logged in.')
          appReady.value = true
        }
      } catch (error) {
        console.error('Error retrieving user:', error.message)
      }
    }

    // Call the function to get the current user
    getCurrentUser()

    supabase.auth.onAuthStateChange((_, session) => {
      console.log('hello')
      counter.methods.setUser(session)
      appReady.value = true
    })

    return { appReady }
  }
}
/*
  }
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
  <div class="wrapper" v-if="appReady">
    <Navigation />
    <RouterView />
  </div>
</template>
