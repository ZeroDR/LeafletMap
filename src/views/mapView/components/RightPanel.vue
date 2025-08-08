<script setup lang="ts">
import { ref,toRow,onMounted,createApp } from 'vue'


onMounted(()=>{
});
</script>

<template>
  <div class="right-content">
    <div class="echart1"></div>
    <div class="echart2"></div>
    <div class="echart3"></div>
  </div>
</template>

<style scoped>
  .right-content{
    position: absolute;
    width:20vw;
    height:calc(100vh - 90px);
    right:0;
    top:89px;
    overflow: hidden;
    background: linear-gradient(-90deg, #03192C 0%, rgba(3,25,44,0) 100%);
  }
</style>
