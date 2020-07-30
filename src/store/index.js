import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
const state= {
  longitude: null,
  latitude: null,
};
const mutations = {
setterheroes(state, num){
  state.latitude = num;
},
settterheroes(state, num){
  state.longitude = num;
}


};
const actions = {
    setlatitude({commit}, num){
      commit('setterheroes', num);
    },
    setlongitude({commit}, num){
      commit('settterheroes', num);
    }

};
const getters = {};

/* eslint-disable no-new */
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [createPersistedState()],
  modules: {
  }
})

export default store
