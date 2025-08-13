<script setup lang="ts">
import { ref,toRow,onMounted,defineEmits,defineExpose } from 'vue'
import {Close} from '@element-plus/icons-vue'
import Pie01 from '@/components/echarts/Pie01.vue'
import Pie02 from '@/components/echarts/Pie02.vue'
import Pie03 from '@/components/echarts/Pie03.vue'
import Pie04 from '@/components/echarts/Pie04.vue'
import Pie05 from '@/components/echarts/Pie05.vue'
import Pie06 from '@/components/echarts/Pie06.vue'

const emit = defineEmits(["closeEvent"])

const dialogVisible = ref(false)

const open = ()=>{
  dialogVisible.value = true;
}

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
    <div class="content-panel">
      <div class="data-content">
        <div class="data-panel">
          <Pie01></Pie01>
        </div>
        <div class="data-panel">
          <Pie02></Pie02>
        </div>
      </div>
      <div class="data-count-panel">
        <Pie03></Pie03>
      </div>
      <div class="data-count-panel date-legend">
        <Pie04></Pie04>
      </div>
      <div class="data-count-panel">
        <Pie05></Pie05>
      </div>
      <div class="data-count-panel">
        <Pie06></Pie06>
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
    z-index: 99999;
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
    .content-panel{
      height:calc(100% - 88px);
      overflow:auto;
      .data-content{
        height: 500px;
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
      .data-count-panel{
        height:420px;
        width:99%;
        margin:10px 0.5%;
        border-radius: 5px;
        background: linear-gradient(0deg, #192B3D 0%, #13385C 100%);
      }
      .date-legend{
        height:200px;
      }
    }
  }
</style>
