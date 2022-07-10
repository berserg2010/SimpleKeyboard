import { nextTick } from 'vue';
import { TEXT_ELEMENT_CLASSNAME } from '../constants';

export default () => {
  /**
   * Создание элемента каретки.
   */
  const createCaret = () => {
    const caret = document.createElement('span');
    caret.setAttribute('class', 'caret');
    return caret;
  };

  /**
   * Вычисление и добавление каретки в текст.
   */
  const setCaret = async () => {
    await nextTick();
    const [textEl] = document.getElementsByClassName(TEXT_ELEMENT_CLASSNAME);
    textEl.appendChild(createCaret());
  };

  return {
    setCaret,
  };
};
