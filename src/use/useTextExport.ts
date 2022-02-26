import { computed } from 'vue';
import { saveAs } from 'file-saver';
import { useStore } from 'vuex';

export default function () {
  const store = useStore();

  const textExport = () => {
    const text = computed(() => store.state.keyboardStore.input);
    const filename = text.value.split('\n')[0];

    const blob = new Blob([text.value], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, `${filename}.txt`);
  };

  return {
    textExport,
  };
}
