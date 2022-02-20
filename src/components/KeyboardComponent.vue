<template>
  <section v-show="!isHiddenKeyboard" ref="keyboardRef" class="keyboard">
    <div v-for="(i, key) in layout" :key="key" class="row">
      <ButtonComponent v-for="(j, key) in i" :key="key" :char="j" />
    </div>
  </section>
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
    isHiddenKeyboard: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const store = useStore();

    const currentLayout = computed(() => store.state.keyboardStore.currentLayout);
    const layout = computed(() => layouts[currentLayout.value]);

    const keyboardRef = ref('');

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
    };
  },
});
</script>
