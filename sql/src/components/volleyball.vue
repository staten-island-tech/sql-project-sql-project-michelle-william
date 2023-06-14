<script>
/*import { ref } from 'vue'
import { useStore } from '../stores';
const store = useStore();

const email = ref('');
const password = ref('');


const login = async (e) => {
  e.preventDefault();
 await.store.signInWithEmail(email.value, password.value);
};
return {
  email,
  password,
  login,
};*/
export default {
  props: ['first', 'last', 'digs', 'kills', 'blocks', 'service', 'aces', 'number', 'assists'],
  setup(props) {
    console.log(props.last)
  }
}
</script>

<template>
  <div class="player">
    <h2>{{ first }}</h2>
    <h2>{{ last }}</h2>
    <h2>{{ digs }}</h2>
    <h2>{{ kills }}</h2>
    <h2>{{ blocks }}</h2>
    <h2>{{ service }}</h2>
    <h2>{{ aces }}</h2>
    <h2>{{ number }}</h2>
    <h2>{{ assists }}</h2>
  </div>
</template>
<style scoped>
h2 {
  background-color: transparent;
  width: 23vw;
}
.player {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  width: 100vw;
}
</style>
