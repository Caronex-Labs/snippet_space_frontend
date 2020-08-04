export const state = () => ({

})

export const mutations = {

}

export const getters = {}

export const actions = {

  async onAuthStateChangedAction({ commit, dispatch }, { authUser, claims }) {
    console.log("auth changed")
    if (!authUser) {
      console.log("logging out")
      await commit('user/setUserLoggedIn', false)
      await commit('user/setLogInProcessing', false)
      return
    }

    // you can request additional fields if they are optional (e.g. photoURL)
    const { uid, email, displayName } = authUser
    await commit('user/setUserLoggedIn', true)
    await commit('user/setLogInProcessing', false)



  }

}


