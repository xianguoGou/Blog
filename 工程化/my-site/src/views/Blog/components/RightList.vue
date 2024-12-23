<template>
  <ul class="right-list-container">
    <li v-for="(item, index) in list" :key="index" >
       <span :class="{ active: item.isSelect}" @click="handleItem(item)">{{ item.name }}</span> 
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
        this.$emit("select", item);
    }
  }
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.right-list-container {
  list-style: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  .right-list-container {
    margin-left: 1em;
  }
  .active {
    color: @warn;
    font-weight: bold;
  }
}
</style>
