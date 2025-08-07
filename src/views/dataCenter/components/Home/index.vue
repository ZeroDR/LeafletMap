<template>
  <div class="data-view-content">
    <div class="header-title">
      <span>系统管理</span>  >  <span>系统运行状况</span>
    </div>
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
        <div class="panel-title">虚拟机(JVM)</div>
        <div class="attrs-panel">
          <span class="attr-label">jdk路径：</span>
          <div class="attr-value">{{jvmInfo.jdkHome}}</div>
        </div>
        <div class="attrs-panel">
          <span class="attr-label">jdkVersion：</span>
          <div class="attr-value">{{jvmInfo.jdkVersion}}</div>
        </div>
        <div class="jvm-items">
          <div class="item-panel">
            <div class="item-icon icon1">t</div>
            <div class="item-value">
              <span class="value">{{getUnitValue(0,jvmInfo.total)}}</span>
              <span class="unit">{{getUnitValue(1,jvmInfo.total)}}</span>
            </div>
            <div class="item-label">jvm总内存</div>
          </div>
          <div class="item-panel">
            <div class="item-icon icon2">m</div>
            <div class="item-value">
              <span class="value">{{getUnitValue(0,jvmInfo.free)}}</span>
              <span class="unit">{{getUnitValue(1,jvmInfo.free)}}</span>
            </div>
            <div class="item-label">空闲空间</div>
          </div>
          <div class="item-panel">
            <div class="item-icon icon3">f</div>
            <div class="item-value">
              <span class="value">{{getUnitValue(0,jvmInfo.max)}}</span>
              <span class="unit">{{getUnitValue(1,jvmInfo.max)}}</span>
            </div>
            <div class="item-label">jvm最大申请值</div>
          </div>
          <div class="item-panel">
            <div class="item-icon icon4">u</div>
            <div class="item-value">
              <span class="value">{{getUnitValue(0,jvmInfo.user)}}</span>
              <span class="unit">{{getUnitValue(1,jvmInfo.user)}}</span>
            </div>
            <div class="item-label">jvm已使用内存</div>
          </div>
          <div class="item-panel item-charts">
            <div class="chart-panel">
            </div>
            <div class="chart-label">jvm内存使用率</div>
          </div>
        </div>
      </div>
      <div class="data-panel data-panel-bg-no">
        <div class="mem-panel">
          <div class="panel-title">内存(Mem)信息</div>
          <div class="mem-items">
            <div class="item">
              <div class="item-icon icon1"></div>
              <div class="item-attr">
                <div class="item-value">
                  <span class="value">{{getUnitValue(0,memInfo.total)}}</span>
                  <span class="unit">{{getUnitValue(1,memInfo.total)}}</span> 
                </div>
                <div class="item-label">总内存</div>
              </div>
            </div>
            <div class="item">
              <div class="item-icon icon2"></div>
              <div class="item-attr">
                <div class="item-value">
                  <span class="value">{{getUnitValue(0,memInfo.used)}}</span>
                  <span class="unit">{{getUnitValue(1,memInfo.used)}}</span> 
                </div>
                <div class="item-label">使用值</div>
              </div>
            </div>
            <div class="item">
              <div class="item-icon icon3"></div>
              <div class="item-attr">
                <div class="item-value">
                  <span class="value">{{getUnitValue(0,memInfo.free)}}</span>
                  <span class="unit">{{getUnitValue(1,memInfo.free)}}</span> 
                </div>
                <div class="item-label">剩余值</div>
              </div>
            </div>
          </div>
        </div>
        <div class="sys-panel">
          <div class="panel-title">系统(Sys)信息</div>
          <table class="sys-table">
            <tr>
              <td class="sys-label">工作目录</td>
              <td class="sys-value">{{sysInfo.userDir}}</td>
            </tr>
            <tr>
              <td class="sys-label">服务器IP</td>
              <td class="sys-value">{{sysInfo.computerIp}}</td>
            </tr>
            <tr>
              <td class="sys-label">服务器名称</td>
              <td class="sys-value">{{sysInfo.computerName}}</td>
            </tr>
            <tr>
              <td class="sys-label">服务器系统框架</td>
              <td class="sys-value">{{sysInfo.osArch}}</td>
            </tr>
            <tr>
              <td class="sys-label">服务器系统版本</td>
              <td class="sys-value">{{sysInfo.osName}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref,toRow,onMounted,createApp } from 'vue'
import { useRouter } from 'vue-router'

const cpuInfo = ref({})
const jvmInfo = ref({})
const memInfo = ref({})
const sysInfo = ref({})

const getUnitValue = (type,value='')=>{
  let vl = type ? (''+value).match(/[A-Za-z]/g) : (''+value).match(/\d+(.\d+)?/g)
  return type ? ((vl && vl.length) ? vl.join('') : '') : ((vl && vl.length) ? vl[0] : 0)
}
</script>

<style lang="scss" scoped>
.data-view-content{
  position: relative;
  width:100%;
  height:100%;
  background: rgba(255,255,255,0.7);
  border: 1px solid rgba(84,217,255,0.2);
  .header-title{
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
