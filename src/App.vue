<script>
import Navbar from './components/Navbar.vue';
import Events from './components/Events.vue';
import Footer from './components/Footer.vue';
export default {
    components: { Navbar, Events, Footer },
};
</script>

<template>
    <Navbar />
    <div class="pt-14 text-white bg-gradient-to-r from-[#111] to-red-600">
        <div class="max-w-6xl mx-auto grid grid-cols-10 py-6 gap-8">
            <div class="col-span-7">
                <router-view />
            </div>
            <div class="col-span-3"><Events /></div>
        </div>
    </div>
    <Footer />
</template>

<style>
body {
    font-family: 'Poppins', sans-serif;
}
</style>
