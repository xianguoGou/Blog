<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="toc" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
export default {
  props: {
    toc: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    RightList,
  },
  methods: {
    handleSelect(item) {
      location.hash = `#${item.anchor}`;
      console.log(item);
    }
  }
};
</script>

<style></style>
