export const state = () => ({
  gists: []
})

export const getters = {
  getGists(state) {
    return state.gists
  }
}

export const mutations = {
  addGist(state, new_gist) {
    if (!state.gists.includes(new_gist)) {
      state.gists.push(new_gist)
    }
  }
}
