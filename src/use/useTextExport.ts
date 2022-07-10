import { computed } from 'vue';
import { saveAs } from 'file-saver';
import { useStore } from 'vuex';

export default () => {
  const store = useStore();

  /**
   * Сохранить текст в файл.
   */
  const textExport = () => {
    const text = computed(() => store.getters.readText);

    // Для названия файла берется первая строка текста
    const filename = text.value.split('\n')[0];

    const blob = new Blob([text.value], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, `${filename}.txt`);
  };

  return {
    textExport,
  };
};
