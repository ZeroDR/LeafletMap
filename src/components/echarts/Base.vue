<template>
  <div class="echarts-panel">
    <div class="title"><span>病害总数</span></div>
    <div class="echarts-view" ref="echartsRef">
      <div class="sum-panel">
        <span>已处理</span>
        <el-progress :percentage="90" :show-text="false" status="success" />
      </div>
      <div class="sum-panel count">总数</div>
      <div class="sum-panel">
        <span>未处理</span>
        <el-progress :percentage="10" :show-text="false" status="warning" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {ref,onMounted,getCurrentInstance} from 'vue';

  const {proxy} = getCurrentInstance();

  onMounted(()=>{
  })
</script>

<style lang="scss" scoped>
.echarts-panel{
  width: 100%;
  height: 100%;
  .title{
    display: flex;
    align-items: center;
    color:#fff;
    width:100%;
    height: 38px;
    background: url('../../images/table/title_bg.png') no-repeat center center;
    background-size: 100% 38px;
    span{
      margin-left:40px;
    }
  }
  .echarts-view{
    width:100%;
    height:calc(100% - 40px);
    display: flex;
    justify-content: space-around;
    align-items: center;
    color:#fff;
    .sum-panel{
      width:33%;
    }
    .count{
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>

