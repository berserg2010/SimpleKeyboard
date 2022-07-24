interface FsDocumentElement extends HTMLParagraphElement {
  webkitRequestFullScreen?: () => void;
  mozRequestFullScreen?: () => void;
  msRequestFullscreen?: () => void;
}

interface FsDocument extends Document {
  webkitFullscreenElement?: Element;
  mozFullScreenElement?: Element;
  msFullscreenElement?: Element;
  webkitCancelFullScreen?: () => void;
  mozCancelFullScreen?: () => void;
  msExitFullscreen?: () => void;
}
