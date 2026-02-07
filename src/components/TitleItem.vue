<script setup lang="ts">
import { ref } from 'vue';

const title = ref("Log Title");
</script>

<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>