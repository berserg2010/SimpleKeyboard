import { computed, ref } from 'vue';
import { saveAs } from 'file-saver';
import { useStore } from 'vuex';
import { UploadFile, UploadUserFile } from 'element-plus';
import useCaret from './useCaret';

export default () => {
  const store = useStore();
  const { setCaret } = useCaret();

  const uploadFiles = ref<UploadUserFile[]>([]);

  /**
   * Сохранить текст в файл.
   */
  const onExportText = () => {
    const text = computed(() => store.getters.readText);

    // Для названия файла берется первая строка текста
    const filename = text.value.split('\n')[0];

    const blob = new Blob([text.value], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, `${filename}.txt`);
  };

  /**
   * Загрузить текст из файла.
   *
   * @param file
   */
  const onUploadText = async (file: UploadFile) => {
    const text = (await file.raw?.text()) || '';
    await store.dispatch('uploadText', text);
    uploadFiles.value = [];
    await setCaret(0);
  };

  /**
   * Очистить текстовое поле.
   */
  const onRemoveText = async () => {
    await store.dispatch('uploadText', '');
    await setCaret(0);
  };

  return {
    onExportText,
    uploadFiles,
    onUploadText,
    onRemoveText,
  };
};
