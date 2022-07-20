import { ActionTree, GetterTree, MutationTree } from 'vuex';
import CaretPosition from '../../classes/caretPosition';
import v from 'voca';

export interface State {
  text: string;
  currentLayout: string;
  modifier: string;
  beforeLayout: string;
  caretPosition: number;
  isFullscreen: boolean;
  isHiddenKeyboard: boolean;
}

const state = (): State => {
  return {
    text: '',
    currentLayout: 'rus',
    // modifier: 'none',
    modifier: 'upper',
    beforeLayout: '',
    caretPosition: 0,
    isFullscreen: false,
    isHiddenKeyboard: false,
  };
};

const mutations = <MutationTree<State>>{
  inputText(state, text: string) {
    state.text = text;
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
  toggleIsFullscreen(state, payload: boolean) {
    state.isFullscreen = payload;
  },
  toggleHiddenKeyboard(state, flag?: boolean) {
    if (typeof flag === 'undefined') {
      state.isHiddenKeyboard = !state.isHiddenKeyboard;
    } else {
      state.isHiddenKeyboard = flag;
    }
  },
};

const actions = <ActionTree<State, any>>{
  inputText({ commit, getters }, char: string) {
    const text = getters.readText;
    const caretPosition = getters.readCaretPosition;
    let result = '';

    if (!caretPosition) {
      result = char + text;
    } else if (caretPosition === text.length) {
      result = text + char;
    } else {
      result = text.slice(0, caretPosition) + char + text.slice(caretPosition);
    }
    commit('inputText', result);
    commit('setCaretPosition', caretPosition + char.length);
  },
  backspace({ commit, getters }) {
    const text = getters.readText;
    const caretPosition = getters.readCaretPosition;

    const char = CaretPosition.getLastChar(text.slice(0, caretPosition));
    const result = text.slice(0, caretPosition - char.length) + text.slice(caretPosition);

    commit('inputText', result);
    commit('setCaretPosition', caretPosition - char.length);
  },
  uploadText({ commit }, text: string) {
    commit('inputText', text);
    commit('setCaretPosition', 0);
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
  readCharsLength(state) {
    return v.countGraphemes(state.text);
  },
  readCaretPosition(state) {
    return state.caretPosition;
  },
  readIsFullscreen(state) {
    return state.isFullscreen;
  },
  readIsHiddenKeyboard(state) {
    return state.isHiddenKeyboard;
  },
};

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations,
};
