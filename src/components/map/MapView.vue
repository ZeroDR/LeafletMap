<script setup lang="ts">
import { ref,onMounted,defineExpose } from 'vue'
import HandleMap from '@/utils/MapHandle.js'

const msg = ref('456')
const count = ref(0)
let map =undefined;
let handleMap = undefined;
const layerGroup = ref([{
  id:1,
  visible:true,
  layer:undefined,
},{
  id:2,
  visible:true,
  layer:undefined
}])
const init = () => {
  !handleMap && (handleMap = new HandleMap({id:'map'}));
  console.log(handleMap)
  layerGroup.value.forEach((item,index)=>{
    if(index==0){
      item.layer = handleMap.loadMarker([{latitude:39.96,longitude:116.37,name:'123'}],item.id)
    }else{
      item.layer = handleMap.loadMarker([{latitude:39.86,longitude:116.37,name:'123'}],item.id)
    }
  })
}

const handleClick = (layers)=>{
  console.log(layers,1111)
  layerGroup.value.forEach(l=>{
    if(layers.includes(l.id) && !l.visible){
      l.layer.addTo(handleMap.map)
      l.visible=true
    }else if(!layers.includes(l.id)){
      l.visible = false;
      handleMap.remove(l.layer)
    }
    // if(item != l.id){
    //   l.visible = false;
    //   handleMap.remove(l.layer)
    // }else{
    //   l.layer.addTo(handleMap.map)
    // }
  })
}

defineExpose({handleClick})

onMounted(()=>{
  init();
});
</script>

<template>
  <div class="content-view">
    <div class="map-panel" id="map">
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .content-view{
    width:100vw;
    height:100vh;
    margin:0;
    padding:0;
    overflow: hidden;
    .map-panel{
      width:100vw;
      height:100vh;
      margin:0;
      padding:0;
      overflow: hidden;
      // filter: invert(1) hue-rotate(180deg);
    }
  }
</style>
