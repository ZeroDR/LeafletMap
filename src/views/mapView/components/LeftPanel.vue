<script setup lang="ts">
import { ref,toRow,onMounted,createApp,defineEmits,watch } from 'vue'
import TablePanel from './TablePanel.vue';
import EChartDialog from './EChartDialog.vue';
import IllTable from './IllTable.vue';

const emit = defineEmits(["checkedClick"])

const checkAll = ref(true)
const isIndeterminate = ref(false)
const checkedLegend = ref([1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])
const legends = [{
  label:'龟裂',
  value:1,
  path:'../../../../../images/map/01龟裂.png',
  count:10,
}, {
  label:'块状裂缝',
  value:2,
  path:'../../../../../images/map/02块状裂缝.png',
  count:10,
}, {
  label:'横向裂缝',
  value:3,
  path:'../../../../../images/map/03横向裂缝.png',
  count:10,
}, {
  label:'纵向裂缝',
  value:4,
  path:'../../../../../images/map/04纵向裂缝.png',
  count:10,
}, {
  label:'沉陷',
  value:5,
  path:'../../../../../images/map/05沉陷.png',
  count:10,
}, {
  label:'车辙',
  value:6,
  path:'../../../../../images/map/06车辙.png',
  count:10,
}, {
  label:'坑槽',
  value:7,
  path:'../../../../../images/map/07坑槽.png',
  count:10,
}, {
  label:'波浪拥包',
  value:8,
  path:'../../../../../images/map/08波浪拥包.png',
  count:10,
}, {
  label:'松散',
  value:9,
  path:'../../../../../images/map/09松散.png',
  count:10,
}, {
  label:'泛油',
  value:10,
  path:'../../../../../images/map/10泛油.png',
  count:10,
}, {
  label:'块状修补',
  value:11,
  path:'../../../../../images/map/11块状修补.png',
  count:10,
}, {
  label:'条状修补',
  value:12,
  path:'../../../../../images/map/12条状修补.png',
  count:10,
}, {
  label:'破碎板',
  value:13,
  path:'../../../../../images/map/13破碎板.png',
  count:10,
}, {
  label:'露骨',
  value:14,
  path:'../../../../../images/map/14露骨.png',
  count:10,
}, {
  label:'板角断裂',
  value:15,
  path:'../../../../../images/map/15板角断裂.png',
  count:10,
}, {
  label:'错台',
  value:16,
  path:'../../../../../images/map/16错台.png',
  count:10,
}, {
  label:'边角剥落',
  value:17,
  path:'../../../../../images/map/17边角剥落.png',
  count:10,
}, {
  label:'唧泥',
  value:18,
  path:'../../../../../images/map/18唧泥.png',
  count:10,
}, {
  label:'接缝料损坏',
  value:19,
  path:'../../../../../images/map/19接缝料损坏.png',
  count:10,
}, {
  label:'坑洞',
  value:20,
  path:'../../../../../images/map/20坑洞.png',
  count:10,
}]

const handleCheckAllChange = (val: CheckboxValueType) => {
  checkedLegend.value = val ? legends.map(l=>l.value) : []
  isIndeterminate.value = false
}
const handleCheckedLegendChange = (value: CheckboxValueType[]) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === legends.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < legends.length
}

watch(checkedLegend,()=>{
  layerChecked(checkedLegend.value);
})

const layerChecked = ()=>{
  emit('checkedClick',checkedLegend.value)
}

const tablePanelRef = ref()
const echartDialogRef = ref()
const illTableRef = ref()
const openDialog = (type)=>{
  switch(type){
    case 1:
    tablePanelRef.value.open()
    break;
    case 2:
    echartDialogRef.value.open()
    break; 
    case 3:
    illTableRef.value.open()
    break; 
  }

}

const closeEvent = ()=>{

}

onMounted(()=>{
});
</script>

<template>
  <div class="left-content">
    <div class="left-btn-panel">
      <div class="btn-item" @click="openDialog(1)">BIM参数</div>
      <div class="btn-item" @click="openDialog(2)">数据对比</div>
      <div class="btn-item" @click="openDialog(3)">病害报告</div>
    </div>
    <div class="left-msg">
      <div class="msg-title"><span>项目信息</span></div>
      <div class="msg-item">
        <div class="msg-label">建档时间</div>
        <div class="msg-value">2025-02-25</div>
      </div>
      <div class="msg-item">
        <div class="msg-label">路线名称</div>
        <div class="msg-value">XX路线</div>
      </div>
      <div class="msg-item">
        <div class="msg-label">公里数</div>
        <div class="msg-value">1300</div>
      </div>
      <div class="msg-item">
        <div class="msg-label">起止桩号</div>
        <div class="msg-value">K0+000-KO+015</div>
      </div>
    </div>
    <div class="left-legend">
      <div class="legend-title"><span>图例</span></div>
      <div class="legend-panel">
        <div class="legent-all">
          <el-checkbox label="全选" v-model="checkAll"
          :indeterminate="isIndeterminate"
          @change="handleCheckAllChange" />
        </div>
        <div class="legend-list">
          <div class="legend-item">
            <el-checkbox-group
              v-model="checkedLegend"
              @change="handleCheckedLegendChange"
            >
              <el-checkbox class="checked-item" style="width:35%;" v-for="l in legends" :key="l.value" :label="l.label" :value="l.value">
                <span>{{l.label}}</span>
                <img :src="l.path" />
                <span>{{l.count}}</span>
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
      </div>
    </div>
  </div>
  <TablePanel ref="tablePanelRef" @closeEvent="closeEvent"></TablePanel>
  <EChartDialog ref="echartDialogRef" @closeEvent="closeEvent"></EChartDialog>
  <IllTable ref="illTableRef" @closeEvent="closeEvent"></IllTable>
</template>

<style lang="scss" scoped>
  .left-content{
    position: absolute;
    width:20vw;
    height:calc(100vh - 58px);
    left:0;
    top:58px;
    overflow: hidden;
    z-index: 9999;
    background: linear-gradient(90deg, rgba(6,29,53,0.8) 0%, rgba(6,29,53,0.3) 100%);
    .left-btn-panel{
      height: 80px;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .btn-item{
        width: 32%;
        height: 45px;
        background: #0b282d;
        display: flex;
        color: #fff;
        align-items: center;
        justify-content: center;
        font-size: 16px;
      }
    }
    .left-msg{
      height:240px;
      width: 100%;
      .msg-title{
        display: flex;
        align-items: center;
        height: 38px;
        color:#fff;
        background: url('../../images/table/title_bg.png') no-repeat center center;
        background-size: 100% 38px;
        span{
          margin-left:40px;
        }
      }
      .msg-item{
        display:flex;
        padding: 0 10px;
        align-items: center;
        width: 100%;
        height: 45px;
        color:#fff;
        .msg-label{
          width:30%;
        }
        .msg-value{
          width:70%;
        }
      }
    }
    .left-legend{
      height: calc(100% - 320px);
      .legend-title{
        width: 100%;
        display: flex;
        align-items: center;
        height: 38px;
        color:#fff;
        background: url('../../images/table/title_bg.png') no-repeat center center;
        background-size: 100% 38px;
        span{
          margin-left:40px;
        }
      }
      .legend-panel{
        .legend-all{
          padding: 0 10px;
        }
        .legend-list{
          padding: 0 10px;
          .legend-item{
            .checked-item{
              line-height: 48px;
            }
            span{
              line-height: 64px;
            }
            img{
              width: 48px;
              height: 48px;
              margin-bottom: -16px;
            }
          }
        }
      }
    }
  }
  
</style>
