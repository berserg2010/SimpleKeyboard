import { ref } from 'vue';
import useScroll from './useScroll';

const { scrollElement } = useScroll();

export default function useIterator(): any {
  const delay = 1500;

  const timerId = ref<number | null>(null);
  const running = ref<'row' | 'col' | undefined>();

  const keyboard = ref<NodeList | null>(null);
  const rows = ref<NodeList | null>(null);
  const lenArray = ref(0);

  const row = ref<number | null>(null);
  const button = ref<HTMLButtonElement | null>(null);

  const removeClassFromElements = (node: HTMLElement[]): void => {
    // console.info('[removeClassFromElements]')
    const elements: HTMLElement[] = (node as any).querySelectorAll('button');
    elements.forEach((element) => {
      element.classList.remove('button--selected');
    });
  };

  const rowsIterator = () => {
    let cursor = 0;
    // console.info('[rowsIterator]', rows.value)

    return window.setTimeout(function tick() {
      removeClassFromElements(rows.value![cursor === 0 ? lenArray.value - 1 : cursor - 1] as any);
      const buttons = (rows.value![cursor] as HTMLElement).querySelectorAll('button');
      row.value = cursor;
      buttons.forEach((button) => {
        button.classList.add('button--selected');
      });
      cursor = cursor < lenArray.value - 1 ? ++cursor : 0;

      timerId.value = window.setTimeout(tick, delay);
    }, 0);
  };

  const colsIterator = () => {
    let cursor = 0;
    // console.info('[colsIterator]', rows.value)
    const buttons = (rows.value![row.value!] as HTMLElement).querySelectorAll('button');
    const lenButtonsArray = buttons.length - 1;

    return window.setTimeout(function tick() {
      buttons[cursor === 0 ? lenButtonsArray : cursor - 1].classList.remove('button--selected');
      buttons[cursor].classList.add('button--selected');
      button.value = buttons[cursor];

      cursor = cursor < lenButtonsArray ? ++cursor : 0;
      timerId.value = window.setTimeout(tick, delay);
    }, 0);
  };

  const getKeyboard = async (keyboardRef: NodeList) => {
    // console.info('[getKeyboard]');
    keyboard.value = keyboardRef;
    rows.value = (keyboardRef as any).querySelectorAll('.row');
    lenArray.value = rows.value?.length || 0;

    await scrollElement();

    if (timerId.value) {
      clearInterval(timerId.value);
      removeClassFromElements(keyboard.value as any);
      timerId.value = rowsIterator();
      running.value = 'row';
    }
  };

  return {
    timerId,
    running,
    keyboard,
    button,
    removeClassFromElements,
    rowsIterator,
    colsIterator,
    getKeyboard,
  };
}
