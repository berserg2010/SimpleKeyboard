<template>
  <header>
    <span class="logo">Simple Keyboard</span>

    <el-space />

    <el-tag round style="font-size: 16px">
      {{ charsLength }}
    </el-tag>

    <el-popconfirm
      title="Удаляем текст?"
      confirm-button-text="Да"
      cancel-button-text="Нет"
      @confirm.stop="onRemoveText"
      @cancel.stop
    >
      <template #reference>
        <el-button class="header__button" circle @click.stop>
          <el-icon :size="14" style="vertical-align: middle">
            <component :is="DocumentDelete" />
          </el-icon>
        </el-button>
      </template>
    </el-popconfirm>

    <el-upload
      v-model:file-list="uploadFiles"
      class="header__upload"
      action="#"
      accept=".txt"
      :auto-upload="false"
      :show-file-list="false"
      :limit="1"
      :on-change="onUploadText"
      :on-remove="onUploadText"
      @click.stop
    >
      <el-button class="header__button" circle>
        <el-icon style="vertical-align: middle" :size="14">
          <component :is="Download" />
        </el-icon>
      </el-button>
    </el-upload>

    <el-button class="header__button" circle @click.stop.prevent="onExportText">
      <el-icon style="vertical-align: middle" :size="14">
        <component :is="Upload" />
      </el-icon>
    </el-button>

    <el-button class="header__button" v-if="isFullscreen" circle @click.stop.prevent="onToggleShowKeyboard">
      <el-icon style="vertical-align: middle" :size="14">
        <component :is="isHiddenKeyboard ? ArrowUp : ArrowDown" />
      </el-icon>
    </el-button>

    <el-button class="header__button" ref="fullscreenButton" circle @click.stop.prevent="onToggleFullscreen">
      <el-icon style="vertical-align: middle" :size="14">
        <component :is="isFullscreen ? Close : FullScreen" />
      </el-icon>
    </el-button>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { ArrowDown, ArrowUp, Close, DocumentDelete, Download, FullScreen, Upload } from '@element-plus/icons-vue';
import useFullscreen from '../use/useFullscreen';
import useScroll from '../use/useScroll';
import useTextExport from '../use/useTextExport';

export default defineComponent({
  name: 'MainHeader',
  setup() {
    const store = useStore();

    const { fullscreenElement, fullscreenButton, isFullscreen, onToggleFullscreen } = useFullscreen();
    const { scrollElement } = useScroll();
    const { onExportText, onUploadText, uploadFiles, onRemoveText } = useTextExport();

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

    return {
      charsLength,
      uploadFiles,
      onExportText,
      onUploadText,
      onRemoveText,
      isFullscreen,
      isHiddenKeyboard,
      onToggleShowKeyboard,
      onToggleFullscreen,
      fullscreenButton,

      ArrowDown,
      ArrowUp,
      Close,
      FullScreen,
      Download,
      Upload,
      DocumentDelete,
    };
  },
});
</script>
