export const state = () => ({
  userLoggedIn: false
})

export const getters = {
  getUserLoggedIn(state) {
    return state.userLoggedIn
  }
}

export const mutations = {
  setUserLoggedIn(state, val) {
    state.userLoggedIn = val;
  }
}
