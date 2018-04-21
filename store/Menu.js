export const state = () => ({
  Mobile: false,
  Auth: false,
  Header: [{
    id: 1,
    url: 'rules',
    key: 'Rules'
  }, {
    id: 2,
    url: 'partners',
    key: 'Partners'
  }, {
    id: 3,
    url: 'news',
    key: 'News'
  }, {
    id: 4,
    url: 'faq',
    key: 'FAQ'
  }, {
    id: 5,
    url: 'contacts',
    key: 'Contacts'
  }],
  Footer: [{
    id: 1,
    url: 'api_docs',
    key: 'API Documentation'
  }, {
    id: 2,
    url: 'faq',
    key: 'FAQ'
  }, {
    id: 3,
    url: 'contacts',
    key: 'Contacts'
  },]
});

export const mutations = {
  MOBILE(state, pyaload) {
    state.Mobile = pyaload
  },
  AUTH(state, pyaload) {
    state.Auth = pyaload
  },
  DONT_CLOSE(state, pyaload) {
    state.DontClose = pyaload
  }
}

export const actions = {
  Mobile({
           commit
         }, pyaload) {
    commit('MOBILE', pyaload)
  },
  Auth({
         commit
       }, pyaload) {
    commit('AUTH', pyaload)
  }
}

export const getters = {
  Mobile: state => {
    return state.Mobile
  },
  Auth: state => {
    return state.Auth
  }
}
