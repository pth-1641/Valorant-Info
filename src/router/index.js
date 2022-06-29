import { createWebHistory, createRouter } from 'vue-router';

import Agents from '../components/Agents.vue';
import Maps from '../components/Maps.vue';
import Weapons from '../components/Weapons.vue';

const routes = [
    { path: '/agents', component: Agents, name: 'Agents' },
    { path: '/maps', component: Maps, name: 'Maps' },
    { path: '/weapons', component: Weapons, name: 'Weapons' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
