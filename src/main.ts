import './assets/main.css';
import { createApp } from 'vue';
import {createMemoryHistory, createRouter, createWebHashHistory, createWebHistory} from 'vue-router';

import App from './pages/App.vue';
import HomePage from './pages/HomePage.vue';
import LogPage from './pages/LogPage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/log', component: LogPage },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        console.log(from.fullPath);
        if (from.fullPath == to.fullPath) {
            return {
                top: 0
            }
        }
        else {
            return {
            el: "main",
            top: 10,
            behavior: 'smooth'
            }
        }
    }
});

const app = createApp(App);
app.use(router);
app.mount('#app');