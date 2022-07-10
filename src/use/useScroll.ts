import { nextTick } from 'vue';
import { SCROLL_ELEMENT_CLASSNAME } from '../constants';

export default () => {
  /**
   * Прокрутить скролл в конец элемента.
   *
   * @param el
   */
  const scrollToBottom = (el: HTMLElement | undefined): void => {
    el?.scrollBy(0, el.scrollHeight);
  };

  /**
   * Прокрутить скролл в конец элемента с указанным классом.
   */
  const scrollElementToBottom = async () => {
    await nextTick();

    const [scrollEl] = document.getElementsByClassName(SCROLL_ELEMENT_CLASSNAME);
    scrollToBottom(scrollEl as HTMLElement);
  };

  return {
    scrollToBottom,
    scrollElementToBottom,
  };
};
