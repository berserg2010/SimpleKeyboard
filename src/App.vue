<template>
  <div :class="FULLSCREEN_ELEMENT_CLASSNAME">
    <MainHeader />

    <main>
      <TextInput />

      <KeyboardComponent @change="getKeyboard" />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';

import TextInput from './components/TextInput.vue';
import KeyboardComponent from './components/KeyboardComponent.vue';
import useFullscreen from './use/useFullscreen';
import useIterator from './use/useIterator';
import MainHeader from './components/MainHeader.vue';
import { FULLSCREEN_ELEMENT_CLASSNAME } from './constants';

export default defineComponent({
  name: 'App',
  components: {
    MainHeader,
    TextInput,
    KeyboardComponent,
  },
  setup() {
    const { fullscreenEventHandler } = useFullscreen();
    const { timerId, running, keyboard, button, removeClassFromElements, rowsIterator, colsIterator, getKeyboard } =
      useIterator();

    onMounted(() => {
      document.addEventListener('fullscreenchange', fullscreenEventHandler);
      document.addEventListener('webkitfullscreenchange', fullscreenEventHandler);

      document.addEventListener('keyup', () => {
        if (running.value === 'row') {
          clearInterval(timerId.value!);
          removeClassFromElements(keyboard.value as any);
          timerId.value = colsIterator();
          running.value = 'col';
        } else if (running.value === 'col') {
          clearInterval(timerId.value!);
          removeClassFromElements(keyboard.value as any);
          button.value!.click();
          timerId.value = rowsIterator();
          running.value = 'row';
        } else {
          timerId.value = rowsIterator();
          running.value = 'row';
        }
      });
    });

    return {
      getKeyboard,

      FULLSCREEN_ELEMENT_CLASSNAME,
    };
  },
});
</script>
