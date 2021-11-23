<template>
    <div>
        <Header />
        <Main />
    </div>
</template>

<script setup lang="ts">
import Header from "../components/home/header.vue";
import Main from "../components/home/main.vue";
import { ref } from "vue";
const title = ref<string>("这是首页");
</script>

<style scoped>
</style>

