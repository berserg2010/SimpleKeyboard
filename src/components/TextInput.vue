<template>
  <section class="text_input">
    <el-input
      type="textarea"
      :autosize="{ minRows: 4, maxRows: 10 }"
      :autofocus="true"
      placeholder="Поле для текска"
      v-model="input"
    ></el-input>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';


export default defineComponent({
  name: 'TextInput',
  data() {
    return {
      textarea: (this as any).input,
    };
  },
  computed: {
    ...mapState<any>({
      input: (state: any): string => state.keyboardStore.input,
    }),
  }
});
</script>
