<!--
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-07-18 16:58:19
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-28 04:00:38
 * @FilePath     : \web-B-tmp\src\App.vue
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
-->
<template>
    <router-view />
</template>

<script setup lang="ts">
import autofit from 'autofit.js'
import { onMounted, ref } from 'vue'

onMounted(() => {
    autofit.init({
        dh: 1080,
        dw: 1920,
        el: 'body',
        resize: true
    })
})
</script>
