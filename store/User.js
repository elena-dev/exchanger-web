export const state = () => ({
  User: [],
});

export const mutations = {
  SET(state, pyaload) {
    state.User = pyaload
  },
}

export const actions = {
  Set({commit}, pyaload) {
    commit('SET', pyaload)
  }
}

export const getters = {
  Get: state => {
    return state.User
  }
}
