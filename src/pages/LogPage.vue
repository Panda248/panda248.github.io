<script setup lang="ts">
import markdownit from 'markdown-it';
// import fs from "fs";
import { ref, onMounted } from 'vue';

const md = markdownit({
    breaks: true
});
let filename = "";
let lastSelected : HTMLElement;
const content = ref("");
onMounted(() => {
    content.value = md.render(`
    Please click on a log on the right to view its contents.
    `);
}) 

// async function loadLog(logName: string) {
//     if (filename === logName) {
//         return;
//     }
//     filename = logName;
//     content.value = md.render(`
//     Currently loading ${filename}...
//     `);

//     const response = await fetch(`http://localhost:8080/dcc-log?filename=${filename}`);
//     const data = await response.json()
//     // jsonResponse.value = await response.json();
//     content.value = md.render(data.content);
// }

async function loadLog(logName: string) {
    if (filename === logName) {
        return;
    }

    filename = logName;
    content.value = md.render(`
    Currently loading ${filename}...
    `);
    
    const response = await fetch(`/logs/${filename}.md`);
    const data = await response.text()
    content.value = md.render(data, );
}

function selectElement(event: Event) {
    if(event.target == lastSelected) return;
    if(lastSelected != null) (lastSelected).classList.remove("selected");
    
    lastSelected = event.target as HTMLElement;
    (lastSelected).classList.add("selected");
}
</script>

<template>
    <div id="log-hub">
        <!-- <CanvasItem /> -->
        <div id="background"></div>
        <header>
            <RouterLink class="montserrat-text unstyled" to="/">
                Go Back
            </RouterLink> 
        </header>
        <main >
            <div class="log-content" v-html="content"></div>
            <hr>
            <aside>
            <ul>
                <li class="montserrat-text" @click="loadLog('Log1'); selectElement($event);">
                    Log #1
                </li>
                <li class="montserrat-text" @click="loadLog('Log2'); selectElement($event);">
                    Log #2
                </li>
            </ul>
            </aside>
        </main>
    </div>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
div {
    display: flexbox;
    flex-grow: 1;
}
ul {
    display: flexbox;
    list-style: none;
    padding: 10;
    width: 8rem;

}
li {
    width: 100%;
    pointer-events:all;
    cursor:pointer;
}
li:hover {
    text-decoration: underline;
}

.selected {
    color:aliceblue;
    text-decoration: underline;
}

#background {
    top: 0;
    left: 0;
    z-index: -1;
    position:fixed;
    height: 100vh;
    width: 100vw;
    background-image: url("/public/glitchimg.jpg");
    opacity: 0.4;
}
:deep(.log-content a) {
    color:lightgreen;
    text-decoration: inherit;
}

:deep(.log-content a:hover) {
    color: aliceblue;
}

</style>