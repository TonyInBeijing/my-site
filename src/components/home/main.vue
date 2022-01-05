<template>
    <div class="main">
        <div class="slogan-container bg-main padding-xl text-white text-l">
            <pre>
function MyIntroduction() {
    this.name = "越浩玮";
    this.DOB = "1995-11-26";
    this.region = "山东烟台";
    this.githubUrl = "https://github.com/TonyInBeijing";
    this.gitbookUrl = "https://tonyxx.gitbook.io";
}

/**
 * 
 * @description 详细一点的自我介绍
 * 一个靠前端吃饭的人
 * 最近在折腾机器学习
 * 同时又在鼓捣一点树莓派相关的智能硬件
 *
 * @description 一些爱好 (致贫原因)
 * ps5 & switch 双机党，买游戏的快乐大于玩游戏的快乐
 * Audi A5 B8.5 SportBack 3.0TFSI quattro APR StageII 车主
 * 
 * @description 关于这个网站
 * 这不是一个纯技术博客，内容会比较丰富多彩一些
 * 前期内容会更多的放在 gitbook 上，争取一年内更新 100 篇各类文章
 * 会逐步完善网站功能，争取早日让它看起来像一个博客
 * 
 * 
 * Think twice, Code Once
 */
            </pre>
        </div>
        <!-- <div class="padding-xl">
            <el-row>
                <el-col :span="8">
                    <el-button size="large" color="#000000">GitHub</el-button>
                </el-col>
                <el-col :span="8">2</el-col>
                <el-col :span="8">3</el-col>
            </el-row>
        </div> -->
    </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.main {
    min-height: 94vh;
}
.slogan-container {
    height: 94vh;
}
</style>