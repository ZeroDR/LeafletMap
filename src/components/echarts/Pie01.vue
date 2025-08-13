<template>
  <div class="echarts-panel">
    <div class="title"><span>轮迹路段病害占比</span></div>
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
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
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

