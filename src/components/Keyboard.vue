<template>
  <section class="keyboard">
    <div
      v-for="(i, key) in layout"
      :key="key"
      class="row"
    >
      <div
        v-for="(j, key) in i"
        :key="key"
        class="col"
      >
        <Button :char="j" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

import layouts, { actionButtons } from '@/keyLayouts.ts'
import Button from './Button.vue';


export default defineComponent({
  name: 'Keyboard',
  components: {
    Button,
  },
  data() {
    return {
      changedLayout: null,
    }
  },
  computed: {
    ...mapState<any>({
      currentLayout: (state: any): string => state.keyboardStore.currentLayout,
      currentLayoutType: (state: any): string => state.keyboardStore.currentLayoutType,
    }),
    layout() {
      return layouts[(this as any).currentLayout][(this as any).currentLayoutType]
    },
  },
});
</script>
