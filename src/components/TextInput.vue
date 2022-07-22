<template>
  <section :class="SCROLL_ELEMENT_CLASSNAME" :style="[styles]">
    <template v-for="(value, key) in textArray" :key="key">
      <p class="line_number" v-text="key + 1"></p>
      <p :class="TEXT_ELEMENT_CLASSNAME" v-text="value"></p>
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

    const styles = computed(() => ({
      gridTemplateRows: textArray.value.length < 2 ? '1fr' : `repeat(${textArray.value.length - 1}, auto) 1fr`,
    }));

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
      styles,
    };
  },
});
</script>
