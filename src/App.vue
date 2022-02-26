<template>
  <div class="wrapper" ref="fullscreenElement">
    <header>
      <span class="logo">Simple Keyboard</span>

      <el-button circle @click.stop.prevent="textExport">
        <el-icon :size="14" style="vertical-align: middle">
          <component :is="DocumentAdd" />
        </el-icon>
      </el-button>

      <el-button v-if="isFullscreen" ref="fullscreenButton" circle @click.stop.prevent="hideKeyboardHandler">
        <el-icon :size="14" style="vertical-align: middle">
          <component :is="isHiddenKeyboard ? ArrowUp : ArrowDown" />
        </el-icon>
      </el-button>
      <el-button ref="fullscreenButton" circle @click.stop.prevent="fullscreenHandler">
        <el-icon :size="14" style="vertical-align: middle">
          <component :is="isFullscreen ? Close : FullScreen" />
        </el-icon>
      </el-button>
    </header>
    <main>
      <TextInput :isFullscreen="isFullscreen" />
      <KeyboardComponent :getKeyboard="getKeyboard" :isHiddenKeyboard="isHiddenKeyboard" />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

import TextInput from '@/components/TextInput.vue';
import KeyboardComponent from '@/components/KeyboardComponent.vue';
import useIterator from './use/useIterator';
import useScroll from './use/useScroll';
import useFullscreen from './use/useFullscreen';
import useTextExport from './use/useTextExport';

import { ArrowDown, ArrowUp, Close, DocumentAdd, FullScreen } from '@element-plus/icons-vue';

export default defineComponent({
  name: 'App',
  components: {
    TextInput,
    KeyboardComponent,
  },
  setup() {
    const { timerId, running, keyboard, button, removeClassFromElements, rowsIterator, colsIterator, getKeyboard } =
      useIterator();

    const { scrollToBottom } = useScroll();
    const { textExport } = useTextExport();
    const { fullscreenElement, fullscreenButton, isFullscreen, fullscreenHandler, fullscreenEventHandler } =
      useFullscreen();

    const isHiddenKeyboard = ref(false);
    const hideKeyboardHandler = () => {
      isHiddenKeyboard.value = !isHiddenKeyboard.value;

      if (fullscreenElement.value) {
        const fsElementGet = fullscreenElement.value.getElementsByTagName('textarea')[0];
        if (isHiddenKeyboard.value) {
          fsElementGet.style.height = 'calc(100vh - 60px - 32px)';
        } else {
          fsElementGet.style.height = 'auto';
          scrollToBottom(fsElementGet);
        }
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
      textExport,

      ArrowDown,
      ArrowUp,
      Close,
      FullScreen,
      DocumentAdd,
    };
  },
});
</script>
