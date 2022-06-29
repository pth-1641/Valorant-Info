<script>
export default {
    data() {
        return {
            listAgents: [],
        };
    },
    created() {
        fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
            .then((res) => res.json())
            .then((data) => (this.listAgents = data.data));
    },
};
</script>

<template>
    <h1 class="font-bold text-3xl">Valorant Agents</h1>
    <div class="info my-6">
        Valorant Agents are playable characters, each equipped with unique and
        special abilities that allow them to compete against each other. There
        are 18 different Agents to select from, each specializing in a specific
        role: Duelist, Sentinel, Controller, and Initiator. Browse through the
        list of Valorant Agents below to find more information on their
        appearance, backgrounds, abilities, and agent contracts.
    </div>
    <ul class="grid grid-cols-3 gap-5">
        <li v-for="agent in listAgents">
            <img :src="agent.fullPortrait" alt="" />
            <h3 class="py-3 bg-red-500 text-center font-semibold mt-3">
                Agent {{ agent.displayName }}
            </h3>
        </li>
    </ul>
</template>
