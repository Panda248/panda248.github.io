<script setup lang="ts">
  import HubCanvasItem from '@/components/HubCanvasItem.vue';
  import CoverItem from '../components/CoverItem.vue';
  import GalleryItem from '../components/GalleryItem.vue';
  import LinksItem from '../components/LinksItem.vue';
</script>

<template>
  <div>
    <header>
      
      <CoverItem />
    </header>
    <main>
      <LinksItem />
      <GalleryItem />
    </main> 
    <HubCanvasItem />
</div>
</template>

<style scoped>
</style>
