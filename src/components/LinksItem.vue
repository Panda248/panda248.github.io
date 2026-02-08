<template>
    <div class="links">
        <a class="prof-links" id="github" href="https://www.github.com/Panda248" target="_blank">
            <img class="icon" src="/github-mark/github-mark-white.svg" alt="GitHub"/>
        </a>
        <a class="prof-links" id="linkedin" href="https://www.linkedin.com/in/andrew-who/" target="_blank">
            <img class="icon" src="/in-logo/InBug-White.png" alt="LinkedIn"/>
        </a>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

function fadeAbout(element: HTMLElement) {
    const scrollPosition = window.scrollY;
    const initialThreshold = window.innerHeight - 100;
    const threshold = window.innerHeight - 50;
    const lerp = (scrollPosition - initialThreshold) / (threshold - initialThreshold); 
    const opacity = 1.0 - Math.max(lerp, 0);
    element.style.opacity = opacity.toString();
    if(opacity <= 0) {
        element.style.visibility = "hidden";
    }
    else {
        element.style.visibility = "visible";
    }
}


onMounted(() => {
    const about = document.querySelector('.links') as HTMLElement;
    fadeAbout(about);

    window.addEventListener('scroll', fadeAbout.bind(null, about));
});
</script>

<style scoped>
.links {
    position: fixed;
    top: 10px;
    right: 10px;
    padding: 10px;
}

.prof-links {
    display: inline-block;
    margin: 10px;
    opacity: 0.5;
}
.prof-links:hover {
    opacity: 1.0;
}
.disabled {
    cursor: default;
    pointer-events: none;
}

.icon {
    width: 50px;
} 
</style>