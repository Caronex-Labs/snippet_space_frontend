export const state = () => ({})

export const mutations = {}

export const getters = {}

export const actions = {

  async onAuthStateChangedAction({commit, dispatch}, {authUser, claims}) {
    console.log("auth changed")
    if (!authUser) {
      console.log("logging out")
      await commit('user/setUserLoggedIn', false)
      await commit('user/setLogInProcessing', false)
      return
    }

    // you can request additional fields if they are optional (e.g. photoURL)
    const {uid, email, displayName} = authUser
    await commit('user/setUserLoggedIn', true)
    await commit('user/setLogInProcessing', false)
  },

  async signUpGistsSync({commit}, token) {
    let db = this.$fireStoreObj()
    const {Octokit} = require("@octokit/rest")
    console.log({token: token.accessToken})
    const octokit = new Octokit({
      auth: token.accessToken
    })
    try {
      let response = await octokit.gists.list();
      let gists = response.data;
      console.log(gists)
      gists.forEach(gist => {
        console.log(gist)
        db.collection('users').doc(this.$fireAuth.currentUser.uid).collection("gists").doc(gist.id).set({
          title: gist.id,
          description: gist.description,
          public: gist.public,
          html_url: gist.html_url
        })
        let gist_files = []
        let gist_languages = []
        for (let file in gist.files) {
          gist_files.push({
            filename: gist.files[file].filename,
            language: gist.files[file].language,
            framework: '',
            raw_url: gist.files[file].raw_url
          })
          if (!gist_languages.includes(gist.files[file].language))
          {
            gist_languages.push(gist.files[file].language)
          }
          db.collection('users').doc(this.$fireAuth.currentUser.uid).collection("gists").doc(gist.id).collection('files').doc(gist.files[file].filename).set({
            filename: gist.files[file].filename,
            language: gist.files[file].language,
            framework: '',
            raw_url: gist.files[file].raw_url
          })
        }
        commit('gists/addGist', {
          id: gist.id,
          title: "",
          description: gist.description,
          public: gist.public,
          html_url: gist.html_url,
          languages: gist_languages,
          files: gist_files
        })

      })
    } catch (e) {
      console.log(e)

    }
  }

}


