<template>
    <div class="prose max-w-none">
        <h2 class="text-3xl font-black text-slate-800 mb-8">
            Herzlich Willkommen bei der EEG Taufkirchen/Nord!
        </h2>
    
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
    
            <div class="space-y-6">
                     Energiegemeinschaften (GEA, EEG, BEG) haben in Österreich in den vergangenen Jahren zahlenmäßig ein rasantes Wachstum verzeichnet, Ende 2025 waren bereits mehr als 6500 Erneuerbare-Energie-Gemeinschaften und Bürgerenergiegemeinschaften in Betrieb
                <div class="flex justify-center items-center space-x-32 w-full mb-6 mt-8">
                    <img :src="sonneEnergie" class="h-28 md:h-30 w-auto object-contain transition-transform hover:scale-105" alt="PV Energie" />
                    <img :src="trafoIcon" class="h-28 md:h-28 w-auto object-contain transition-transform hover:scale-105" alt="E-Tankstelle" />
                    <img :src="sonneTankstelle" class="h-28 md:h-30 w-auto object-contain transition-transform hover:scale-105" alt="E-Tankstelle" />
                </div>
                <p class="leading-relaxed text-slate-700">
    
                    Unsere Energiegemeinschaft erzeugt mit Hilfe der Mitglieder lokal
                    <span class="text-eeg-green font-medium">Strom aus Sonnenenergie</span>. Dieser wird <span class="font-semibold text-slate-900">bedarfsorientiert und dynamisch</span> direkt in der Nachbarschaft verteilt.
                </p>
    
                <p class="leading-relaxed text-slate-700">
    
                    Das Einzugsgebiet erstreckt sich rund um den Trafo 5002, der neben der Berndoblersrtraße - Höhe ISG Bauten - steht. Das heißt Erzeuger bzw. Verbraucher, die mit diesem Trafo verbunden sind, können bei der EEG Taufkirchen/Nord Mitglied werden.
                </p>
    
    
            </div>
            <ImageCard title="Detailansicht: Alle Objekte mit grüner Färbung gehören zum Einzugsgebiet." :imageSrc="trafo" caption="Einzugsgebiet Trafo 5002" />
    
            <!-- <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 class="text-eeg-green font-bold uppercase tracking-wider text-sm mb-4">
                    Detailansicht: Alle Objekte mit grüner Färbung gehören zum Einzugsgebiet.
                </h3>
    
                <div @click="toggleSize" :class="[
                    'transition-all duration-500 ease-in-out z-[1000]',
                    isFull 
                      ? 'fixed inset-0 bg-black/90 backdrop-blur-md p-4 flex items-center justify-center cursor-zoom-out' 
                      : 'relative w-full border-4 border-slate-200 rounded-2xl overflow-hidden overflow-auto bg-slate-100 flex justify-center cursor-zoom-in group'
                  ]">
    
                    <img :src="trafo" :class="[
                      'transition-transform duration-500 shadow-2xl',
                      isFull 
                        ? 'max-h-full max-w-full object-contain' 
                        : 'w-full md:w-3/4 h-auto object-contain hover:scale-105'
                    ]" alt="Detaillierte Ansicht" />
    
                    <div v-if="!isFull" class="absolute bottom-4 right-4 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1 rounded-full text-[10px] font-bold text-slate-600">
                        Klicken zum Vergrößern
                    </div>
                </div>
    
                <p v-if="!isFull" class="mt-4 text-sm text-slate-500 text-center italic">
                    Einzugsgebiet Trafo 5002 (Klicken für Vollbild)
                </p>
            </div> -->
        </div>
    
    
    </div>
</template>

<script setup>
//import { ref } from 'vue';

import ImageCard from './ImageCard.vue';
import sonneEnergie from "../assets/sonnenEnergie.png";
import sonneTankstelle from "../assets/sonneTankstelle.png";
import trafo from "../assets/trafo5002.png";
import trafoIcon from "../assets/trafoIcon.png";

//let isFull = ref(false);

/* const toggleSize = () => {
    isFull.value = !isFull.value;

    // Optional: Scrollen der Seite verhindern, wenn Bild groß ist
    if (isFull.value) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    } 
};*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.enBild {
    width: 5%;
    height: auto;
}

h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

div::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

div::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

div::-webkit-scrollbar-thumb {
    background: #10b981;
    /* Dein eeg-green */
    border-radius: 10px;
    border: 2px solid #f1f1f1;
}

div::-webkit-scrollbar-thumb:hover {
    background: #059669;
}
</style>
