import { ActionTree, MutationTree } from 'vuex';

export interface State {
  input: string;
  currentLayout: string;
  modifier: string;
  beforeLayout: string;
}

const state = (): State => {
  return {
    input: '',
    currentLayout: 'rus',
    // modifier: 'none',
    modifier: 'upper',
    beforeLayout: '',
  };
};

const mutations = <MutationTree<State>>{
  inputText(state, input) {
    state.input = state.input + input;
  },
  textBackspace(state) {
    state.input = state.input.slice(0, state.input.length - 1);
  },
  setCurrentLayout(state, currentLayout) {
    state.currentLayout = currentLayout;
  },
  setModifier(state, modifier) {
    state.modifier = modifier;
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
  setModifier({ commit }, modifier) {
    commit('setModifier', modifier);
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
