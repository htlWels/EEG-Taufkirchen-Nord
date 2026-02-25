<template>
    <div id="app" class="min-h-screen bg-gray-50 flex flex-col">
        <header class="fixed top-0 left-0 w-full z-[100] bg-white shadow-xl">
    
            <div class="absolute inset-0 z-0 pointer-events-none">
                <img src="./assets/headerBG.jpeg" class="w-full h-full object-cover opacity-10" />
            </div>
    
            <div class="relative z-10">
                <div class="flex items-center justify-between px-8 pt-4 pb-2">
    
                    <div class="flex items-center space-x-4">
                        <img src="@/assets/logo.png" class="h-16 w-auto" />
                        <div class="border-l-2 border-eeg-green pl-4">
                            <h1 class="text-2xl font-black text-slate-800 leading-none">EEG Taufkirchen/Nord</h1>
                            <p class="text-sm font-bold text-eeg-green tracking-widest uppercase">Lokale Energiegemeinschaft</p>
    
                            <nav class="hidden md:block mt-3">
                                <ul class="flex space-x-6 font-bold text-xs uppercase text-slate-600">
                                    <li>
                                        <router-link to="/" active-class="text-eeg-green border-b-2 border-eeg-green" class="pb-1">Home</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/info" active-class="text-eeg-green border-b-2 border-eeg-green" class="pb-1"> EEG auf einen Blick</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/mitglied-werden" active-class="text-eeg-green border-b-2 border-eeg-green" class="pb-1">Mitglied werden</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/tarif" active-class="text-eeg-green border-b-2 border-eeg-green" class="pb-1">Tarif</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/kontakt" active-class="text-eeg-green border-b-2 border-eeg-green" class="pb-1">Kontakt</router-link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
    
                    <div class="flex items-center space-x-16">
                        <div class="hidden lg:block text-right">
                            <p class="text-[10px] uppercase font-bold text-slate-400 leading-none">Mitglieder</p>
                            <p class="text-xl font-black text-eeg-green">142</p>
                        </div>
    
                        <button @click="showMap = !showMap" class="hidden md:block bg-eeg-green text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-green-700 shadow-sm transition-all">
                            {{ showMap ? 'Einzugsgebiet schließen' : 'Einzugsgebiet' }}
                        </button>
                        <MapModal :isOpen="showMap" :imageSrc="trafoPath" title="Alle grün eingefärbten Objekte!!" @close="showMap = false" />
    
                        <button @click="toggleMenu" class="md:hidden p-2 text-slate-800 text-2xl">
                            {{ isMenuOpen ? '✕' : '☰' }}
                        </button>
    
                        <button @click="toggleLogin" :class="[
                'hidden md:block px-5 py-2 rounded-full text-xs font-bold shadow-sm transition-all border-2 border-eeg-green',
                isLoggedIn 
                    ? 'bg-white text-eeg-green hover:bg-slate-50' 
                    : 'bg-eeg-green text-white hover:bg-green-700'
            ]">
            
                            {{ isLoggedIn ? 'Angemeldet' : 'Anmelden' }}
                        </button>
    
                        <button @click="toggleMenu" class="md:hidden p-2 text-slate-800 text-2xl">
                            {{ isMenuOpen ? '✕' : '☰' }}
                        </button>
    
                    </div>
                </div>
    
                <nav v-show="isMenuOpen" class="md:hidden bg-white/95 backdrop-blur-md border-t p-6 shadow-inner">
                    <ul class="flex flex-col space-y-4 font-bold uppercase text-slate-700">
                        <li>
                            <router-link to="/info" @click="closeMenu">Info</router-link>
                        </li>
                        <li>
                            <router-link to="/tarif" @click="closeMenu">Tarif</router-link>
                        </li>
                        <li>
                            <router-link to="/kontakt" @click="closeMenu">Kontakt</router-link>
                        </li>
                        <hr />
                        <div class="flex justify-between items-center text-xs">
                            <span>Mitglieder: 142</span>
                            <button @click="showMap = !showMap; closeMenu()" class="text-eeg-green font-bold">jjjjj</button>
                        </div>
                    </ul>
                </nav>
            </div>
    
        </header>
    
        <main class="pt-32 flex-grow container mx-auto px-4">
            <!-- <p class="bg-red-500 text-white">AB HIER BEGINNT DIE ROUTER-VIEW</p> -->
            <router-view></router-view>
        </main>
        <!--  <transition name="fade">
            <div v-if="showMap" class="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12">
                <div @click="showMap = false" class="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>
    
                <div class="relative z-[210] max-w-5xl w-full h-auto bg-white p-2 rounded-2xl shadow-2xl transition-transform duration-300">
    
                    <button @click="showMap = false" class="absolute -top-4 -right-4 bg-eeg-green text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition-colors border-2 border-white text-xl font-bold">
                        ✕
                    </button>
    
                    <img src="@/assets/trafo5002.png" class="w-full h-auto rounded-xl object-contain" @click="showMap = false" />
    
                    <p class="text-center py-2 text-slate-500 font-bold text-sm uppercase tracking-wider">
                         Alle grün eingefärbten Objekte!!
                    </p>
                </div>
            </div>
        </transition> -->
    </div>
</template>

<script setup>
import {
    ref,
    watch
} from 'vue';
import {
    useRoute
} from 'vue-router';
import MapModal from './components/MapModal.vue';
import trafoPath from '@/assets/trafo5002.png';

// State (Reaktive Variablen)
let isMenuOpen = ref(false);
let showMap = ref(false);
// Neu: Login Status
let isLoggedIn = ref(false);

// Simulation eines Login-Vorgangs
// Die Funktion, die aufgerufen werden soll
const toggleLogin = () => {
    console.log("Login Status wird geändert...");
    isLoggedIn.value = !isLoggedIn.value;
    // Hier könnte später stehen: if(isLoggedIn.value) { router.push('/dashboard') }
};

// Hilfsfunktionen
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
    isMenuOpen.value = false;
};

// Route-Watcher (schließt das Menü bei Navigation)
const route = useRoute();
watch(() => route.path, () => {
    closeMenu();
});
</script>

<style>
/* Hier nur falls nötig globale Stile, am besten leer lassen */

.text-eeg-green {
    color: #16a34a;
}

/* Falls deine Tailwind-Config die Farbe nicht kennt */

.border-eeg-green {
    border-color: #16a34a;
}
</style>
