<template>
  <div>
    <div class="test-container">
      <Loading v-if="loading" />
    </div>
    <button @click="loading = !loading">切换显示/隐藏</button>
  </div>
</template>

<script>
import Loading from "./index";
export default {
  components: {
    Loading,
  },
  data() {
    return {
      loading: true,
    };
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixins.less";
.test-container {
  position: relative;
  .self-center();
}
</style>
