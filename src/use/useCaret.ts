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
  const setCaret = async (position?: number) => {
    await nextTick();
    const [textEl] = document.getElementsByClassName(TEXT_ELEMENT_CLASSNAME);

    if (typeof position === 'undefined') {
      textEl.appendChild(createCaret());
      return;
    }

    const value = textEl.textContent || '';
    textEl.textContent = '';

    if (position === 0) {
      textEl.appendChild(createCaret());
      textEl.append(value);
      return;
    }

    textEl.append(value.slice(0, position));
    textEl.appendChild(createCaret());
    textEl.append(value.slice(position));
  };

  return {
    setCaret,
  };
};
