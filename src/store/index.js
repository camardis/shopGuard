import { createStore } from 'vuex';
import authService from '../../services/authService';

export default createStore({
  state: {
    isAuthenticated: false
  },
  mutations: {
    SET_AUTHENTICATED(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    }
  },
  actions: {
    async login({ commit }, { email, password }) {
      try {
        await authService.login(email, password);
        commit('SET_AUTHENTICATED', true);
      } catch (error) {
        // Handle login error
        console.error('Login failed:', error);
        throw error;
      }
    },
    logout({ commit }) {
      authService.logout();
      commit('SET_AUTHENTICATED', false);
    },
    checkAuthState({ commit }) {
      const isAuthenticated = authService.isAuthenticated();
      commit('SET_AUTHENTICATED', isAuthenticated);
    }
  }
});
