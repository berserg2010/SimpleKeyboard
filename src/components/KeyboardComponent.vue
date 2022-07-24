<template>
  <transition name="slide-fade">
    <section v-show="!isHiddenKeyboard" ref="keyboardRef" class="keyboard">
      <div v-for="(i, key) in layout" :key="key" class="row">
        <ButtonComponent v-for="(j, key) in i" :key="key" :char="j" />
      </div>
    </section>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, ref, watch } from 'vue';
import { useStore } from 'vuex';

import layouts from '../keyLayouts';
import ButtonComponent from './ButtonComponent.vue';

export default defineComponent({
  name: 'KeyboardComponent',
  components: {
    ButtonComponent,
  },
  emits: ['change'],
  setup(props, { emit }) {
    const store = useStore();

    const keyboardRef = ref('');

    const currentLayout = computed(() => store.state.keyboardStore.currentLayout);
    const layout = computed(() => layouts[currentLayout.value]);
    const isHiddenKeyboard = computed(() => store.getters.readIsHiddenKeyboard);

    watch(
      currentLayout,
      async () => {
        await nextTick();
        emit('change', keyboardRef.value);
      },
      { immediate: true },
    );

    return {
      layout,
      keyboardRef,
      isHiddenKeyboard,
    };
  },
});
</script>
