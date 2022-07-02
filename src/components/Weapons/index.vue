<script>
export default {
    data() {
        return {
            listWeapons: [],
        };
    },
    created() {
        fetch('https://valorant-api.com/v1/weapons')
            .then((res) => res.json())
            .then((data) => (this.listWeapons = data.data));
    },
};
</script>

<template>
    <h1 class="font-bold text-3xl">Valorant Weapons</h1>
    <div class="info my-6">
        Find the stats of every gun in Valorant, how much they cost, wall
        penetration ability, fire rate, magazine size, damage from different
        ranges and even the available skins for each weapon.
    </div>
    <ul class="grid grid-cols-3 gap-5">
        <li v-for="weapon in listWeapons">
            <router-link :to="`/weapons/${weapon.uuid}`">
                <div class="flex flex-col h-full">
                    <img
                        :src="weapon.displayIcon"
                        alt=""
                        class="flex-1 object-contain"
                    />
                    <h3 class="py-3 bg-red-500 text-center font-semibold mt-3">
                        {{ weapon.displayName }}
                    </h3>
                </div>
            </router-link>
        </li>
    </ul>
</template>
