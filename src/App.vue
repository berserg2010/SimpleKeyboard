<template>
  <el-header>Привет, Даня!</el-header>
  <el-main>
    <TextInput />
    <Keyboard />
  </el-main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TextInput from './components/TextInput.vue';
import Keyboard from './components/Keyboard.vue';


export default defineComponent({
  name: 'App',
  components: {
    TextInput,
    Keyboard,
  },
  mounted() {
    let row: number;
    let col: number;
    let button: HTMLButtonElement;
    let timerId: number;
    let running = '';

    const keyboard = document.querySelector('.keyboard');

    const delay = 1000;
    const rows = (keyboard as HTMLElement).querySelectorAll('.row');

    const rowsIterator = () => {
      let cursor = 0;
      let lenArray = rows.length - 1;

      return setTimeout(function tick() {
        removeClassFromElements(rows[cursor === 0 ? lenArray : cursor - 1 ] as HTMLElement);

        const buttons = (rows[cursor] as HTMLElement).querySelectorAll('button');
        row = cursor;
        buttons.forEach((button) => {
          button.classList.add('button--selected');
        })
        cursor = cursor < lenArray ? ++cursor : 0;

        timerId = setTimeout(tick, delay);
      }, 0);
    };

    const colsIterator = () => {
      let cursor = 0;
      const buttons = (rows[row] as HTMLElement).querySelectorAll('button');
      let lenArray = buttons.length - 1;

      return setTimeout(function tick() {
        buttons[cursor === 0 ? lenArray : cursor - 1 ].classList.remove('button--selected');
        buttons[cursor].classList.add('button--selected');
        col = cursor;
        button = buttons[cursor];

        cursor = cursor < lenArray ? ++cursor : 0;

        timerId = setTimeout(tick, delay);
      }, 0);
    };

    const removeClassFromElements = (node: HTMLElement): void => {
      const elements = (node as HTMLElement).querySelectorAll('button');
      elements.forEach((element) => {
        element.classList.remove('button--selected');
      });
    };

    document.addEventListener('click', () => {
      if (!running) {
        timerId = rowsIterator();
        running = 'row';
      } else if (running === 'row') {
        clearInterval(timerId);
        removeClassFromElements(keyboard as HTMLElement);
        timerId = colsIterator();
        running = 'col';
      } else {
        clearInterval(timerId);
        removeClassFromElements(keyboard as HTMLElement);
        button.click();
        timerId = rowsIterator();
        running = 'row';
      }
    });
  },
});
</script>
