<template>
  <div class="echarts-panel">
    <div class="title"><span>道路病害密集区</span></div>
    <div class="echarts-view" ref="echartsRef">
      <table>
        <tr>
          <td style="background-color:#f00;" colspan="2"></td>
          <td style="background-color:#0f0;"></td>
          <td style="background-color:#f00;"></td>
          <td style="background-color:#f00;"></td>
          <td style="background-color:#f0f;" colspan="2"></td>
          <td style="background-color:#f00;" colspan="2"></td>
          <td style="background-color:#0f0;"></td>
          <td style="background-color:#f0f;"></td>
          <td style="background-color:#ff0;"></td>
          <td style="background-color:#f00;"></td>
          <td style="background-color:#f00;"></td>
        </tr>
        <tr>
          <td>14</td>
          <td>8</td>
          <td>4</td>
          <td>33</td>
          <td>4</td>
          <td>21</td>
          <td>18</td>
          <td>25</td>
          <td>24</td>
          <td>19</td>
          <td>7</td>
          <td>10</td>
          <td>16</td>
        </tr>
      </table>
      <div class="view-legend">
        <div class="legend-item" v-for="(item,index) in legendSource">
          <div class="label-panel">{{item.label}}</div>
          <div class="color-panel" :style="`background:${item.bc}`"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {ref,onMounted,getCurrentInstance} from 'vue';

  const {proxy} = getCurrentInstance();

  const echartsRef = ref()

  const legendSource = ref([{
    label:'00--07',
    bc:'#f00',
  },{
    label:'08--14',
    bc:'#0f0',
  },{
    label:'15--21',
    bc:'#00f',
  },{
    label:'22--28',
    bc:'#ff0',
  },{
    label:'29--35',
    bc:'#f0f',
  }])

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
    display: flex;
    width:100%;
    color:#fff;
    height:calc(100% - 40px);
    table{
      width:90%;
      tr{
        height:32px;
        td{
          text-align: center;
        }
      }
    }
    .view-legend{
      width: 10%;
      height: 100%;
      .legend-item{
        display: flex;
        .label-panel{
          width:60%;
        }
        .color-panel{
          width: 90%;
        }
      }
    }
  }
}
</style>

