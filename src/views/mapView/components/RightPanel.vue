<script setup lang="ts">
import { ref,toRow,onMounted,createApp } from 'vue'
import EchartLine from '@/components/echarts/Line.vue'
import EchartBar from '@/components/echarts/Bar.vue'
import BasePanel from '@/components/echarts/Base.vue'


onMounted(()=>{
});
</script>

<template>
  <div class="right-content">
    <div class="echart-panel echart1"><EchartLine></EchartLine></div>
    <div class="echart-panel echart2">
      <BasePanel></BasePanel>
    </div>
    <div class="echart-panel echart3"><EchartBar></EchartBar></div>
  </div>
</template>

<style lang="scss" scoped>
  .right-content{
    position: absolute;
    width:20vw;
    height:calc(100vh - 59px);
    right:0;
    top:59px;
    overflow: hidden;
    z-index: 9999;
    background: linear-gradient(-90deg, #03192C 0%, rgba(3,25,44,0.6) 100%);
    .echart-panel {
      height:33%;
      width: 100%;
    }
    .echart1{
      height: 40%;
    }
    .echart2{
      height:20%;
    }
    .echart3{
      height:40%;
    }
  }
</style>
