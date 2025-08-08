<script setup lang="ts">
import { ref,toRow,onMounted,defineEmits,defineExpose } from 'vue'
import {Close} from '@element-plus/icons-vue'

const emit = defineEmits(["closeEvent"])

const dialogVisible = ref(false)

const open = ()=>{
  dialogVisible.value = true;
}

const cpuInfo = ref({})
const jvmInfo = ref({})
const memInfo = ref({})
const sysInfo = ref({})

const getUnitValue = (type,value='')=>{
  let vl = type ? (''+value).match(/[A-Za-z]/g) : (''+value).match(/\d+(.\d+)?/g)
  return type ? ((vl && vl.length) ? vl.join('') : '') : ((vl && vl.length) ? vl[0] : 0)
}

const closeEventClick = ()=>{
  dialogVisible.value = false;
}

onMounted(()=>{
});

defineExpose({open})
</script>

<template>
  <div class="table-content" v-if="dialogVisible">
    <div class="close" @click="closeEventClick"><el-icon><Close /></el-icon></div>
    <div class="tabel-header"></div>
    <div class="data-view-header">
      <div class="header-items">
        <div class="item-icon icon1"></div>
        <div class="item-attr">
          <div class="item-value">{{cpuInfo.cpuNum || 0}}</div>
          <div class="item-label">CPU核数</div>
        </div>
      </div>
      <div class="header-items">
        <div class="item-icon icon2"></div>
        <div class="item-attr">
          <div class="item-value">{{cpuInfo.cSys}}</div>
          <div class="item-label">CPU系统使用率</div>
        </div>
      </div>
      <div class="header-items">
        <div class="item-icon icon3"></div>
        <div class="item-attr">
          <div class="item-value">{{cpuInfo.user}}</div>
          <div class="item-label">CPU用户使用率</div>
        </div>
      </div>
      <div class="header-items">
        <div class="item-icon icon4"></div>
        <div class="item-attr">
          <div class="item-value">{{cpuInfo.idle}}</div>
          <div class="item-label">CPU当前使用率</div>
        </div>
      </div>
    </div>
    <div class="data-content">
      <div class="data-panel">
        
      </div>
      <div class="data-panel">
        
      </div>
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
      background: linear-gradient(0deg, #192B3D 0%, #13385C 100%);
    }
    .close{
      position: absolute;
      right:10px;
      top:10px;
      width: 24px;
      height: 24px;
      color:#fff;
    }
    .data-view-header{
      width:100%;
      height:122px;
      display: flex;
      justify-content: space-around;
      .header-items{
        display: flex;
        align-items: center;
        justify-content:center;
        width:24%;
        height: 100%;
        background: url('../../images/sj-bg.png') no-repeat center center;
        background-size: 100%;
        .item-icon{
          width:80px;
          height:80px;
        }
        .icon1{
          background: url('../../images/CPU1.png') no-repeat center center;
          background-size:80px;
        }
        .icon2{
          background: url('../../images/CPU2.png') no-repeat center center;
          background-size:80px;
        }
        .icon3{
          background: url('../../images/CPU3.png') no-repeat center center;
          background-size:80px;
        }
        .icon4{
          background: url('../../images/CPU4.png') no-repeat center center;
          background-size:80px;
        }
        .item-attr{
          width:60%;
          height:100%;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          .item-value{
            height:36px;
            font-family: PingFang SC;
            font-weight: 500;
            font-size: 32px;
            color: #FFFFFF;
          }
          .item-label{
            height:24px;
            font-family: PingFang SC;
            font-weight: 400;
            font-size: 15px;
            color: #AED5EF;
          }
        }
      }
    }
    .data-content{
      height: calc(100% - 240px);
      margin-top:30px;
      display:flex;
      justify-content:space-around;
      .data-panel{
        width:49%;
        background: linear-gradient(0deg, #192B3D 0%, #13385C 100%);
        border-radius: 6px;
        .panel-title{
          height:28px;
          font-family: PingFang SC;
          font-weight: 500;
          font-size: 24px;
          color: #FFFFFF;
          padding:10px 20px;
        }
        .attrs-panel{
          padding:10px 20px;
          display: flex;
          .attr-label{
            line-height: 32px;
            font-family: PingFang SC;
            font-weight: 400;
            font-size: 16px;
            color: #FFFFFF;
            width: 20%;
            text-align: right;
          }
          .attr-value{
            width: 80%;
            line-height: 32px;
            background: rgba(24,61,99,0.6);
            border: 1px solid;
            border-image: linear-gradient(-89deg, #42BFFB, #42BFFB) 1 1;
            font-size:16px;
            color:"#ffffff";
          }
        }
        .jvm-items{
          display:flex;
          flex-direction: column;
          flex-wrap: wrap;
          justify-content: space-between;
          height: calc(100% - 180px);
          .item-panel{
            width:30%;
            height:45%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: rgba(19,56,92,0.7);
            border-radius: 6px;
            margin: 5px 10px;
            .item-icon{
              width:56px;
              height:56px;
              border-radius: 50%;
              font-family: PingFang SC;
              font-weight: bold;
              font-size: 32px;
              color: #FFFFFF;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .icon1{
              background: linear-gradient(0deg, rgba(81,160,240,0.3) 0%, rgba(81,172,240,0.8) 100%);
            }
            .icon2{
              background: linear-gradient(0deg, rgba(51,203,190,0.3) 0%, rgba(81,240,227,0.8) 100%);
            }
            .icon3{
              
              background: linear-gradient(0deg, rgba(81,118,240,0.3) 0%, rgba(81,111,240,0.8) 100%);
            }
            .icon4{
              background: linear-gradient(0deg, rgba(240,107,81,0.3) 0%, rgba(255,137,91,0.8) 100%);
            }
            .item-value{
              .value{
                font-family: PingFang SC;
                font-weight: 500;
                font-size: 32px;
                color: #FFFFFF;
              }
              .unit{
                font-family: PingFang SC;
                font-weight: 400;
                font-size: 16px;
                color: #AED5EF;
              }
            }
            .item-label{
              font-family: PingFang SC;
              font-weight: 400;
              font-size: 16px;
              color: #AED5EF;
            }
          }
          .item-charts{
            height:100%;
            .chart-panel{
              width:100%;
              height:70%;
            }
            .chart-label{
              font-family: PingFang SC;
              font-weight: 500;
              font-size: 20px;
              color: #FFFFFF;
            }
          }
        }
        .mem-panel{
          border-radius: 6px;
          height:30%;
          background: linear-gradient(0deg, #192B3D 0%, #13385C 100%);
          .mem-items{
            display: flex;
            justify-content: space-evenly;
            .item{
              width:30%;
              display: flex;
              align-items: center;
              justify-content:center;
              background: url('../../../../assets/images/dz.png') no-repeat bottom;
              background-size:100% 35px;
              height:100px;
              .item-icon{
                width:80px;
                height:80px;
              }
              .icon1{
                background: url('../../../../assets/images/znc.png') no-repeat center center;
                background-size:80px;
              }
              .icon2{
                background: url('../../../../assets/images/syz.png') no-repeat center center;
                background-size:80px;
              }
              .icon3{
                background: url('../../../../assets/images/m-syz.png') no-repeat center center;
                background-size:80px;
              }
              .item-attr{
                .item-value{
                  .value{
                    font-family: PingFang SC;
                    font-weight: 500;
                    font-size: 32px;
                    color: #FFFFFF;
                  }
                  .unit{
                    font-family: PingFang SC;
                    font-weight: 400;
                    font-size: 16px;
                    color: #AED5EF;
                  }
                }
                .item-label{
                  font-family: PingFang SC;
                  font-weight: 400;
                  font-size: 16px;
                  color: #AED5EF;
                }
              }
            }
          }
        }
        .sys-panel{
          margin:10px 0;
          border-radius: 6px;
          height:calc(70% - 10px);
          background: linear-gradient(0deg, #192B3D 0%, #13385C 100%);
          .sys-table{
            width: 90%;
            height: 60%;
            margin: 5% auto;
            border-collapse: collapse;
            table,td,th{
              border: 1px solid #1E587E;
            }
            .sys-label{
              width:30%;
              background: rgba(81,172,240,0.1);
              text-align:right;
              font-family: PingFang SC;
              font-weight: 400;
              font-size: 16px;
              color: #AED9EE;
              padding-right:20px;
            }
            .sys-value{
              padding-left:20px;
              width:70%;
              font-size:16px;
              color:#FFFFFF;
            }
          }
        }
      }
      .data-panel-bg-no{
        background: none;
      }
    }
  }
</style>
