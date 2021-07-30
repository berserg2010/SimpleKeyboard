<template>
  <section class="text_input">
    <el-input
      type="textarea"
      :autosize="{ minRows: 4, maxRows: 10 }"
      placeholder="Поле для ввода"
      v-model="input"
    ></el-input>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed, nextTick } from 'vue';
import { useStore } from 'vuex';


export default defineComponent({
  name: 'TextInput',
  setup() {
    const store = useStore();

    const input = computed(() => store.state.keyboardStore.input);

    return {
      input,
    };
  },
  updated() {
    const textarea: HTMLTextAreaElement = document.querySelector('textarea')!;
    nextTick(() => {
      textarea.scrollBy(0, textarea.scrollHeight);
    });
  },
});
</script>
