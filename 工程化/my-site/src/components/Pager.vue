<template>
  <div class="pager-container">
    <a
      @click="handleChange(1)"
      :class="{
        disabled: current <= 1,
      }"
      >|&lt;&lt;</a
    >
    <a
      @click="handleChange(current - 1)"
      :class="{
        disabled: current <= 1,
      }"
      >&lt;&lt;</a
    >
    <a
      @click="handleChange(n)"
      :class="{
        active: current === n,
      }"
      v-for="(n, i) in nums"
      :key="i"
      >{{ n }}</a
    >
    <a
      @click="handleChange(current + 1)"
      :class="{
        disabled: current >= pageNumber,
      }"
      >&gt;&gt;</a
    >
    <a
      @click="handleChange(pageNumber)"
      :class="{
        disabled: current >= pageNumber,
      }"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  name: "Pager",
  props: {
    // 当前页
    current: {
      type: Number,
      default: 1,
    },
    // 总数
    total: {
      type: Number,
      default: 0,
    },
    // 每页显示的条数
    limit: {
      type: Number,
      default: 10,
    },
    // 可见页码数
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    visibleMin() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleMax() {
      let max = this.visibleMin + (this.visibleNumber - 1);
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    nums() {
      let array = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        array.push(i);
      }
      return array;
    },
  },
  methods: {
    handleChange(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }
      if (newPage === this.current) {
        return;
      }
      this.$emit("pageChange", newPage)
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  a {
    color: @primary;
    margin: 0 3px;
    cursor: pointer;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @dark;
      font-weight: bold;
      cursor: auto;
    }
  }
}
</style>
