<template>
  <section ref="keyboardRef" class="keyboard">
    <div
      v-for="(i, key) in layout"
      :key="key"
      class="row"
    >
      <Button
        v-for="(j, key) in i"
        :key="key"
        :char="j"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed, onUpdated, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

import layouts from '@/keyLayouts.ts'
import Button from './Button.vue';


export default defineComponent({
  name: 'Keyboard',
  components: {
    Button,
  },
  props: {
    getKeyboard: {
      type: Function,
      required: true,
    }
  },
  setup(props) {
    const store = useStore();
    const currentLayout = computed(() => store.state.keyboardStore.currentLayout);
    const layout = computed(() => layouts[currentLayout.value]);

    const keyboardRef = ref('')

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
