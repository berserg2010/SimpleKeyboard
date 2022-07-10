<template>
  <button ref="buttonRef" class="button" @click.stop.prevent="clickButton">{{ checkButton }}</button>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

import { actionModifier } from '../keyLayouts';

export default defineComponent({
  name: 'ButtonComponent',
  props: {
    char: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    const buttonRef = ref<HTMLButtonElement | null>(null);

    const currentLayout = computed(() => store.state.keyboardStore.currentLayout);
    const modifier = computed(() => store.state.keyboardStore.modifier);
    const beforeLayout = computed(() => store.state.keyboardStore.beforeLayout);

    const checkButton = computed(() => {
      let char = '';
      const firstChar = props.char[0];
      const lastChar = props.char[props.char.length - 1];

      buttonRef.value?.classList.remove('button--symbol');

      if (
        (firstChar === '{' && lastChar === '}') ||
        (firstChar === '[' && lastChar === ']') ||
        (firstChar === '<' && lastChar === '>')
      ) {
        char = props.char.slice(1, props.char.length - 1);

        switch (char) {
          case 'upper': {
            char = modifier.value === 'none' ? '⇧' : '⇩';
            break;
          }
          case 'backspace': {
            char = 'Шаг назад';
            break;
          }
          case 'back': {
            char = '⇦';
            break;
          }
          case 'emoji': {
            char = '😉';
            break;
          }
          case 'phrases': {
            char = 'Фразы';
            break;
          }
        }
      } else {
        char = props.char;
        // Блок проверки спец символов
        switch (char) {
          case '\n': {
            char = '↵';
            break;
          }
          case '_': {
            char = '_';
            break;
          }
          case '': {
            // char = '↰';
            char = '^';
            break;
          }
          case 'left': {
            char = '←';
            break;
          }
          case 'top': {
            char = '↑';
            break;
          }
          case 'right': {
            char = '→';
            break;
          }
          case 'bottom': {
            char = '↓';
            break;
          }
          default:
            char = actionModifier[modifier.value](char);
        }
        // Изменение цвета кнопок с буквами
        const regexp = /[A-Za-zА-ЯЁа-яё]/;
        if (char.search(regexp) !== -1) {
          buttonRef.value?.classList.add('button--symbol');
        }
      }
      return char;
    });

    const clickButton = (ev: Event) => {
      const char = props.char;
      const firstChar = char[0];
      const lastChar = char[char.length - 1];
      const actionType = char.slice(1, char.length - 1);

      if (firstChar === '{' && lastChar === '}') {
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
      } else if (['left', 'top', 'right', 'bottom'].includes(char)) {
        //
      } else {
        let textContent = (ev.target as HTMLDocument).textContent;
        // Блок проверки спец символов
        if (['\n', '_', ''].includes(char)) {
          textContent = char;
        }
        // Вернуть заглавные к строчным буквам
        if (store.state.keyboardStore.modifier !== 'upper') {
          store.dispatch('setModifier', 'upper');
        }
        store.dispatch('inputKeyboardText', textContent);
      }
    };

    return {
      buttonRef,
      checkButton,
      clickButton,
    };
  },
});
</script>
