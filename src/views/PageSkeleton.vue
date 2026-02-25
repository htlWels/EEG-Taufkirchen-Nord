<template>
  <div class="view-container">
    <div class="mb-8 animate-fade-in-down">
      <h2 class="text-3xl font-black text-slate-800 tracking-tight">
        {{ title }}
      </h2>

      <p class="text-eeg-green font-bold uppercase tracking-widest text-sm mt-1">
        {{ subtitle }}
      </p>
    </div>

    <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 min-h-[400px]">
      <slot>
        <p class="text-slate-500 italic">Inhalt wird geladen...</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String
  }
}
</script>

<style scoped>
.animate-fade-in-down {
  animation: fadeInDown 0.5s ease-out;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
