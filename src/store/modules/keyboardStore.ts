import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store, GetterTree, MutationTree, ActionTree } from 'vuex';


export interface State {
  input: string,
  currentLayout: string,
  currentLayoutType: string,
  beforeLayout: string,
}

const state = (): State => {
  return {
    input: '',
    currentLayout: 'rus',
    currentLayoutType: 'lower',
    beforeLayout: '',
  };
};

const mutations = <MutationTree<State>>{
  inputText(state, input) {
    state.input = state.input + input;
  },
  setCurrentLayout(state, currentLayout) {
    state.currentLayout = currentLayout;
  },
  setCurrentLayoutType(state, currentLayoutType) {
    state.currentLayoutType = currentLayoutType;
  },
  setBeforeLayout(state, beforeLayout) {
    state.beforeLayout = beforeLayout;
  },
};

const actions = <ActionTree<State, any>>{
  inputText({ commit }, input) {
    commit('inputText', input);
  },
  setCurrentLayout({ commit }, currentLayout) {
    commit('setCurrentLayout', currentLayout);
  },
  setCurrentLayoutType({ commit }, currentLayoutType) {
    commit('setCurrentLayoutType', currentLayoutType);
  },
  setBeforeLayout({ commit }, beforeLayout) {
    commit('setBeforeLayout', beforeLayout);
  },
};

const getters = {};


export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations,
};

