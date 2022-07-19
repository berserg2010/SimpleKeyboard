<template>
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
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { ArrowDown, ArrowUp, Close, DocumentAdd, FullScreen } from '@element-plus/icons-vue';
import useFullscreen from '../use/useFullscreen';
import useScroll from '../use/useScroll';
import useTextExport from '../use/useTextExport';

export default defineComponent({
  name: 'MainHeader',
  setup() {
    const store = useStore();

    const { fullscreenElement, fullscreenButton, isFullscreen, toggleFullscreen } = useFullscreen();
    const { scrollElement } = useScroll();
    const { textExport } = useTextExport();

    const isHiddenKeyboard = computed<boolean>(() => store.getters.readIsHiddenKeyboard);
    const charsLength = computed(() => store.getters.readCharsLength);

    /**
     * Переключатель отображения клавиатуры.
     */
    const onToggleShowKeyboard = async () => {
      store.commit('toggleHiddenKeyboard');

      if (fullscreenElement.value && !isHiddenKeyboard.value) {
        // Если fullscreen и клавиатура отображается - прокрутить
        await scrollElement();
      }
    };

    /**
     * Переключить полноэкранный режим.
     */
    const onToggleFullscreen = async () => {
      isFullscreen.value && store.commit('toggleHiddenKeyboard', false);
      toggleFullscreen();
      await scrollElement();
    };

    return {
      charsLength,
      textExport,
      isFullscreen,
      isHiddenKeyboard,
      onToggleShowKeyboard,
      onToggleFullscreen,
      fullscreenButton,

      DocumentAdd,
      ArrowDown,
      ArrowUp,
      Close,
      FullScreen,
    };
  },
});
</script>
