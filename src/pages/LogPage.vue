<script setup lang="ts">
import CanvasItem from '../components/CanvasItem.vue';
import markdownit from 'markdown-it';
// import fs from "fs";
import { ref, onMounted } from 'vue';

const md = markdownit();
let filename = "";
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
    
    // if (filename === logName) {
    //     return;
    // }
    filename = logName;
    content.value = md.render(`
    Currently loading ${filename}...
    `);

    const response = await fetch(`src/assets/logs/${filename}.md`);
    const data = await response.text()
    // jsonResponse.value = await response.json();
    content.value = md.render(data);
}
</script>

<template>
    <div id="log-hub">
        <CanvasItem />
        <header>
                poopoo  
        </header>
        <main >
            <div v-html="content"></div>
            <hr>
            <aside>
            <ul>
                <li class="montserrat-text" >
                    <button @click="loadLog('Log0')" >
                        Test Log
                    </button>
                </li>
                <li class="montserrat-text">
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
    flex-grow: calc();
    list-style: none;
    padding: 10;
}
</style>