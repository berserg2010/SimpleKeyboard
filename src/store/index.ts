import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store, GetterTree, MutationTree, ActionTree } from 'vuex';
import keyboardStore from './modules/keyboardStore'


const debug = process.env.NODE_ENV !== 'production';

export const store = createStore({
  modules: {
    keyboardStore,
  },
  strict: debug,
});
