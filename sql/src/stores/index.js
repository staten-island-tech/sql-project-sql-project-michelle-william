import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => ({
    user: null // Define your state variables here
  }),
  actions: {
    async signInWithEmail(email, password) {
      const { user, error } = await supabase.auth.signIn({
        email,
        password
      })
      if (error) {
        console.error(error)
        return
      }
      this.user = user
    },

    async signOut() {
      const { error } = await supabase.auth.signOut()
      if (error) {
        console.error(error)
        return
      }
      this.user = null
    },

    onAuthStateChange() {
      supabase.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_IN') {
          this.user = session.user
        } else if (event === 'SIGNED_OUT') {
          this.user = null
        }
      }) // Define your actions here
    }
  }
})
