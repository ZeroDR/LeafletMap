<script setup lang="ts">
import { ref,toRow,onMounted,createApp } from 'vue'

import MapView from '@/components/map/mapView.vue'

onMounted(()=>{
});
</script>

<template>
  <div class="content">
    <MapView></MapView>
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
