<template>
    <div class="Links">
        <a class="prof-links" id="github" href="https://www.github.com/Panda248" target="_blank">
            <img class="icon" src="/github-mark/github-mark-white.svg" alt="GitHub"/>
        </a>
        <a class="prof-links" id="linkedin" href="https://www.linkedin.com/in/andrew-who/" target="_blank">
            <img class="icon" src="/in-logo/InBug-White.png" alt="LinkedIn"/>
        </a>
    </div>
</template>

<style scoped>
.Links {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 0;
    padding: 10px;
}

.prof-links {
    display: inline-block;
    margin: 10px;
    opacity: 0.7;
}
.prof-links:hover {
    opacity: 1.0;
}
.icon {
    width: 50px;
} 
</style>