<script setup lang="ts">
import { ref,toRow,onMounted,createApp } from 'vue'
import { useRouter } from 'vue-router'

import MapView from '@/components/map/mapView.vue'
import LeftPanel from './components/LeftPanel.vue'
import RightPanel from './components/RightPanel.vue'

const router = useRouter();

const backRouteEvent = ()=>{
  router.go(-1)
}

onMounted(()=>{
});
</script>

<template>
  <div class="content">
    <MapView></MapView>
    <LeftPanel></LeftPanel>
    <RightPanel></RightPanel>
    <div class="back-manage" @click="backRouteEvent"></div>
  </div>
</template>

<style scoped>
  .content{
    position: relative;
    width:100vw;
    height:100vh;
    margin:0;
    padding:0;
    overflow: hidden;
  }
  .back-manage{
    width: 32px;
    height: 32px;
    position: absolute;
    left:24vw;
    bottom:50px;
    background: #333;
  }
</style>
