<script>
export default {
    data() {
        return {
            uuid: this.$router.currentRoute.value.params.id,
            weaponDetail: {},
        };
    },
    mounted() {
        fetch(`https://valorant-api.com/v1/weapons/${this.uuid}`)
            .then((res) => res.json())
            .then((data) => (this.weaponDetail = data.data));
    },
};
</script>

<template>
    <button class="back-button" @click="$router.back()">Back to Weapons</button>
    <h3 class="text-3xl font-bold my-5">{{ weaponDetail.displayName }}</h3>
    <hr />
    <div class="grid grid-cols-10 mt-5">
        <img :src="weaponDetail.displayIcon" alt="" class="col-span-4" />
        <div>
            <h4 class="">Weapon Stats</h4>
        </div>
    </div>
</template>
