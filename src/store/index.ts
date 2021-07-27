import { createStore } from 'vuex';
import keyboardStore from './modules/keyboardStore'


const debug = process.env.NODE_ENV !== 'production';

export const store = createStore({
  modules: {
    keyboardStore,
  },
  strict: debug,
});
