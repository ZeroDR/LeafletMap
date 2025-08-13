<script setup lang="ts">
import { ref,toRow,onMounted,defineEmits } from 'vue'
import { useRouter } from 'vue-router'

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


const init = ()=>{}

const detailDialogRef = ref()

// progress
const proStatus = ref('none')
const hasShowProgress = ref(false)
const percentage = ref(0)
const duration = ref(50)
let proInterval = undefined;

const addEditDialogRef = ref();
const addFn = ()=>{
  addEditDialogRef.value.openDialog()
}
const handlEvent = ()=>{
  console.log(101001)
  hasShowProgress.value = true;
  proInterval = setInterval(()=>{
    percentage.value += 0.1;
    if(percentage.value >= 100){
      hasShowProgress.value = false;
      window.clearInterval(proInterval);
      proInterval = undefined;
      percentage.value = 0;
    }
  },10)
}

// 文件选择
const uploadPhysicalFile = ref()
const changeFile = (file,fileList)=>{
  let formData = new FormData();
  formData.append('file',file.raw);
}

const uploadOtherFile = ref()
const otherFiletChangeFile = (file,fileList)=>{
  handlEvent();
}

onMounted(()=>{
  console.log(detailDialogRef.value)
})

</script>

<template>
  <div class="data-view-content">
    <div class="view-content-title">
      <span>首页</span>
    </div>
    <div class="search-panel">
      <el-form :inline="true" :model="searchForm" class="demo-form-inline">
        <el-form-item label="路线名称">
          <el-input v-model="searchForm.xm" placeholder="请输入" clearable/>
        </el-form-item>
      </el-form>
      <div class="search-btn">
        <el-button type="primary" @click="searchFn">查询</el-button>
        <el-button type="primary" @click="addFn" v-if="false">新增</el-button>
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
      <div class="list-item">
        <div class="item-img" @click="listItemClickEvent"></div>
        <div class="item-attrs">
          <div class="attrs">
            <div class="label">名称</div>
            <div class="value">XX道路</div>
          </div>
          <div class="attrs">
            <div class="label">简介</div>
            <div class="value">位于...</div>
          </div>
          <div class="attrs">
            <div class="label">起点桩号</div>
            <div class="value">K0+000</div>
          </div>
          <div class="attrs">
            <div class="label">终点桩号</div>
            <div class="value">K1+100</div>
          </div>
        </div>
        <div class="item-btn">
          <el-button type="primary">编辑</el-button>
          <el-upload
            action=""
            ref="uploadOtherFile"
            class="btn-upload"
            :auto-upload="false"
            :show-file-list="false"
            :limit="1"
            :on-change="(file,fileList)=>otherFiletChangeFile(file,fileList)"
            >
            <el-button type="success">导入病害图片</el-button>
          </el-upload>
        </div>
      </div>
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
    <div class="progress-panel" v-if="hasShowProgress">
      <el-progress
        :percentage="percentage"
        :stroke-width="15"
        :status="proStatus"
        striped
        striped-flow
        :duration="duration"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.data-view-content{
  position: relative;
  width:100%;
  height:100%;
  background: #fff;
  border: 1px solid rgba(84,217,255,0.9);
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
    padding:5px 20px;
    height: calc(100% - 190px);
    overflow-y: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap:30px;
    .list-item{
      border: solid 1px #419df7;
      padding: 5px;
      border-radius: 5px;
      box-shadow: 0 0 2px #419df7;
      .item-img{
        width: 100%;
        height:calc(100% - 140px);
        background-image: url("../images/item-bg.jpeg");
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
      .item-attrs{
        .attrs{
          display: flex;
          justify-content: space-between;
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
  .page-panel{
    display: flex;
    justify-content: center;
    padding:10px 20px;
    height:40px;
  }
  .progress-panel{
    position: absolute;
    top: 50%;
    left: 10%;
    z-index: 99;
    width: 80%;
  }
}
</style>
