export const state = () => ({
  DontClose: false,
  Authorization: false,
  Registration: false,
  Reserve: false,
  Systems: false
})

export const mutations = {
  AUTHORIZATION(state, pyaload) {
    state.Authorization = pyaload
  },
  REGISTRATION(state, pyaload) {
    state.Registration = pyaload
  },
  RESERVE(state, pyaload) {
    state.Reserve = pyaload
  },
  SYSTEMS(state, pyaload) {
    state.Systems = pyaload
  },
  DONT_CLOSE(state, pyaload) {
    state.DontClose = pyaload
  }
}

export const actions = {
  Authorization({ commit }, pyaload) {
    commit('AUTHORIZATION', pyaload)
  },
  Registration({ commit }, pyaload) {
    commit('REGISTRATION', pyaload)
  },
  Reserve({ commit }, pyaload) {
    commit('RESERVE', pyaload)
  },
  Systems({ commit }, pyaload) {
    commit('SYSTEMS', pyaload)
  },
  DontClose({
    commit
  }, pyaload) {
    commit('DONT_CLOSE', pyaload)
  }
}

export const getters = {
  Authorization: state => {
    return state.Authorization
  },
  Registration: state => {
    return state.Registration
  },
  Reserve: state => {
    return state.Reserve
  },
  Systems: state => {
    return state.Systems
  },
  Show: state => {
    if(state.Authorization || state.Registration)
      return true
    else
      return false
  },
  DontClose: state => {
    return state.DontClose
  }
}
