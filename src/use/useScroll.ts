import { nextTick } from 'vue';
import { CARET_CLASSNAME } from '../constants';

export default () => {
  /**
   * Прокрутить скролл, держать в области видимости элемент с указанным классом.
   */
  const scrollElement = async () => {
    await nextTick();
    const [caret] = document.getElementsByClassName(CARET_CLASSNAME);
    caret?.scrollIntoView({ block: 'center', behavior: 'auto' });
  };

  return {
    scrollElement,
  };
};
