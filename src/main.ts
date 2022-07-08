import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueCookies from 'vue-cookies'
import Notifications from '@kyvg/vue3-notification'
import App from './App.vue';
import createMultilang from 'vue3multilang';
import router from './router';

// locales
import ro from './locales/ro.json';
import en from './locales/en.json';

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(VueCookies, { expire: '7d'})
app.use(router);
app.use(createMultilang(), {
    locale: "en-UK",
    fallbackLocale: "ro-RO",
    messages: {
        "en-UK": en,
        "ro-RO": ro
    }
});
app.use(Notifications);
app.mount('#app')