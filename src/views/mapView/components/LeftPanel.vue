<script setup lang="ts">
import { ref,toRow,onMounted,createApp } from 'vue'
import TablePanel from './TablePanel.vue';

const checkAll = ref(true)
const isIndeterminate = ref(false)
const checkedLegend = ref([1, 2])
const legends = [{
  label:'Shanghai',
  value:1,
  path:'../../../../../images/map/fire.png'
}, {
  label:'Beijing',
  value:2,
  path:'../../../../../images/map/fire.png'
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

const tablePanelRef = ref()
const openDialog = (type)=>{
  tablePanelRef.value.open()
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
      <div class="msg-title">项目信息</div>
      <div class="msg-item">
        <div class="msg-label">建档时间</div>
        <div class="msg-value"></div>
      </div>
      <div class="msg-item">
        <div class="msg-label">路线名称</div>
        <div class="msg-value"></div>
      </div>
      <div class="msg-item">
        <div class="msg-label">公里数</div>
        <div class="msg-value"></div>
      </div>
      <div class="msg-item">
        <div class="msg-label">起止桩号</div>
        <div class="msg-value"></div>
      </div>
    </div>
    <div class="left-legend">
      <div class="legend-title">图例</div>
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
              <el-checkbox v-for="l in legends" :key="l.value" :label="l.label" :value="l.value">
                {{l.label}}
                <img :src="l.path" />
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
      </div>
    </div>
  </div>
  <TablePanel ref="tablePanelRef" @closeEvent="closeEvent"></TablePanel>
</template>

<style lang="scss" scoped>
  .left-content{
    position: absolute;
    width:20vw;
    height:calc(100vh - 90px);
    left:0;
    top:89px;
    overflow: hidden;
    background: linear-gradient(90deg, rgba(6,29,53,0.8) 0%, rgba(6,29,53,0.0) 100%);
    .left-btn-panel{
      height: 80px;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .btn-item{
        width: 32%;
        height: 45px;
        background: #333;
      }
    }
    .left-msg{
      height:240px;
      width: 100%;
      .msg-title{
        height: 40px;
        color:#fff;
      }
      .msg-item{
        display:flex;
        width: 100%;
        height: 45px;
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
        height: 32px;
      }
      .legend-panel{
        .legend-all{}
        .legend-list{
          .legend-item{
            img{
              width: 16px;
              height: 16px;
            }
          }
        }
      }
    }
  }
</style>
