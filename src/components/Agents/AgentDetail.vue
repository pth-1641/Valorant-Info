<script>
export default {
    data() {
        return {
            uuid: this.$router.currentRoute.value.params.id,
            agentDetail: {},
        };
    },
    mounted() {
        fetch(`https://valorant-api.com/v1/agents/${this.uuid}`)
            .then((res) => res.json())
            .then((data) => (this.agentDetail = data.data));
    },
};
</script>

<template>
    <button class="back-button" @click="$router.back()">Back to Agents</button>
    <h2 class="text-3xl font-bold my-5">Agent {{ agentDetail.displayName }}</h2>
    <hr class="mb-6" />
    <div class="grid grid-cols-10 gap-4">
        <div class="col-span-4">
            <img :src="agentDetail.fullPortraitV2" alt="" />
            <audio
                :src="agentDetail.voiceLine?.mediaList[0].wave"
                controls
                class="my-2"
            />
            <p>{{ agentDetail.description }}</p>
        </div>
        <ul class="col-span-6">
            <h3 class="text-2xl font-bold mb-6">
                Agent {{ agentDetail.displayName }}'s Skills and Abilities
            </h3>
            <li
                v-for="ability in agentDetail.abilities"
                class="bg-red-500 p-3 mb-5 rounded"
            >
                <div class="flex gap-2">
                    <img :src="ability.displayIcon" alt="" class="w-20" />
                    <h5 class="font-bold text-2xl">
                        {{ ability.displayName }}
                    </h5>
                </div>
                <hr class="mt-1 mb-4" />
                <p>{{ ability.description }}</p>
            </li>
        </ul>
    </div>
</template>
