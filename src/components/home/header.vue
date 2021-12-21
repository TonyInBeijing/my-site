<template>
    <div class="header padding-lr-xl">
        <div class="text-bold text-l">YueYue Blog</div>
        <div class="flex-grow-1 button-group">
            <el-tag size="mini" color="#000000">
                <span class="text-white">
                    <el-icon>
                        <User />
                    </el-icon>
                    <span class="text-bold margin-left-xs">12345</span>
                </span>
            </el-tag>
        </div>
    </div>
</template>
<script setup lang="ts">
import { User } from "@element-plus/icons-vue";
import { onMounted, ref } from 'vue';

const visitorCount = ref<number>(0);

onMounted((): void => {
    console.log("mounted!");
    visitorCount.value++;
});
</script>
<style scoped>
.header {
    height: 6vh;
    line-height: 6vh;
    display: flex;
}
.flex-grow-1 {
    flex-grow: 1;
}

.button-group {
    text-align: end;
}

.button-group span {
}
</style>