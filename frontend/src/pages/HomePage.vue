<script setup lang="ts">
  import CanvasItem from '../components/CanvasItem.vue';
  import CoverItem from '../components/CoverItem.vue';
  import GalleryItem from '../components/GalleryItem.vue';
  import LinksItem from '../components/LinksItem.vue';
</script>

<template>
  <div>
    <header>
      <LinksItem />
      <CoverItem />
    </header>
    <main>
      <GalleryItem />
    </main> 
    <CanvasItem />
</div>
</template>

<style scoped>
</style>
