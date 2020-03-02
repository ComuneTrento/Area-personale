import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  getters: {
    user: state => {
      return state.user;
    },
    fiscalCode: state => {
      return state.user.codiceFiscale;
    },
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    },
  },
  actions: {
    setUser: ({commit, state}, newUser) => {
      commit('SET_USER', newUser);
      return state.user;
    },
  },
});
