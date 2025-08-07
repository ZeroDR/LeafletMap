<script setup lang="ts">
import { ref,toRow,onMounted,createApp } from 'vue'
const defaultActive = ref('/dataCenter/AlarmRecord');
const menuIds = ref([1])
const menusConfig = ref([{
    id:1,
    index:'/dataCenter/AlarmRecord',
    hasSubMenu:false,
    title:'报警记录',
  },
])

const handleOpen = ()=>{}
const handleClose = ()=>{}

onMounted(()=>{
  console.log(menusConfig.value)
})
</script>
<template>
  <div class="page-content">
    <div class="left-menus">
      <div class="menus-title"><span>巡林管理</span></div>
      <el-menu
        :router="true"
        :default-active="defaultActive"
        class="el-menu-vertical-self"
        @open="handleOpen"
        @close="handleClose">
        <el-sub-menu>
          <template #title>
            <i class="el-icon-location" v-if="false"></i>
            <span>6666</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/">1-1</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="/dataCenter/AlarmRecord">
          <i class="el-icon-menu" v-if="false"></i>
          <span>123</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="data-content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-content{
  position: relative;
  width:100vw;
  height:calc(100vh - 86px);
  margin-top:89px;
  display: flex;
  padding:10px;
  background-color:#09292d0f;
  // background: url('../../images/table/table_bg.png') no-repeat center center;
  background-size: 100% 100%;
  .el-menu-vertical-self{
    width:280px;
    height:calc(100% - 80px);
    overflow-y: auto;
    overflow-x: hidden;
    color:#333;
    // background: linear-gradient(90deg, rgba(6,29,53,0.8) 0%, rgba(6,29,53,0.4) 100%);
    border: 1px solid rgba(84,217,255,0.1);
    .el-menu{
    }
  }
  .left-menus{
    width:280px;
    height: 100%;
    .menus-title{
      width:282px;
      line-height:48px;
      background: url('../../images/table/title_bg.png') no-repeat center center;
      background-size: 100% 38px;
      span{
        font-family: PingFang SC;
        font-weight: 500;
        font-size: 20px;
        color: #6ABEFF;
        padding-left:35px;
      }
    }
  }
  .data-content{
    width:calc(100% - 320px);
    height:calc(100% - 40px);
    padding:10px;
  }
}
</style>
