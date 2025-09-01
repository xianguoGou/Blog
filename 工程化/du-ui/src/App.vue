<template>
  <h1 class="title">Element UI 组件展示</h1>
  <nav class="nav">
    <router-link to="/">Icon</router-link>
    <router-link to="/button">Button</router-link>
    <router-link to="/card">Card</router-link>
    <router-link to="/pager">Pager</router-link>
    <router-link to="/collapse">Collapse</router-link>
    <router-link to="/dialog">Dialog</router-link>
    <router-link to="/dropdown">Dropdown</router-link>
    <router-link to="/tooltip">Tooltip</router-link>
  </nav>
  <div class="displayArea">
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
h1.title {
  text-align: center;
  font-weight: 200;
}

.nav {
  display: flex;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
}

.displayArea {
  margin-top: 2em;
}
.active {
  border-bottom: 3px solid var(--du-color-primary);
}
</style>
