import { createRouter, createWebHashHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue'



const routes = [
    {
        path: '/', 
        name: 'Home',
        component: HelloWorld,
        props: { msg: "Willkommen bei der EEG Taufkirchen" } // Hier übergibst du die "msg"
    },
    { path: '/info', name: 'Info', component: () => import('../views/InfoView.vue') },
    { path: '/tarif', name: 'Tarif', component: () => import('../views/TarifeView.vue') },
    { path: '/mitglied-werden', name: 'Join', component: () => import('../views/JoinView.vue') },
    { path: '/faq', name: 'FAQ', component: () => import('../views/FaqView.vue') },
    { path: '/verein', name: 'Verein', component: () => import('../views/VereinView.vue') },
    { path: '/kontakt', name: 'Kontakt', component: () => import('../views/KontaktView.vue') },
];

const router = createRouter({
    history: createWebHashHistory(), // Verwende Hash-basiertes Routing
    routes,
    // Sorgt dafür, dass man beim Seitenwechsel immer oben landet
    scrollBehavior() {
        return { top: 0 };
    }
});

export default router;