<template>
  <el-header>Привет, Даня!</el-header>
  <el-main>
    <TextInput />
    <Keyboard />
  </el-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TextInput from "@/components/TextInput.vue";
import Keyboard from './components/Keyboard.vue';


export default defineComponent({
  name: 'App',
  components: {
    TextInput,
    Keyboard,
  },
});
</script>
