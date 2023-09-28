import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '../src/assets/dashboard/styles.scss';
import '@/assets/styles.scss';
import { primevueComponents } from './services/wrapper/primevueComponents'
import { chartComponents } from './services/wrapper/chartComponents'
import { HTTP } from './services/http';
import { createPinia } from 'pinia';

window.Http = HTTP;
const app = createApp(App);
app.use(router);
app.use(createPinia());
primevueComponents(app);
chartComponents(app);

app.mount('#app');
