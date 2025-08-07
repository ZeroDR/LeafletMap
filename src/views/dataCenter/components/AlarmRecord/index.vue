<script setup lang="ts">
import { ref,toRow,onMounted,createApp } from 'vue'

const searchForm = ref({
  clzt:''
})

const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(1)
const tableData = ref()
const multipleSelection = ref([])
const multipleTableRef = ref()

const handleSizeChange = ()=>{
  initFn();
}
const handleCurrentChange=()=>{
  initFn()
}
const handleDetail = async(index,row,type)=>{
}
const downloadFn = ()=>{}
const searchFn = ()=>{
  initFn();
}

// 文件选择
const changeFile = (file,fileList)=>{
  let formData = new FormData();
  formData.append('file',file.raw);
}

const init = ()=>{}

</script>

<template>
  <div class="data-view-content">
    <div class="view-content-title">
      <span>巡林管理</span>  >  <span>报警记录</span>
    </div>
    <div class="search-panel">
      <el-form :inline="true" :model="searchForm" class="demo-form-inline">
        <el-form-item label="上报对象：">
          <el-input v-model="searchForm.xm" placeholder="请输入" clearable/>
        </el-form-item>
      </el-form>
      <div class="search-btn">
        <el-button type="primary" @click="searchFn">查询</el-button>
        <el-button type="warning" @click="downloadFn">导出</el-button>
        <el-upload
          action=""
          ref="uploadPhysicalFile"
          class="btn-upload"
          :auto-upload="false"
          :show-file-list="false"
          :limit="1"
          :on-change="(file,fileList)=>changeFile(file,fileList)"
          >
          <el-button type="success">导入</el-button>
        </el-upload>
      </div>
    </div>
    <div class="list-panel">
      
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
    <Detail ref="detailDialog" @fireHandle="handlFireEvent" :source="{}"></Detail>
  </div>
</template>

<style lang="scss" scoped>
.data-view-content{
  position: relative;
  width:100%;
  height:100%;
  background: #fff;
  border: 1px solid rgba(84,217,255,0.2);
  .view-content-title{
    line-height:32px;
    padding:20px;
    font-family: PingFang SC;
    font-weight: 400;
    font-size: 18px;
    color: #333;
    border-bottom:1px #42BFFB solid;
    span{
      &:nth-child(2){
        color:#42BFFB;
      }
    }
  }
  .search-panel{
    display: flex;
    justify-content: space-between;
    height:60px;
    padding:10px 20px;
  }
  .list-panel{
    padding:10px 20px;
    height: calc(100% - 190px);
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
