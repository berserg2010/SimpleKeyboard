<template>
  <section :class="SCROLL_ELEMENT_CLASSNAME">
    <p :class="TEXT_ELEMENT_CLASSNAME" v-text="text"></p>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, watch } from 'vue';
import { useStore } from 'vuex';

import useScroll from '../use/useScroll';
import useCaret from '../use/useCaret';
import { SCROLL_ELEMENT_CLASSNAME, TEXT_ELEMENT_CLASSNAME } from '../constants';

export default defineComponent({
  name: 'TextInput',
  setup() {
    const store = useStore();
    const { scrollElement } = useScroll();
    const { setCaret } = useCaret();

    const text = computed(() => store.getters.readText);
    const caretPosition = computed(() => store.getters.readCaretPosition);

    watch(caretPosition, () => {
      setCaret(caretPosition.value);
      scrollElement();
    });

    onMounted(() => {
      setCaret();
      scrollElement();
    });

    return {
      text,

      SCROLL_ELEMENT_CLASSNAME,
      TEXT_ELEMENT_CLASSNAME,
    };
  },
});
</script>
