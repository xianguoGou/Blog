<template>
  <div class="row-title">普通样式</div>
  <div class="row">
    <DuButton>默认按钮</DuButton>
    <DuButton type="primary">主要按钮</DuButton>
    <DuButton type="info">信息按钮</DuButton>
    <DuButton type="success">成功按钮</DuButton>
    <DuButton type="warning">警告按钮</DuButton>
    <DuButton type="danger">危险按钮</DuButton>
  </div>
  <h1 class="row-title">朴素按钮</h1>
  <div class="row">
    <DuButton plain>默认按钮</DuButton>
    <DuButton type="primary" plain>主要按钮</DuButton>
    <DuButton type="info" plain>信息按钮</DuButton>
    <DuButton type="success" plain>成功按钮</DuButton>
    <DuButton type="warning" plain>警告按钮</DuButton>
    <DuButton type="danger" plain>危险按钮</DuButton>
  </div>
  <h1 class="row-title">圆角按钮</h1>
  <div class="row">
    <DuButton round>默认按钮</DuButton>
    <DuButton type="primary" round>主要按钮</DuButton>
    <DuButton type="info" round>信息按钮</DuButton>
    <DuButton type="success" plain round>成功按钮</DuButton>
    <DuButton type="warning" plain round>警告按钮</DuButton>
    <DuButton type="danger" plain round>危险按钮</DuButton>
  </div>
  <h1 class="row-title">禁用状态</h1>
  <div class="row">
    <DuButton disabled>默认按钮</DuButton>
    <DuButton type="primary" disabled>主要按钮</DuButton>
    <DuButton type="info" disabled>信息按钮</DuButton>
    <DuButton type="success" disabled>成功按钮</DuButton>
    <DuButton type="warning" disabled>警告按钮</DuButton>
    <DuButton type="danger" disabled>危险按钮</DuButton>
  </div>
  <h1 class="row-title">等待状态</h1>
  <div class="row">
    <DuButton loading>默认按钮</DuButton>
    <DuButton type="primary" loading>主要按钮</DuButton>
    <DuButton type="info" loading>信息按钮</DuButton>
    <DuButton type="success" loading round>成功按钮</DuButton>
    <DuButton type="warning" loading round>警告按钮</DuButton>
    <DuButton type="danger" loading round>危险按钮</DuButton>
  </div>
  <h1 class="row-title">图标按钮</h1>
  <div class="row">
    <DuButton icon="file">默认按钮</DuButton>
    <DuButton type="primary" icon="gear">主要按钮</DuButton>
    <DuButton type="info" icon="folder" plain>信息按钮</DuButton>
    <DuButton type="success" icon="bug" plain>成功按钮</DuButton>
    <DuButton type="warning" icon="code" round>警告按钮</DuButton>
    <DuButton type="danger" icon="cube" round>危险按钮</DuButton>
  </div>
  <h1 class="row-title">不同尺寸的按钮</h1>
  <div class="row">
    <DuButton icon="file" size="small">默认按钮</DuButton>
    <DuButton type="primary" icon="gear" size="small">主要按钮</DuButton>
    <DuButton type="info" icon="folder" plain>信息按钮</DuButton>
    <DuButton type="success" icon="bug" plain>成功按钮</DuButton>
    <DuButton type="warning" icon="code" plain size="large">警告按钮</DuButton>
    <DuButton type="danger" icon="cube" plain size="large">危险按钮</DuButton>
  </div>
  <h1 class="row-title">圆形按钮</h1>
  <div class="row">
    <DuButton type="danger" circle>验</DuButton>
    <DuButton type="primary" icon="gear" circle></DuButton>
    <DuButton type="info" icon="folder" circle plain></DuButton>
    <DuButton type="success" icon="bug" circle plain></DuButton>
    <DuButton type="warning" icon="code" circle disabled></DuButton>
    <DuButton type="danger" icon="cube" circle disabled></DuButton>
  </div>
  <h1 class="row-title">按钮事件</h1>
  <div class="row">
    <DuButton type="primary" @click="clickHandler" ref="btnRef">主要按钮</DuButton>
  </div>
</template>
<script setup lang="ts">
import { ref, type ButtonHTMLAttributes } from 'vue'
const btnRef = ref<{ ref: ButtonHTMLAttributes }>()

function clickHandler() {
  console.log(btnRef.value?.ref)
  window.alert('按钮被点击了')
}
</script>
