<template>
  <section
    ref="fullscreenElement"
    class="text_input"
  >
    <el-input
      type="textarea"
      :autosize="{ minRows: 3, maxRows: 4 }"
      placeholder="Поле для ввода"
      v-model="input"
    ></el-input>
    <el-button
      ref="fullscreenButton"
      :icon="isFullscreen ? 'el-icon-close' : 'el-icon-full-screen'"
      circle
      @click.stop.prevent="fullscreenHandler"
    ></el-button>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onUpdated, nextTick } from 'vue';
import { useStore } from 'vuex';


export default defineComponent({
  name: 'TextInput',
  setup: function () {
    const store = useStore();

    interface FsDocumentElement extends HTMLElement {
      webkitRequestFullScreen?: () => void;
      mozRequestFullScreen?: () => void;
      msRequestFullscreen?: () => void;
    }

    interface FsDocument extends HTMLDocument {
      webkitFullscreenElement?: Element;
      mozFullScreenElement?: Element;
      msFullscreenElement?: Element;
      webkitCancelFullScreen?: () => void;
      mozCancelFullScreen?: () => void;
      msExitFullscreen?: () => void;
    }

    const fullscreenElement = ref<FsDocumentElement | null>(null);
    const fullscreenButton = ref<HTMLButtonElement | null>(null);
    const isFullscreen = ref(false);

    const input = computed(() => store.state.keyboardStore.input);

    const exitFullscreen = () => {
      // console.info('[exitFullscreen]')
      const fsDoc = document as FsDocument;

      const fsElement = fsDoc.fullscreenElement
        || fsDoc.webkitFullscreenElement
        || fsDoc.msFullscreenElement
        || fsDoc.mozFullScreenElement;

      if (fsElement) {
        let exitFS;
        if (fsDoc.exitFullscreen) {
          exitFS = fsDoc.exitFullscreen();
        } else if (fsDoc.webkitCancelFullScreen) {
          exitFS = fsDoc.webkitCancelFullScreen();
        } else if (fsDoc.msExitFullscreen) {
          exitFS = fsDoc.msExitFullscreen();
        } else if (fsDoc.mozCancelFullScreen) {
          exitFS = fsDoc.mozCancelFullScreen();
        } else {
          alert('Выход из полноэкранного режима не работает, для выхода нажмите Esc.');
        }

        if (exitFS) {
          exitFS
            .then(() => {
              console.info('Document Exited from Full screen mode');
            })
            .catch((err) => {
              console.warn(err);
            })
        }
      }
    }

    const fullscreenHandler = () => {
      if (!isFullscreen.value) {
        if (fullscreenElement.value!.requestFullscreen!) {
          fullscreenElement.value!.requestFullscreen();
        } else if (fullscreenElement.value!.webkitRequestFullScreen) {
          fullscreenElement.value!.webkitRequestFullScreen();
        } else if (fullscreenElement.value!.msRequestFullscreen) {
          fullscreenElement.value!.msRequestFullscreen();
        } else if (fullscreenElement.value!.mozRequestFullScreen) {
          fullscreenElement.value!.mozRequestFullScreen();
        }
      } else {
        exitFullscreen();
      }
    };

    const scrollToBottom = (el: HTMLTextAreaElement | null) => {
      el?.scrollBy(0, el.scrollHeight);
    };

    const fullscreenEventHandler = () => {
      let fsElement;
      const fsDoc = document as FsDocument;

      if (fsDoc.fullscreenElement !== undefined) {
        fsElement = fsDoc.fullscreenElement;
      } else if (fsDoc.webkitFullscreenElement !== undefined) {
        fsElement = fsDoc.webkitFullscreenElement;
      }

      isFullscreen.value = fsElement !== null;

      const fsElementGet = fullscreenElement.value!.getElementsByTagName('textarea')[0];

      if (isFullscreen.value) {
        fsElementGet.style.height = '100vh';
      } else {
        fsElementGet.style.height = 'auto';
        scrollToBottom(fsElementGet)
      }
    };

    onMounted(() => {
      document.addEventListener('fullscreenchange', fullscreenEventHandler);
      document.addEventListener('webkitfullscreenchange', fullscreenEventHandler);
    });

    onUpdated(() => {
      const textarea = fullscreenElement.value!.getElementsByTagName('textarea')[0];
      nextTick(() => {
        scrollToBottom(textarea);
      });
    });

    return {
      input,
      fullscreenElement,
      fullscreenButton,
      isFullscreen,
      fullscreenHandler,
    };
  },
});
</script>
