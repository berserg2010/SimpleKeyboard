import { computed, ref } from 'vue';
import { FULLSCREEN_ELEMENT_CLASSNAME } from '../constants';
import { useStore } from 'vuex';
import useScroll from './useScroll';

export default function () {
  const store = useStore();
  const { scrollElement } = useScroll();

  const fullscreenButton = ref<HTMLButtonElement | null>(null);

  const fullscreenElement = computed(() => {
    const [el] = document.getElementsByClassName(FULLSCREEN_ELEMENT_CLASSNAME);
    return el as FsDocumentElement | undefined;
  });
  const isFullscreen = computed<boolean>(() => store.getters.readIsFullscreen);

  /**
   * Выйти из полноэкранного режима.
   */
  const exitFullscreen = () => {
    // console.info('[exitFullscreen]')
    const fsDoc = document as FsDocument;

    const fsElement =
      fsDoc.fullscreenElement ||
      fsDoc.webkitFullscreenElement ||
      fsDoc.msFullscreenElement ||
      fsDoc.mozFullScreenElement;

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
          });
      }
    }
  };

  /**
   * Переключение полноэкранного режима.
   */
  const toggleFullscreen = () => {
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

  /**
   * Переключение состояния при изменении полноэкранного режима.
   */
  const fullscreenEventHandler = () => {
    let fsElement;
    const fsDoc = document as FsDocument;

    if (fsDoc.fullscreenElement !== undefined) {
      fsElement = fsDoc.fullscreenElement;
    } else if (fsDoc.webkitFullscreenElement !== undefined) {
      fsElement = fsDoc.webkitFullscreenElement;
    }
    store.commit('toggleIsFullscreen', fsElement !== null);
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
    fullscreenElement,
    fullscreenButton,
    isFullscreen,
    fullscreenEventHandler,
    onToggleFullscreen,
  };
}
