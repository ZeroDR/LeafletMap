<template>
  <div class="echarts-panel">
    <div class="title"><span>病害-路线坡度关联</span></div>
    <div class="echarts-view" ref="echartsRef">
      <el-table :data="tableData" height="100%" style="width: 100%" :row-style="{
        position: 'relative'
      }">
        <el-table-column type="index" width="50" label="序号" />
        <el-table-column label="桩号范围">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <span style="margin-left: 10px">{{ scope.row.rang }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="长度">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <span style="margin-left: 10px">{{ scope.row.length1 }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="坡度">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <span style="margin-left: 10px">{{ scope.row.slope }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="病害数">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <span style="margin-left: 10px">{{ scope.row.number1 }}</span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {ref,onMounted,getCurrentInstance} from 'vue';

  const {proxy} = getCurrentInstance();

  const echartsRef = ref()

  const loadEcharts = ()=>{
    
  }

  const tableData = ref([{
    rang:'K0+000-K0+015',
    length1:'15',
    slope:'0.34%',
    number1:'18'
  },{
    rang:'K0+015-K0+145',
    length1:'130',
    slope:'2.50%',
    number1:'25'
  },{
    rang:'K0+145-K0+275',
    length1:'130',
    slope:'4%',
    number1:'42'
  },{
    rang:'K0+275-K0+419',
    length1:'144',
    slope:'-4%',
    number1:'38'
  },{
    rang:'K0+419-K0+669.42',
    length1:'250.42',
    slope:'1.83%',
    number1:'55'
  },{
    rang:'K0+669.42-K1+535.7',
    length1:'866.28',
    slope:'0.20%',
    number1:'25'
  }])

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

