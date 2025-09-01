<template>
  <h1 class="row-title">普通引入</h1>
  <div class="row">
    <DuIcon icon="user-secret" />
    <DuIcon icon="bars" />
    <DuIcon icon="shield-halved" />
    <DuIcon icon="file" />
    <DuIcon icon="filter" />
    <DuIcon icon="gear" />
    <DuIcon icon="barcode" />
    <DuIcon icon="folder" />
    <DuIcon icon="folder-open" />
  </div>
  <h1 class="row-title">旋转与翻转</h1>
  <div class="row">
    <DuIcon icon="user-secret" rotation="90" size="xl" />
    <DuIcon icon="bars" rotation="270" size="xl" />
    <DuIcon icon="shield-halved" rotation="180" size="xl" />
    <DuIcon icon="file" flip="horizontal" size="xl" />
    <DuIcon icon="filter" flip="vertical" size="xl" />
    <DuIcon icon="folder-open" flip="both" size="xl" />
  </div>
  <h1 class="row-title">动画效果</h1>
  <div class="row">
    <DuIcon icon="user-secret" size="xl" beat />
    <DuIcon icon="bars" size="xl" beat-fade />
    <DuIcon icon="shield-halved" size="xl" bounce />
    <DuIcon icon="file" size="xl" fade />
    <DuIcon icon="filter" size="xl" flip />
    <DuIcon icon="gear" size="xl" shake />
    <DuIcon icon="barcode" size="xl" spin />
    <DuIcon icon="folder" size="xl" spin spin-reverse />
    <DuIcon icon="folder-open" size="xl" spin-pulse />
  </div>
  <h1 class="row-title">添加自定义属性</h1>
  <div class="row">
    <DuIcon icon="user-secret" size="xl" type="primary" />
    <DuIcon icon="bars" size="xl" type="success" />
    <DuIcon icon="shield-halved" size="xl" type="info" />
    <DuIcon icon="file" size="xl" type="warning" />
    <DuIcon icon="filter" size="xl" type="danger" />
    <DuIcon icon="gear" size="xl" color="#e47412" />
    <DuIcon icon="barcode" size="xl" color="#7ec102" />
    <DuIcon icon="folder" size="xl" color="skyblue" />
    <DuIcon icon="folder-open" size="xl" color="rgba(122, 122, 122, .5)" />
  </div>
</template>
