<template>
  <div class="carousel-item-container">
    Carousel item
  </div>
</template>

<script>
export default {
    name: 'Carouselitem'
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.carousel-item-container {
    height: 100%;
    width: 100%;
    background-color:@words;
    color: #fff;
}

</style>