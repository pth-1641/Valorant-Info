<script>
export default {
    data() {
        return {
            listMaps: [],
        };
    },
    created() {
        fetch('https://valorant-api.com/v1/maps')
            .then((res) => res.json())
            .then((data) => (this.listMaps = data.data));
    },
};
</script>

<template>
    <h1 class="font-bold text-3xl">Valorant Maps</h1>
    <div class="info my-6">
        Detailed overview for every map in Valorant with a helpful Legend
        consisting of: Buy zones, Starting barriers, Plant zones,
        Objects/Structures and Callout names.
    </div>
    <ul class="grid grid-cols-3 gap-5">
        <li v-for="map in listMaps">
            <img :src="map.splash" alt="" />
            <h3 class="py-3 bg-red-500 text-center font-semibold">
                {{ map.displayName }}
            </h3>
        </li>
    </ul>
</template>
