import { createApp } from 'vue'
import pinia from '@renderer/store/index';
import App from './App.vue';
import router from './router';
import { directive } from '@renderer/directive';
import { i18n } from '@renderer/i18n/index';
import other from '@renderer/utils/other';

import "./init"

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '@renderer/theme/index.scss';
import VueGridLayout from 'vue-grid-layout';

const app = createApp(App);

directive(app);
other.elSvg(app);


app.use(pinia)
    .use(router)
    // @ts-ignore
    .use(ElementPlus, { i18n: i18n.global.t })
    .use(i18n)
    .use(VueGridLayout).mount('#app');

