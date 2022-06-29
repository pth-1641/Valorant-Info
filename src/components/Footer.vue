<script>
import { LFacebookCircle } from 'vue-icon-packs/bx';

export default {};
</script>
<template>
    <div class="bg-black text-white pt-6 py-10">
        <div class="max-w-6xl mx-auto grid grid-cols-3 gap-8">
            <div>
                <router-link to="/">
                    <h2 class="text-2xl font-light">
                        VALORANT<strong class="text-red-500 font-semibold"
                            >INFO</strong
                        >
                    </h2>
                </router-link>
                <p class="text-sm my-5">
                    A Valorant fansite dedicated to providing news, in-depth
                    guides, and general information on popular topics from
                    Agents, Maps, Weapons, Skins, and more!
                </p>
                <em class="text-xs leading-3"
                    >ValorantInfo.vercel.app was created under Riot Games'
                    "Legal Jibber Jabber" policy using assets owned by Riot
                    Games. Riot Games does not endorse or sponsor this project.
                </em>
            </div>
            <ul class="grid grid-cols-3 h-max gap-x-3 gap-y-1">
                <li class="font-semibold">HOME</li>
                <li class="font-semibold">ABOUT</li>
                <li class="font-semibold">CONTACT</li>
                <li class="font-semibold">BLOG</li>
                <li class="font-semibold">AGENTS</li>
                <li class="font-semibold">WEAPONS</li>
                <li class="font-semibold">CARDS</li>
                <li class="font-semibold">GUN BUDDIES</li>
                <li class="font-semibold">MAP</li>
                <li class="font-semibold">SKIN</li>
                <li class="font-semibold">SPRAYS</li>
                <li class="font-semibold">PRO SETTINGS</li>
            </ul>
            <div>
                <h3 class="font-semibold text-lg">CONNECT WITH US</h3>
                <ul class="flex gap-2">
                    <LFacebookCircle />
                </ul>
            </div>
        </div>
    </div>
</template>
