<script setup lang="ts">
import { ref,toRow,onMounted,createApp } from 'vue'
import Header from '@/components/Header.vue'
import MapView from '@/components/map/MapView.vue'

onMounted(()=>{
});
</script>

<template>
  <div class="content">
    <Header></Header>
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
