
<template>
    <transition name="fade">
        <div v-if="isOpen" class="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12">
            <div @click="$emit('close')" class="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>
    
            <div class="relative z-[210] max-w-5xl w-full bg-white p-2 rounded-2xl shadow-2xl transition-transform duration-300">
    
                <button @click="$emit('close')" class="absolute -top-4 -right-4 bg-eeg-green text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition-colors border-2 border-white text-xl font-bold">
              ✕
            </button>
    
                <div class="flex flex-col items-center">
                    <img :src="imageSrc" class="w-full h-auto max-h-[80vh] rounded-xl object-contain cursor-pointer" @click="$emit('close')" />
    
                    <p v-if="title" class="text-center py-2 text-slate-500 font-bold text-sm uppercase tracking-wider">
                        {{ title }}
                    </p>
                </div>
            </div>
        </div>
    </transition>
</template>


<script setup>
import { defineProps,defineEmits } from 'vue'
// Props definieren
defineProps({
    isOpen: {
        type: Boolean,
        default: false
    },
    imageSrc: {
        type: String,
        required: true
    },
    title: {
        type: String,
        default: 'Einzugsgebiet' 
    } 
});

// Event an Elternkomponente senden zum Schließen
defineEmits(['close']);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>