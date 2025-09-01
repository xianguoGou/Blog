<template>
  <h1 class="row-title">第一组</h1>
  <div class="row">
    <!-- 卡片一 -->
    <DuCard img-src="/image1.webp" summary="是对方是否是对方的方式地方retort" />
    <!-- 卡片二 -->
    <DuCard img-src="/image2.webp" summary="说的亏空公款电视上的冯绍峰的身份">
      <!-- 插槽内部的内容样式由用户自己决定 -->
      <template #footer>
        <div class="footer">
          <div class="level">中级 · 5225人</div>
          <div class="price">￥399.00</div>
        </div>
      </template>
    </DuCard>
  </div>
  <h1 class="row-title">第二组</h1>
  <div class="row">
    <DuCard img-src="/image3.webp" :width="368" :img-height="90">
      <div>粉色的方式地方是对方说的方式地方 发生的芳芳是对方的身份</div>
      <!-- 插槽内部的内容样式由用户自己决定 -->
      <template #footer>
        <div class="footer-java">
          <div class="level">3步骤 · 10982人</div>
          <div class="level">10982收藏</div>
        </div>
      </template>
    </DuCard>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.level {
  color: #9199a1;
  margin-bottom: 8px;
}

.price {
  color: #f01414;
}

.footer-java {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding: 0 8px;
}
</style>
