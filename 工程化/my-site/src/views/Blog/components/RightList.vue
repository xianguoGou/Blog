<template>
  <ul class="right-list-container">
    <li v-for="(item, index) in list" :key="index">
      <span :class="{ active: item.isSelect }" @click="handleItem(item)">{{
        item.name
      }}</span>
      <span
        :class="{ active: item.isSelect }"
        @click="handleItem(item)"
        class="aside"
        v-if="item.aside"
        >{{ item.aside }}</span
      >
      <RightList :list="item.children" @select="handleItem" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleItem(item) {
      if (item.isSelect) return;
      this.$emit("select", item);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.right-list-container {
  list-style: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-size: 16px;
  .right-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    font-size: 14px;
    cursor: pointer;
    .active {
      color: @warn;
      font-weight: bold;
    }
  }
  .active {
    color: @warn;
    font-weight: bold;
  }
}
.aside {
  font-size: 12px;
  margin-left: 1em;
  color: @gray;
}
</style>
