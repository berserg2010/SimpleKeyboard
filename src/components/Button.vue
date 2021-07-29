<template>
  <button
    class="button"
    @click.stop.prevent="clickButton"
  >{{ checkButton }}</button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

import { actionModifier } from '@/keyLayouts.ts';


export default defineComponent({
  name: 'Button',
  props: {
    char: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    const currentLayout = computed(() => store.state.keyboardStore.currentLayout);
    const modifier = computed(() => store.state.keyboardStore.modifier);
    const beforeLayout = computed(() => store.state.keyboardStore.beforeLayout);

    const checkButton = computed(() => {
      let char = '';
      const firstChar = props.char[0];
      const lastChar = props.char[props.char.length - 1];

      if (
        (firstChar === '{' && lastChar === '}')
        || (firstChar === '[' && lastChar === ']')
        || (firstChar === '<' && lastChar === '>')
      ) {
        char = props.char.slice(1, props.char.length - 1);

        if (char === 'upper') {
          char = modifier.value === 'none' ? '⇧' : '⇩';
        } else if (char === 'backspace') {
          char = '⇦';
        }
      } else {
        char =  actionModifier[modifier.value](props.char);
      }
      return char;
    });

    const clickButton = (ev: Event) => {
      const firstChar = props.char[0];
      const lastChar = props.char[props.char.length - 1];
      const actionType = props.char.slice(1, props.char.length - 1);

      if (firstChar === '{' && lastChar === '}')  {
        store.dispatch('setBeforeLayout', currentLayout.value);
        store.dispatch('setCurrentLayout', actionType);
      } else if (firstChar === '[' && lastChar === ']') {
        if (modifier.value === 'upper' && actionType === 'upper') {
          store.dispatch('setModifier', 'none');
        } else {
          store.dispatch('setModifier', actionType);
        }
      } else if (firstChar === '<' && lastChar === '>') {
        if (actionType === 'back') {
          store.dispatch('setCurrentLayout', beforeLayout.value);
          store.dispatch('setBeforeLayout', '');
        } else if (actionType === 'backspace') {
          store.commit('textBackspace');
        }
      } else {
        store.dispatch('inputText', (ev.target as HTMLDocument).textContent);
      }
    };

    return {
      checkButton, clickButton,
    };
  },
});
</script>
