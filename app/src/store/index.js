import { createStore } from 'vuex';

export default createStore({
  state: {
    logged_in: true ? localStorage.getItem('user') : false,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
