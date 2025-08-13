<script setup lang="ts">
import { ref,toRow,onMounted,defineEmits,defineExpose } from 'vue'
import {Close} from '@element-plus/icons-vue'

const emit = defineEmits(["closeEvent"])

const dialogVisible = ref(false)

const open = ()=>{
  dialogVisible.value = true;
}

const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

const closeEventClick = ()=>{
  dialogVisible.value = false;
}

const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(1)
const handleSizeChange=()=>{
} 
const handleCurrentChange=()=>{
}

const exportPdf = ()=>{
  window.open(`${window.location.origin}/file/down.pdf`,'_blank')
}
onMounted(()=>{
});

defineExpose({open})
</script>

<template>
  <div class="table-content" v-if="dialogVisible">
    <div class="close" @click="closeEventClick"><el-icon><Close /></el-icon></div>
    <div class="tabel-header">
      <div class="header-title">详情</div>
    </div>
    <div class="list-panel">
      <el-table :data="tableData" height="100%" style="width: 100%" :row-style="{
        position: 'relative'
      }">
        <el-table-column type="index" width="50" label="序号" />
        <el-table-column label="桩号">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="病害编号">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="病害类型">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="病害尺寸">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="病害图片">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="创建人">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="创建时间">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="病害等级">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </div>
          </template>
        </el-table-column>
        
        <el-table-column label="操作">
          <template #default="scope">
            <el-link type="primary" @click="handleDelete(scope.$index, scope.row)" :underline="false">编辑</el-link>
            <el-link type="primary" :underline="false">删除</el-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page-panel">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-sizes="[10, 20, 30, 40, 50]"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="total"
        hide-on-single-page>
      </el-pagination>
    </div>
    <div class="handle-panel">
      <el-button type="primary" @click="exportPdf">导出</el-button>
    </div>
  </div>
</template>

<style scoped>
  .el-link {
    margin-right: 8px;
  }
  .table-content{
    position: absolute;
    width:100vw;
    height:100vh;
    left:0;
    top:0px;
    overflow: hidden;
    background: #fff;
    z-index: 99999;
    .tabel-header{
      display: flex;
      align-items:center;
      height:80px;
      background: linear-gradient(0deg, #192B3D 0%, #13385C 100%);
      .header-title{
        color:#fff;
        font-size:20px;
        padding: 0 10px;
      }
    }
    .close{
      position: absolute;
      right:10px;
      top:10px;
      width: 24px;
      height: 24px;
      color:#fff;
    }
    .list-panel{
      padding:10px 20px;
      height: calc(100% - 160px);
      overflow-y: auto;
    }
    .page-panel{
      display: flex;
      justify-content: center;
      padding:10px 20px;
      height:40px;
    }
    .handle-panel{
      position:absolute;
      right: 100px;
      bottom:100px;
    }
  }
</style>
