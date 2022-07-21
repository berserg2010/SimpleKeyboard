<template>
  <section :class="SCROLL_ELEMENT_CLASSNAME">
    <template v-for="(value, key) in textArray" :key="key">
      <span class="line_number" v-text="key + 1"></span>
      <span :class="TEXT_ELEMENT_CLASSNAME" v-text="value"></span>
    </template>
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
    const textArray = computed(() => text.value.split('\n'));
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
      textArray,
      SCROLL_ELEMENT_CLASSNAME,
      TEXT_ELEMENT_CLASSNAME,
    };
  },
});
</script>
