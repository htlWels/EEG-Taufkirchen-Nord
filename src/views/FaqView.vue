<template>
  <PageSkeleton title="Informationen" subtitle="EEG Taufkirchen Nord">
    <div class="prose max-w-none">
      <p class="text-lg text-slate-700">
        Unsere Energiegemeinschaft ermöglicht es, lokal erzeugten Strom 
        direkt in der Nachbarschaft zu verbrauchen.
      </p>
      <ul class="mt-4 list-disc list-inside text-slate-600">
        <li>Region: Taufkirchen & Umgebung</li>
        <li>Fokus: Photovoltaik & Wind</li>
      </ul>
    </div>
  </PageSkeleton>
</template>

<script>
console.log("FAQ-VIEW DATEI WURDE GELADEN!");
import PageSkeleton from './PageSkeleton.vue'

export default {
  components: { PageSkeleton },
  mounted() {
    console.log("FAQ-VIEW KOMPONENTE IST MOUNTED!"); // Erscheint nur, wenn der Router sie einbaut
  }
}
</script>