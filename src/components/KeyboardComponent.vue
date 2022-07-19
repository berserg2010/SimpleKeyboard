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
import { computed, defineComponent, onMounted, onUpdated, ref } from 'vue';
import { useStore } from 'vuex';

import layouts from '../keyLayouts';
import ButtonComponent from './ButtonComponent.vue';

export default defineComponent({
  name: 'KeyboardComponent',
  components: {
    ButtonComponent,
  },
  props: {
    getKeyboard: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    const keyboardRef = ref('');

    const currentLayout = computed(() => store.state.keyboardStore.currentLayout);
    const layout = computed(() => layouts[currentLayout.value]);
    const isHiddenKeyboard = computed(() => store.getters.readIsHiddenKeyboard);

    onMounted(() => {
      // console.info('[onMounted]')
      props.getKeyboard(keyboardRef.value);
    });

    onUpdated(() => {
      // console.info('[onUpdated]')
      props.getKeyboard(keyboardRef.value);
    });

    return {
      layout,
      keyboardRef,
      isHiddenKeyboard,
    };
  },
});
</script>
