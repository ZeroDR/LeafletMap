<template>
  <div class="popup-panel">
    <div @click="rowClick">123</div>
  </div>
</template>

<script setup lang="ts">
  import { ref,onMounted, nextTick, onBeforeUnmount,defineExpose } from 'vue'
  const props = defineProps(['dataSource'])
  const emits = defineEmits(['popupCallback'])

  const rowClick = ()=>{
    emits('popupCallback',{type:1})
  }

  onMounted(()=>{
    console.log(props)
  })
</script>

<style lang="scss" scoped>
  .popup-panel{
    width:300px;
    height:200px;
  }
</style>