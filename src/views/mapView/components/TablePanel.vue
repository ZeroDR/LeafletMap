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

const tableData1 = [
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

const activeName = ref('first')
const handleClick = ()=>{}

const url =
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
const srcList = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
]

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
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="道路结构参数" name="first">
          <el-table :data="tableData" height="100%" style="width: 100%" :row-style="{
            position: 'relative'
          }">
            <el-table-column type="index" width="50" label="序号" />
            <el-table-column label="巡查编号">
              <template #default="scope">
                <div style="display: flex; align-items: center">
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="任务编号">
              <template #default="scope">
                <div style="display: flex; align-items: center">
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="巡查名称">
              <template #default="scope">
                <div style="display: flex; align-items: center">
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="巡查路线">
              <template #default="scope">
                <div style="display: flex; align-items: center">
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="巡查类型">
              <template #default="scope">
                <div style="display: flex; align-items: center">
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="巡查状态">
              <template #default="scope">
                <div style="display: flex; align-items: center">
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="截止日期">
              <template #default="scope">
                <div style="display: flex; align-items: center">
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="巡查人员">
              <template #default="scope">
                <div style="display: flex; align-items: center">
                  <el-image
                    style="width: 100px; height: 100px"
                    :src="url"
                    :zoom-rate="1.2"
                    :max-scale="7"
                    :min-scale="0.2"
                    :preview-src-list="srcList"
                    show-progress
                    :initial-index="4"
                    fit="cover"
                  />
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
            
            <el-table-column label="操作">
              <template #default="scope">
                <el-link type="primary" @click="handleDelete(scope.$index, scope.row)" :underline="false">编辑</el-link>
                <el-link type="primary" :underline="false">删除</el-link>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="桥梁结构参数" name="second">
          <el-table :data="tableData1" height="100%" style="width: 100%" :row-style="{
            position: 'relative'
          }">
            <el-table-column type="index" width="50" label="序号" />
            <el-table-column label="巡查编号">
              <template #default="scope">
                <div style="display: flex; align-items: center">
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="任务编号">
              <template #default="scope">
                <div style="display: flex; align-items: center">
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="巡查名称">
              <template #default="scope">
                <div style="display: flex; align-items: center">
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="巡查路线">
              <template #default="scope">
                <div style="display: flex; align-items: center">
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="巡查类型">
              <template #default="scope">
                <div style="display: flex; align-items: center">
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="巡查状态">
              <template #default="scope">
                <div style="display: flex; align-items: center">
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="截止日期">
              <template #default="scope">
                <div style="display: flex; align-items: center">
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="巡查人员">
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
            
            <el-table-column label="操作">
              <template #default="scope">
                <el-link type="primary" @click="handleDelete(scope.$index, scope.row)" :underline="false">编辑</el-link>
                <el-link type="primary" :underline="false">删除</el-link>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
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
