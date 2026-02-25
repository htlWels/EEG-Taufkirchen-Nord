

<template>
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h3 class="text-eeg-green font-bold uppercase tracking-wider text-sm mb-4">
            {{ title }}
        </h3>
    
        <div @click="toggleSize" :class="[
            'transition-all duration-500 ease-in-out z-[1000]',
            isFull 
              ? 'fixed inset-0 bg-black/90 backdrop-blur-md p-4 flex items-center justify-center cursor-zoom-out' 
              : 'relative w-full border-4 border-slate-200 rounded-2xl overflow-hidden bg-slate-100 flex justify-center cursor-zoom-in group'
          ]">
            <img :src="imageSrc" :class="[
              'transition-transform duration-500 shadow-2xl',
              isFull 
                ? 'max-h-full max-w-full object-contain' 
                : 'w-full md:w-3/4 h-auto object-contain hover:scale-105'
            ]" :alt="title" />
    
            <div v-if="!isFull" class="absolute bottom-4 right-4 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1 rounded-full text-[10px] font-bold text-slate-600 shadow-sm">
                Klicken zum Vergrößern
            </div>
        </div>
    
        <p v-if="!isFull" class="mt-4 text-sm text-slate-500 text-center italic">
            {{ caption }}
        </p>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

// Definition der Propsimport { ref } from 'vue';

// Destructuring direkt in der Zeile - sauber und direkt
defineProps({
  title: {
    type: String,
    default: 'Detailansicht'
  },
  imageSrc: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    default: 'Klicken für Vollbild'
  }
});

const isFull = ref(false);

const toggleSize = () => {
    isFull.value = !isFull.value;
    // Scroll-Lock für den Body
    if (isFull.value) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
};
</script>