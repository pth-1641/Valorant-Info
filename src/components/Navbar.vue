<script></script>

<template>
    <nav class="fixed top-0 inset-x-0 bg-black py-3">
        <div class="max-w-6xl mx-auto text-white flex-between">
            <router-link to="/">
                <h2 class="text-2xl font-light">
                    VALORANT<strong class="text-red-500 font-semibold"
                        >INFO</strong
                    >
                </h2>
            </router-link>
            <ul class="flex-center gap-7 font-semibold">
                <router-link :to="{ name: 'Agents' }">
                    <li class="hover:text-red-500 cursor-pointer">
                        AGENTS
                    </li></router-link
                >
                <router-link :to="{ name: 'Maps' }">
                    <li class="hover:text-red-500 cursor-pointer">MAPS</li>
                </router-link>
                <router-link :to="{ name: 'Weapons' }">
                    <li class="hover:text-red-500 cursor-pointer">WEAPONS</li>
                </router-link>
            </ul>
        </div>
    </nav>
</template>
