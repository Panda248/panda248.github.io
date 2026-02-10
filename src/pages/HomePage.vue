<script setup lang="ts">
import CoverItem from '../components/CoverItem.vue';
import GalleryItem from '../components/GalleryItem.vue';
import LinksItem from '../components/LinksItem.vue';
import CanvasItem from '@/components/CanvasItem.vue';
import { HubDrawing } from '@/assets/HubDrawing';
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
    <!-- <HubCanvasItem /> -->
    <CanvasItem :drawing-instance="new HubDrawing()" />
</div>
</template>

<style scoped>
</style>
