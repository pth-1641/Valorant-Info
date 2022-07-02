import { createWebHistory, createRouter } from 'vue-router';

import Agents from '../components/Agents/index.vue';
import AgentDetail from '../components/Agents/AgentDetail.vue';
import Maps from '../components/Maps/index.vue';
import MapDetail from '../components/Maps/MapDetail.vue';
import Weapons from '../components/Weapons/index.vue';
import WeaponDetail from '../components/Weapons/WeaponDetail.vue';

const routes = [
    { path: '/agents', component: Agents, name: 'Agents' },
    { path: '/agents/:id', component: AgentDetail, name: 'AgentDetail' },
    { path: '/maps', component: Maps, name: 'Maps' },
    { path: '/maps/:id', component: MapDetail, name: 'MapDetail' },
    { path: '/weapons', component: Weapons, name: 'Weapons' },
    { path: '/weapons/:id', component: WeaponDetail, name: 'WeaponDetail' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
