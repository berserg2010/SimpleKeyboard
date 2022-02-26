<template>
  <section class="text_input">
    <textarea type="textarea" placeholder="Поле для ввода" :rows="maxRows" v-model="input"></textarea>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, onUpdated, toRefs } from 'vue';
import { useStore } from 'vuex';

import useScroll from '../use/useScroll';

export default defineComponent({
  name: 'TextInput',
  props: {
    isFullscreen: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const store = useStore();
    const { scrollToBottom } = useScroll();

    const { isFullscreen } = toRefs(props);

    const input = computed({
      get() {
        return store.state.keyboardStore.input;
      },
      set(newValue: string) {
        store.dispatch('inputText', newValue);
      },
    });

    const maxRows = computed(() => {
      return isFullscreen.value ? 4 : 3;
    });

    onUpdated(() => {
      const textarea = document.getElementsByTagName('textarea')[0];

      nextTick(() => {
        scrollToBottom(textarea);
      });
    });

    return {
      input,
      maxRows,
    };
  },
});
</script>
