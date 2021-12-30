<template>
    <div>
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Header from "../components/home/header.vue";
import Footer from "../components/home/footer.vue";
</script>

<style scoped>
</style>

