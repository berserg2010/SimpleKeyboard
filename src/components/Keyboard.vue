<template>
  <section class="keyboard">
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
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

import layouts from '@/keyLayouts.ts'
import Button from './Button.vue';


export default defineComponent({
  name: 'Keyboard',
  components: {
    Button,
  },
  setup() {
    const store = useStore();
    const currentLayout = computed(() => store.state.keyboardStore.currentLayout);
    const layout = computed(() => layouts[currentLayout.value]);

    return {
      layout,
    };
  },
});
</script>
