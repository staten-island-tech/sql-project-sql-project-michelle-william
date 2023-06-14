import { reactive, ref } from 'vue'

const state = reactive({
  user: null,
  userScore: ref([]),
  allUsers: ref([])
})
const methods = {
  setUser(payload) {
    state.user = payload ? payload.user : null
  }
}
export default {
  state,
  methods
}
