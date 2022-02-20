import { ref } from 'vue';

export default function () {
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

  const fullscreenEventHandler = () => {
    let fsElement;
    const fsDoc = document as FsDocument;

    if (fsDoc.fullscreenElement !== undefined) {
      fsElement = fsDoc.fullscreenElement;
    } else if (fsDoc.webkitFullscreenElement !== undefined) {
      fsElement = fsDoc.webkitFullscreenElement;
    }

    isFullscreen.value = fsElement !== null;
  };

  return {
    fullscreenElement,
    fullscreenButton,
    isFullscreen,
    fullscreenHandler,
    fullscreenEventHandler,
  };
}
