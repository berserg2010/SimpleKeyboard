import { ActionTree, GetterTree, MutationTree } from 'vuex';

export interface State {
  text: string;
  currentLayout: string;
  modifier: string;
  beforeLayout: string;
  caretPosition: number | null;
}

const state = (): State => {
  return {
    text: '',
    currentLayout: 'rus',
    // modifier: 'none',
    modifier: 'upper',
    beforeLayout: '',
    caretPosition: null,
  };
};

const mutations = <MutationTree<State>>{
  inputKeyboardText(state, text) {
    state.text = state.text + text;
  },
  inputText(state, text) {
    state.text = text;
  },
  textBackspace(state) {
    state.text = state.text.slice(0, state.text.length - 1);
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
  setCaretPosition(state, payload: number) {
    state.caretPosition = payload;
  },
};

const actions = <ActionTree<State, any>>{
  inputKeyboardText({ commit }, text) {
    commit('inputKeyboardText', text);
  },
  inputText({ commit }, text) {
    commit('inputText', text);
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
  setCaretPosition({ commit }, payload: number) {
    commit('setCaretPosition', payload);
  },
};

const getters = <GetterTree<State, any>>{
  readText(state) {
    return state.text;
  },
  readTextLength(state) {
    return state.text.length;
  },
  readCaretPosition(state) {
    return state.caretPosition;
  },
};

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations,
};
