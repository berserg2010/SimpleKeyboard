import { computed, nextTick } from 'vue';
import { TEXT_ELEMENT_CLASSNAME } from '../constants';
import { useStore } from 'vuex';

export default () => {
  const store = useStore();

  const text = computed(() => store.getters.readText);

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

    const textElements = document.getElementsByClassName(TEXT_ELEMENT_CLASSNAME);
    // Удаляем каретку из текста
    Array.from(textElements).forEach((item) => {
      const [caret] = item.getElementsByClassName('caret');
      caret?.remove();
    });

    if (typeof position === 'undefined' || position >= text.value.length) {
      textElements[textElements.length - 1].appendChild(createCaret());
      return;
    }

    // Получаем массив строк от начала до текущей позиции
    const lines = text.value.slice(0, position).split('\n');
    // Получаем позицию в строке
    const positionInLine = lines[lines.length - 1].length;
    // Получаем элемент с текущей позицией
    const textEl = textElements[lines.length - 1];
    // Сохраняем значение элемента
    const value = textEl.textContent || '';
    textEl.textContent = '';

    if (position === 0) {
      textEl.appendChild(createCaret());
      textEl.append(value);
      return;
    }

    textEl.append(value.slice(0, positionInLine));
    textEl.appendChild(createCaret());
    textEl.append(value.slice(positionInLine));
  };

  return {
    setCaret,
  };
};
