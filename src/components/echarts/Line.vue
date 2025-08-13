<template>
  <div class="echarts-panel">
    <div class="title"><span>病害发展趋势</span></div>
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
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        top:'4%',
        left: '1%',
        right: '1%',
        bottom: '2%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1', '7', '14', '21', '28'],
        axisLabel:{
          color:'#fff',
        }
      },
      yAxis: {
        type: 'value',
        axisLabel:{
          color:'#fff',
        }
      },
      series: [
        {
          name: 'Email',
          type: 'line',
          stack: 'Total',
          data: [0,0,0,0,0]
        },
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

