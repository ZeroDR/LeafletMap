<script setup lang="ts">
import { ref,toRow,onMounted,defineEmits } from 'vue'
import { useRouter } from 'vue-router'
import Detail from './detail.vue'
import AddEdit from './addEdit.vue'

const router = useRouter();

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

const listItemClickEvent = ()=>{
  router.push({ name: 'MapView' });
}

// 文件选择
const changeFile = (file,fileList)=>{
  let formData = new FormData();
  formData.append('file',file.raw);
}

const init = ()=>{}

const addEditDialogRef = ref();
const addFn = ()=>{
  addEditDialogRef.value.openDialog()
}
const handlEvent = ()=>{
  console.log(101001)
}

const detailDialogRef = ref()
onMounted(()=>{
  console.log(detailDialogRef.value)
})

</script>

<template>
  <div class="data-view-content">
    <div class="view-content-title">
      <span>公路资产信息</span>  >  <span>基本设施</span>   >  <span>路线管理</span>
    </div>
    <div class="search-panel">
      <el-form :inline="true" :model="searchForm" class="demo-form-inline">
        <el-form-item label="名称：">
          <el-input v-model="searchForm.xm" placeholder="请输入" clearable/>
        </el-form-item>
      </el-form>
      <div class="search-btn">
        <el-button type="primary" @click="searchFn">查询</el-button>
        <el-button type="primary" @click="addFn">新增</el-button>
        <el-upload
          action=""
          v-if="false"
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
      <div class="list-item" @click="listItemClickEvent"></div>
    </div>
    <div class="page-panel">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-sizes="[10, 20, 30, 40, 50]"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
    <Detail ref="detailDialogRef" :source="{}"></Detail>
    <AddEdit ref="addEditDialogRef" @addEditHandle="handlEvent" :source="{}"></AddEdit>
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
      &:nth-child(3){
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
    padding:5px 20px;
    height: calc(100% - 190px);
    overflow-y: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap:30px;
    .list-item{
      background:#333;
    }
  }
  .page-panel{
    display: flex;
    justify-content: center;
    padding:10px 20px;
    height:40px;
  }
}
</style>
