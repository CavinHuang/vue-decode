import { vueToJsonData } from './dist'

const result = vueToJsonData(`<template><h1 @click="alert">sssss</h1><slot name="testSlot" /></template>
<script lang="ts" setup>
import { ref } from 'vue'
const props = defineProps({
  /**
   * 数值一
   */
  value: String,
  /**
   * 数值二
   */
  value2: {
    type: Number
  },
  /**
   * 数值三
   */
  value3: {
    type: [String, Number]
  }
})
const emit = defineEmits(['test'])
const a = 1
const b = ref(2)
defineExpose({
  /**
   * 测试暴露方法
   * @description 测试暴露方法注释
   * @param {string} a 测试暴露方法参数
   */
  testExpose: (a: string) => {
    console.log('++++++++++++')
  }
})
const alert = () => {
  alert(1)
}
</script>
<style>h1 { color: red }</style>
`)

console.log(JSON.stringify(result))