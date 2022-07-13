<template>
  <div class="wrapper" ref="fullscreenElement">
    <header>
      <span class="logo">Simple Keyboard</span>

      <el-space />

      <el-tag round style="font-size: 16px">
        {{ charsLength }}
      </el-tag>

      <el-button class="header__button" circle @click.stop.prevent="textExport">
        <el-icon :size="14" style="vertical-align: middle">
          <component :is="DocumentAdd" />
        </el-icon>
      </el-button>

      <el-button class="header__button" v-if="isFullscreen" circle @click.stop.prevent="onToggleShowKeyboard">
        <el-icon :size="14" style="vertical-align: middle">
          <component :is="isHiddenKeyboard ? ArrowUp : ArrowDown" />
        </el-icon>
      </el-button>

      <el-button class="header__button" ref="fullscreenButton" circle @click.stop.prevent="onToggleFullscreen">
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
import { computed, defineComponent, onMounted, ref } from 'vue';

import TextInput from '@/components/TextInput.vue';
import KeyboardComponent from '@/components/KeyboardComponent.vue';
import useIterator from './use/useIterator';
import useScroll from './use/useScroll';
import useFullscreen from './use/useFullscreen';
import useTextExport from './use/useTextExport';

import { ArrowDown, ArrowUp, Close, DocumentAdd, FullScreen } from '@element-plus/icons-vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'App',
  components: {
    TextInput,
    KeyboardComponent,
  },
  setup() {
    const store = useStore();
    const { timerId, running, keyboard, button, removeClassFromElements, rowsIterator, colsIterator, getKeyboard } =
      useIterator();

    const { scrollElementToBottom } = useScroll();
    const { textExport } = useTextExport();
    const { fullscreenElement, fullscreenButton, isFullscreen, toggleFullscreen, fullscreenEventHandler } =
      useFullscreen();

    const charsLength = computed(() => store.getters.readCharsLength);

    const isHiddenKeyboard = ref(false);
    /**
     * Переключатель отображения клавиатуры.
     */
    const onToggleShowKeyboard = () => {
      isHiddenKeyboard.value = !isHiddenKeyboard.value;

      if (fullscreenElement.value && !isHiddenKeyboard.value) {
        // Если fullscreen и клавиатура отображается - прокрутить в конец текста
        scrollElementToBottom();
      }
    };

    const onToggleFullscreen = async () => {
      isFullscreen.value && (isHiddenKeyboard.value = false);
      toggleFullscreen();
      await scrollElementToBottom();
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
      onToggleFullscreen,
      getKeyboard,
      isHiddenKeyboard,
      onToggleShowKeyboard,
      textExport,

      ArrowDown,
      ArrowUp,
      Close,
      FullScreen,
      DocumentAdd,

      charsLength,
    };
  },
});
</script>
