<script>
export default {
    data() {
        return {
            listEvents: [],
        };
    },
    created() {
        fetch('https://valorant-api.com/v1/events')
            .then((res) => res.json())
            .then((data) => (this.listEvents = data.data));
    },
};
</script>

<template>
    <h4 class="text-lg font-semibold">Recent Events</h4>
    <ul>
        <li v-for="event in listEvents">
            <h4>{{ event.displayName }}</h4>
        </li>
    </ul>
</template>
