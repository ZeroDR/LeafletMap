<script setup lang="ts">
import { ref,toRow,onMounted,watch } from 'vue'
import { useRoute } from 'vue-router';
import Header from '@/components/Header.vue'
import HeaderMap from '@/components/HeaderMap.vue'

const route = useRoute();
watch(() => route.path, (newPath, oldPath) => {
  console.log('路由路径从' + oldPath + '变为' + newPath);
});

onMounted(()=>{
});
</script>

<template>
  <div class="content">
    <Header v-if="route.path.includes('dataCenter')"></Header>
    <HeaderMap v-else></HeaderMap>
    <router-view />
  </div>
</template>

<style scoped>
  .content{
    width:100vw;
    height:100vh;
    margin:0;
    padding:0;
    overflow: hidden;
  }
</style>
