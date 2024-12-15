<template>
  <div class="test-container">
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      :duration="1000"
      @load="handleLoaded"
    />
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader"
export default {
    components: {
        ImageLoader
    },
    methods: {
        handleLoaded() {
            console.log('图片加载完成啦')
        }
    }
};
</script>

<style scoped lang="less">
.test-container {
    width: 400px;
    height: 300px;
    border: 1px solid #ccc;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
}
</style>
