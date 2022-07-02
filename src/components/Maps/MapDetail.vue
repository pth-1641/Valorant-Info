<script>
export default {
    data() {
        return {
            uuid: this.$router.currentRoute.value.params.id,
            mapDetail: {},
        };
    },
    mounted() {
        fetch(`https://valorant-api.com/v1/maps/${this.uuid}`)
            .then((res) => res.json())
            .then((data) => (this.mapDetail = data.data));
    },
};
</script>

<template>
    <button @click="$router.back()" class="back-button">Back to Maps</button>
    <h3 class="text-3xl font-bold my-5">{{ mapDetail.displayName }}</h3>
    <img :src="mapDetail.splash" alt="" />
    <img :src="mapDetail.displayIcon" alt="" />
    <ul class="grid grid-cols-4 mt-5">
        <div>
            <h4 class="text-xl font-semibold">Site A:</h4>
            <li v-if="mapDetail.callouts" v-for="callout in mapDetail.callouts">
                <div v-if="callout.superRegionName === 'A'">
                    <p>+ {{ callout.regionName }}</p>
                </div>
            </li>
            <p v-else>No Information</p>
        </div>
        <div>
            <h4 class="text-xl font-semibold">Site B:</h4>
            <li v-if="mapDetail.callouts" v-for="callout in mapDetail.callouts">
                <div v-if="callout.superRegionName === 'B'">
                    <p>+ {{ callout.regionName }}</p>
                </div>
            </li>
            <p v-else>No Information</p>
        </div>
        <div>
            <h4 class="text-xl font-semibold">Attacker Side:</h4>
            <li v-if="mapDetail.callouts" v-for="callout in mapDetail.callouts">
                <div v-if="callout.superRegionName === 'Attacker Side'">
                    <p>+ {{ callout.regionName }}</p>
                </div>
            </li>
            <p v-else>No Information</p>
        </div>
        <div>
            <h4 class="text-xl font-semibold">Defender Side:</h4>
            <li v-if="mapDetail.callouts" v-for="callout in mapDetail.callouts">
                <div v-if="callout.superRegionName === 'Defender Side'">
                    <p>+ {{ callout.regionName }}</p>
                </div>
            </li>
            <p v-else>No Information</p>
        </div>
    </ul>
</template>
