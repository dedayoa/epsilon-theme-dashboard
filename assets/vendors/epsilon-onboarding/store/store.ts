import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from './mutations';
import { getters } from './getters';

declare let EpsilonOnboarding: any;

Vue.use( Vuex );

const state = EpsilonOnboarding;

state.importedDemo = false;

export default new Vuex.Store( {
  state,
  mutations,
  getters,
} );