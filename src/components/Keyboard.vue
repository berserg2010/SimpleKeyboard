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
        <el-button
          class="button"
          type="info"
          plain
        >{{ j }}</el-button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import layouts from '@/keyLayouts.ts'


export default defineComponent({
  name: 'Keyboard',
  computed: {
    layout() { return  layouts['rus'] },
    colsNumber() { return Math.max((this as any).layout.map((value: Array<string>) => {value.length})) },
  }
});
</script>
