<template>
  <div class="popup-panel">
    <div class="popup-title">详情</div>
    <div class="list-item">
      <div class="item-img">
        <img src="../../../images/item-bg.jpeg" />
      </div>
      <div class="item-attrs">
        <div class="attrs">
          <div class="label">病害类型</div>
          <div class="value">标牌绿化带遮挡</div>
        </div>
        <div class="attrs">
          <div class="label">病害编号</div>
          <div class="value">BPLHZD2024101011229</div>
        </div>
        <div class="attrs">
          <div class="label">采集时间</div>
          <div class="value">2024-10-10-17:51:03</div>
        </div>
        <div class="attrs">
          <div class="label">桩号</div>
          <div class="value">1</div>
        </div>
        <div class="attrs">
          <div class="label">病害状态</div>
          <div class="value">待转工单</div>
        </div>
      </div>
      <div class="item-btn">
        <el-button type="primary">终点关注</el-button>
        <el-button type="primary">忽略病害</el-button>
        <el-button type="primary">转工单</el-button>
        <el-button type="primary">病害追溯</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref,onMounted, nextTick, onBeforeUnmount,defineExpose } from 'vue'
  import { ElButton } from 'element-plus'
  const props = defineProps(['dataSource'])
  const emits = defineEmits(['popupCallback'])
  
  const rowClick = ()=>{
    emits('popupCallback',{type:1})
  }

  onMounted(()=>{
    console.log(props)
  })
</script>

<style lang="scss" scoped>
  .popup-panel{
    width:600px;
    height:650px;
    font-size:16px;
    .popup-title{
      height:24px;
      color:#333;
      width:100%;
    }
    .list-item{
      height: 100%;
      .item-img{
        width: 100%;
        height:calc(100% - 200px);
        img{
          width: 100%;
          height: 100%;
        }
      }
      .item-attrs{
        .attrs{
          display: flex;
          justify-content: space-around;
          width: 100%;
          height: 24px;
          margin:2px 0;
          color:#333;
          .label{
            width:30%;
          }
          .value{
            width:70%;
          }
        }
      }
      .item-btn{
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>