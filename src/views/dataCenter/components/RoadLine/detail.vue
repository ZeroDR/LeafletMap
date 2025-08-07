<script setup lang="ts">
import { ref,toRow,onMounted,createApp } from 'vue'
const dialogVisible = ref(false);
const handleClose = ()=>{}
</script>
<template>
  <el-dialog
    :visible.sync="dialogVisible"
    title="详情"
    width="45%"
    :before-close="handleClose"
    destroy-on-close
  >
    <div class="detail-content">
      
    </div>
  </el-dialog>
</template>

<style lang="scss" scoped>
.data-view-content{
  position: relative;
  width:100%;
  height:100%;
  background: rgba(9,34,59,0.7);
  border: 1px solid rgba(84,217,255,0.2);
  .view-content-title{
    line-height:32px;
    padding:20px;
    font-family: PingFang SC;
    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF;
    border-bottom:1px #42BFFB solid;
    span{
      &:nth-child(2){
        color:#42BFFB;
      }
    }
  }
  .search-panel{
    height:60px;
    padding:10px 20px;
  }
  .list-panel{
    padding:10px 20px;
    height: calc(100% - 220px);
  }
  .page-panel{
    padding:0 20px;
    height:80px;
  }
}
</style>
