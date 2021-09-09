<template>
  <section class="text_input">
    <textarea
      type="textarea"
      placeholder="Поле для ввода"
      :rows="maxRows"
      v-model="input"
    ></textarea>
  </section>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed, onUpdated, nextTick } from 'vue';
import { useStore } from 'vuex';

import useScroll from '@/use/useScroll';


export default defineComponent({
  name: 'TextInput',
  props: {
    isFullscreen: {
      type: Boolean,
      default: false,
    },
  },
  setup: function (props) {
    const store = useStore();
    const { scrollToBottom } = useScroll();

    const { isFullscreen } = toRefs(props);

    const input = computed(() => store.state.keyboardStore.input);

    const maxRows = computed(() => {
      return isFullscreen.value ? 6 : 3;
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
