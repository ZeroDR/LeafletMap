<template>
  <div class="mainHeader">
    <div class="title">桥路智慧诊养管理平台</div>
    <div class="right">
      <el-dropdown>
        <div class="avatar-wrapper">
          <img :src="'../images/avatar.jpeg'" class="user-avatar">
          <el-icon class="el-icon--right">
            <ArrowDown />
          </el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item divided @click="handleOutClick">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import {ref,onMounted,getCurrentInstance} from 'vue';
  import { useRouter } from 'vue-router'
  import {ArrowDown} from '@element-plus/icons-vue'

  const {proxy} = getCurrentInstance();
  const router = useRouter(); 

  const headertime = proxy.$utils.dateFormat('HH:mm:ss',new Date())
  const headerday = proxy.$utils.dateFormat('w',new Date())
  const headerdate = proxy.$utils.dateFormat('yyyy年MM月dd日',new Date())

  const handleSelect = ()=>{

  }

  const handleOutClick = ()=>{
    router.push({ name: 'login' });
  }

  const activePath = ref('/');

  onMounted(()=>{
    console.log(proxy)
  })
</script>

<style lang="scss" scoped>
.mainHeader{
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 86px;
  padding: 0 20px;
  font-size: 28px;
  box-sizing: border-box;
  background-color:#419df7;
  // background: url('/assets/images/header_bg2.png') no-repeat center center;
  background-size: 100% 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2000;
  .el-menu-demo{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    position: relative;
  }
  .title{}
  .right{
    display: flex;
    align-items: center;
    justify-content: end;
    height: 100%;
    width:200px;
    .avatar-wrapper {
      margin-top: 5px;
      position: relative;

      .user-avatar {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        background-image: url('../images/avatar.jpeg');
      }
    }
  }
}
</style>

