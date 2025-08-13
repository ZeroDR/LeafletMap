<template>
  <div class="echarts-panel">
    <div class="title"><span>推荐病害处理优先级</span></div>
    <div class="echarts-view" ref="echartsRef">
      <table>
        <tr>
          <td></td>
          <td>桩号</td>
          <td>类型</td>
          <td>具体病害位置</td>
          <td>图片</td>
        </tr>
        <tr v-for="(item,index) in data1">
          <td v-if="index==0" :rowspan="data1.length">优先处理</td>
          <td>{{item.a}}</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr v-for="(item,index) in data2">
          <td v-if="index==0" :rowspan="data2.length">重点关注</td>
          <td>{{item.a}}</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {ref,onMounted,getCurrentInstance} from 'vue';

  const {proxy} = getCurrentInstance();

  const echartsRef = ref()

  const data1 = ref([{a:1},{a:2}])
  const data2 = ref([{a:1},{a:2},{a:3},{a:3},{a:3},{a:3},{a:3}])

  const loadEcharts = ()=>{
    
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
    overflow:auto;
    table{
      width: 100%;
      color:#fff;
      tr{
        height:24px;
      }
    }
  }
}
</style>

