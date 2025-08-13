<template>
  <div class="echarts-panel">
    <div class="title"><span>病害数据排名前十</span></div>
    <div class="echarts-view" ref="echartsRef"></div>
  </div>
</template>

<script lang="ts" setup>
  import {ref,onMounted,getCurrentInstance} from 'vue';
  import * as echarts from 'echarts';

  const {proxy} = getCurrentInstance();

  const echartsRef = ref()

  const loadEcharts = ()=>{
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(echartsRef.value);
    // 绘制图表
    const options = {
      animationEasing:'linear',
      animationDuration:'1000',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid:{
        top:10,
        bottom:40,
        left:10,
        right:10,
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine:{
          show:false
        },
        axisLabel:{
          color:'#fff',
        }
      },
      yAxis: {
        type: 'category',
        data: ['活物', '坑五', '块状修补', '龟裂', '划痕', '标线缺陷','标线绿化遮挡','横向裂痕','线装修补','总线裂缝'],
        splitLine:{
          show:false
        },
        axisLabel:{
          color:'#fff',
        }
      },
      series: [
        {
          name: '2012',
          type: 'bar',
          data: [15, 21, 35, 47, 82, 84, 131, 222, 279,603]
        }
      ]
    }
    myChart.setOption(options);
  }

  onMounted(()=>{
    loadEcharts();
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
  }
}
</style>

