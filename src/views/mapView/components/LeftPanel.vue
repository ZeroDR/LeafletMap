<script setup lang="ts">
import { ref,toRow,onMounted,createApp } from 'vue'


onMounted(()=>{
});
</script>

<template>
  <div class="left-content">
  </div>
</template>

<style scoped>
  .left-content{
    position: absolute;
    width:20vw;
    height:calc(100vh - 90px);
    left:0;
    top:89px;
    overflow: hidden;
    background: linear-gradient(90deg, rgba(6,29,53,0.8) 0%, rgba(6,29,53,0.0) 100%);
  }
</style>
