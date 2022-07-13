import { ActionTree, GetterTree, MutationTree } from 'vuex';
import CaretPosition from '../../classes/caretPosition';

export interface State {
  text: string;
  currentLayout: string;
  modifier: string;
  beforeLayout: string;
  caretPosition: number;
}

const state = (): State => {
  return {
    text: '',
    currentLayout: 'rus',
    // modifier: 'none',
    modifier: 'upper',
    beforeLayout: '',
    caretPosition: 0,
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
    state.text = CaretPosition.getCharArray(state.text, 0, -1);
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
