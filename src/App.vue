<template>
  <div class="wrapper" ref="fullscreenElement">
    <header>
      <span class="logo">Simple Keyboard</span>

      <el-button
        v-if="isFullscreen"
        ref="fullscreenButton"
        :icon="isHiddenKeyboard ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"
        circle
        @click.stop.prevent="hideKeyboardHandler"
      ></el-button>
      <el-button
        ref="fullscreenButton"
        :icon="isFullscreen ? 'el-icon-close' : 'el-icon-full-screen'"
        circle
        @click.stop.prevent="fullscreenHandler"
      ></el-button>
    </header>
    <main>
      <TextInput
        :isFullscreen="isFullscreen"
      />
      <Keyboard
        :getKeyboard="getKeyboard"
        :isHiddenKeyboard="isHiddenKeyboard"
      />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

import TextInput from '@/components/TextInput.vue';
import Keyboard from '@/components/Keyboard.vue';
import useIterator from '@/use/useIterator';
import useScroll from '@/use/useScroll';
import useFullscreen from '@/use/useFullscreen';


export default defineComponent({
  name: 'App',
  components: {
    TextInput,
    Keyboard,
  },
  setup() {
    const {
      timerId,
      running,
      keyboard,
      button,
      removeClassFromElements,
      rowsIterator,
      colsIterator,
      getKeyboard,
    } = useIterator();

    const { scrollToBottom } = useScroll();

    const {
      fullscreenElement,
      fullscreenButton,
      isFullscreen,
      fullscreenHandler,
      fullscreenEventHandler,
    } = useFullscreen();

    const isHiddenKeyboard = ref(false);
    const hideKeyboardHandler = () => {
      isHiddenKeyboard.value = !isHiddenKeyboard.value;

      const fsElementGet = fullscreenElement.value!.getElementsByTagName('textarea')[0];
      if (isHiddenKeyboard.value) {
        fsElementGet.style.height = 'calc(100vh - 60px - 32px)';
      } else {
        fsElementGet.style.height = 'auto';
        scrollToBottom(fsElementGet);
      }
    };

    onMounted(() => {
      document.addEventListener('fullscreenchange', fullscreenEventHandler);
      document.addEventListener('webkitfullscreenchange', fullscreenEventHandler);

      document.addEventListener('click', () => {
        if (running.value === '') {
          timerId.value = rowsIterator();
          running.value = 'row';
        } else if (running.value === 'row') {
          clearInterval(timerId.value!);
          removeClassFromElements(keyboard.value as any);
          timerId.value = colsIterator();
          running.value = 'col';
        } else {
          clearInterval(timerId.value!);
          removeClassFromElements(keyboard.value as any);
          button.value!.click();
          timerId.value = rowsIterator();
          running.value = 'row';
        }
      });
    });

    return {
      fullscreenElement,
      fullscreenButton,
      isFullscreen,
      fullscreenHandler,
      getKeyboard,
      isHiddenKeyboard,
      hideKeyboardHandler,
    };
  },
});
</script>
