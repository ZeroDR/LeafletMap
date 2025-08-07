<script setup lang="ts">
import { ref,toRow,onMounted,defineEmits,defineExpose } from 'vue'
const emit = defineEmits(["addEditHandle"])

const handleClose = ()=>{
  dialogVisible.value = false;
}

const formRef = ref()
const commit = (name)=>{
  formRef.value.validate((valid) => {
    if (valid) {
      handleClose();
      emit('addEditHandle')
    } else {
      return false;
    }
  });
}

const dialogVisible = ref(false);
const modelType = ref(0);
const openDialog = ()=>{
  console.log('sss')
  dialogVisible.value = true;
}

// 文件选择
const changeFile = (file,fileList)=>{
  let formData = new FormData();
  formData.append('file',file.raw);
}

const formSource = ref({})

defineExpose({openDialog})
</script>
<template>
  <el-dialog
    v-model="dialogVisible"
    :title="modelType ? '编辑' : '新增'"
    width="45%"
    :before-close="handleClose"
    destroy-on-close
  >
    <div class="detail-content">
      <el-form ref="formRef" :model="formSource" :rules="rules" label-width="80px">
        <el-row>
          <el-col :span="24">
            <el-form-item label-width="160px" label="设施名称" prop="ssmc">
              <el-input v-model="formSource.ssmc"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item prop="dz" label-width="160px" label="地址">
              <div class="file-panel">
                <div class="file-path">
                  <el-input v-model="formSource.dz"></el-input>
                </div>
                <div>
                  <el-upload
                    action=""
                    ref="uploadPhysicalFile"
                    class="btn-upload"
                    :auto-upload="false"
                    :show-file-list="false"
                    :limit="1"
                    :on-change="(file,fileList)=>changeFile(file,fileList)"
                    >
                    <el-button type="success">上传</el-button>
                  </el-upload>
                </div>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item prop="dz" label-width="160px" label="地址">
              <div class="file-panel">
                <div class="file-path">
                  <el-input v-model="formSource.dz"></el-input>
                </div>
                <div>
                  <el-upload
                    action=""
                    ref="uploadPhysicalFile"
                    class="btn-upload"
                    :auto-upload="false"
                    :show-file-list="false"
                    :limit="1"
                    :on-change="(file,fileList)=>changeFile(file,fileList)"
                    >
                    <el-button type="success">上传</el-button>
                  </el-upload>
                </div>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="button-content">
      <el-button @click="handleClose">取消</el-button>
      <el-button type="primary" @click="commit('form')">提交</el-button>
    </div>
  </el-dialog>
</template>

<style lang="scss" scoped>
.data-view-content{
  position: relative;
  width:100%;
  height:100%;
  // background: rgba(9,34,59,0.7);
  // border: 1px solid rgba(84,217,255,0.2);
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
  .file-panel{
    display: flex;
    display: flex;
    justify-content: space-between;
    width: 100%;
    .file-path{
      width:90%;
    }
  }
}
</style>
