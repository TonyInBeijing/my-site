<template>
    <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Header from "../components/home/header.vue";
import Main from "../components/home/main.vue";
import Footer from "../components/home/footer.vue";
const title = ref<string>("这是首页");
</script>

<style scoped>

</style>

