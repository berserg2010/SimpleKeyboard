import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
import { store } from './store';
import '@/assets/scss/main.scss';

createApp(App).provide('store', store).use(ElementPlus).mount('#app');
