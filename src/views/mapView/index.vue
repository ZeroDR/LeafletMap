<script setup lang="ts">
import { ref,toRow,onMounted,createApp } from 'vue'
import { useRouter } from 'vue-router'
import {Back} from '@element-plus/icons-vue'

import MapView from '@/components/map/mapView.vue'
import LeftPanel from './components/LeftPanel.vue'
import RightPanel from './components/RightPanel.vue'

const router = useRouter();

const mapviewRef = ref()

const backRouteEvent = ()=>{
  router.go(-1)
}

const checkedClick = (layers)=>{
  mapviewRef.value.handleClick(layers)
}

onMounted(()=>{
});
</script>

<template>
  <div class="content">
    <MapView ref="mapviewRef"></MapView>
    <LeftPanel @checkedClick="checkedClick"></LeftPanel>
    <RightPanel></RightPanel>
    <div class="back-manage" @click="backRouteEvent">
      <el-icon><Back /></el-icon>
    </div>
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
    width: 64px;
    height: 64px;
    position: absolute;
    left:24vw;
    bottom:50px;
    z-index: 9999;
    cursor: pointer;
    font-size: 32px;
    color:#fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 32px;
    background: #333;
  }
</style>
