<template>
  <section class="text_input">
    <el-input
      type="textarea"
      :autosize="{ minRows: 4, maxRows: 10 }"
      :autofocus="true"
      placeholder="Поле для текска"
      v-model="textarea"

    ></el-input>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'TextInput',
  data() {
    return {
      textarea: ref('')
    };
  },
});
</script>