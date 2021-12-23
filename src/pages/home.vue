<template>
    <div>
        <Header title="111"></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Header from "../components/home/header.vue";
import Footer from "../components/home/footer.vue";
const title = ref<string>("这是首页");
</script>

<style scoped>
</style>

