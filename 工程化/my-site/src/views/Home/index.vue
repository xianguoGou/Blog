<template>
  <div class="home-container" ref="container">
    <h1>首页</h1>
    <button @click="handleClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    handleClick() {
      this.$showMessage({
        content: "这是一条成功的消息！",
        type: "success",
        container: this.$refs.container,
        callback: () => {
          console.log("消息提示框关闭了");
        },
      });
    },
  },
};
</script>

<style scoped>
.home-container {
  width: 300px;
  height: 300px;
  background-color: lightblue;
  margin: 0 auto;
}
</style>
