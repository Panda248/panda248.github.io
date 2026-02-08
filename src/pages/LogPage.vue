<script setup lang="ts">
import CanvasItem from '../components/CanvasItem.vue';
import markdownit from 'markdown-it';
// import fs from "fs";
import { ref, onMounted } from 'vue';

const md = markdownit();
let filename = "";
let lastSelected : EventTarget;
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
    content.value = md.render(data);
}

function selectElement(event: Event) {
    if(event.target == lastSelected) return;
    if(lastSelected != null) lastSelected.classList.remove("selected");
    
    lastSelected = event.target;
    lastSelected.classList.add("selected");
}
</script>

<template>
    <div id="log-hub">
        <CanvasItem />
        <header>
            <RouterLink class="montserrat-text" to="/">
                Go Back
            </RouterLink> 
        </header>
        <main >
            <div v-html="content"></div>
            <hr>
            <aside>
            <ul>
                <li class="montserrat-text" @click="loadLog('Log0'); selectElement($event);">
                    Test Log
                </li>
                <li class="montserrat-text" @click="loadLog('Log0'); selectElement($event);">
                    Test Log
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
</style>