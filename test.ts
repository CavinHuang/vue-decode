import { vueToJsonData } from './dist'

vueToJsonData(`<template><h1>sssss</h1></template>
<script lang="ts" setup>
const props = defineProps({
  value: String,
  value2: {
    type: Number
  },
  value3: {
    type: [String, Number]
  }
})
</script>
<style>h1 { color: red }</style>
`)