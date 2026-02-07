import './assets/main.css';
import { createApp } from 'vue';
import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router';

import App from './pages/App.vue';
import HomePage from './pages/HomePage.vue';
import LogPage from './pages/LogPage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/log', component: LogPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');