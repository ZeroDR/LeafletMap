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
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
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
onMounted(()=>{
});

defineExpose({open})
</script>

<template>
  <div class="table-content" v-if="dialogVisible">
    <div class="close" @click="closeEventClick"><el-icon><Close /></el-icon></div>
    <div class="tabel-header"></div>
    <div class="list-panel">
      <el-table :data="tableData" height="100%" style="width: 100%" :row-style="{
        position: 'relative'
      }">
        <el-table-column label="Date">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Name">
          <template #default="scope">
            <el-popover effect="light" placement="bottom" trigger="click" :teleported="false" width="auto">
              <template #default>
                <div>name: {{ scope.row.name }}</div>
                <div>address: {{ scope.row.address }}</div>
              </template>
              <template #reference>
                <el-tag>{{ scope.row.name }}</el-tag>
              </template>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="Operations">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
              Edit
            </el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >
              Delete
            </el-button>
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
  </div>
</template>

<style scoped>
  .table-content{
    position: absolute;
    width:100vw;
    height:100vh;
    left:0;
    top:0px;
    overflow: hidden;
    background: #fff;
    z-index: 9999;
    .tabel-header{
      height:80px;
    }
    .close{
      position: absolute;
      right:10px;
      top:10px;
      width: 16px;
      height: 16px;
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
  }
</style>
