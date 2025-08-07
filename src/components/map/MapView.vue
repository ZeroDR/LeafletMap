<script setup lang="ts">
import { ref,onMounted,createApp } from 'vue'
import HandleMap from '@/utils/MapHandle.js'

const msg = ref('456')
const count = ref(0)
let map =undefined;
let handleMap = undefined;
const init = () => {
  !handleMap && (handleMap = new HandleMap({id:'map'}));
  console.log(handleMap)
  handleMap.loadMarker([{latitude:39.96,longitude:116.37,name:'123'}],1)
}

onMounted(()=>{
  init();
  console.log(L.markerClusterGroup)
});
</script>

<template>
  <div class="content-view">
    <div class="map-panel" id="map">
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .content-view{
    width:100vw;
    height:100vh;
    margin:0;
    padding:0;
    overflow: hidden;
    .map-panel{
      width:100vw;
      height:100vh;
      margin:0;
      padding:0;
      overflow: hidden;
      filter: invert(1) hue-rotate(180deg);
    }
  }
</style>
