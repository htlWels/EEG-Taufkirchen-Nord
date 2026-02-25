import { createApp } from 'vue';
import './assets/main.css';
import App from './App.vue';
import router from './router'

/* FontAwesome Core */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* Gewünschte Icons importieren */
import {
    faUserLock,
    faRightFromBracket,
    faMapLocationDot,
    faUsers,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';
/* Icons zur Bibliothek hinzufügen */
library.add(
    faUserLock,
    faRightFromBracket,
    faMapLocationDot,
    faUsers,
    faEnvelope
);

const app = createApp(App);

/* Komponente global registrieren */
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router) // 2. WICHTIG: Hier wird er registriert
// Warte, bis der Router bereit ist, bevor du die App anzeigst
router.isReady().then(() => {
    app.mount('#app')
})

