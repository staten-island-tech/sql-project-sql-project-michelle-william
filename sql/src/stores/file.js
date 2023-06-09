<script setup>
import { supabase } from '../lib/supabaseClient.js'
import { ref, onMounted } from 'vue'
import { useSupabaseStore } from '../stores/counter'
const store = useSupabaseStore()
async function getCards() {
  const { data } = await supabase.from('character').select()
  store.characters = data
}

async function AddCart(x) {
  store.cartTotal = store.cartTotal + x
}
getCards()
console.log(store.characters)
getCards()
</script>