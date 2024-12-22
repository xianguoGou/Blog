<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="carousel-image" ref="image" :style="imagePosition">
      <ImageLoader
        @load="textWords"
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
      />
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="desc" ref="desc">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["carousel"],
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: null, // 容器的宽高
      imageSize: null, // 图片的宽高
      mouseX: 0, // 鼠标的x轴坐标
      mouseY: 0, // 鼠标的y轴坐标
    };
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.getSize();
    // 初始位置让鼠标在中心
    this.mouseX = this.mouseCenter.x;
    this.mouseY = this.mouseCenter.y;
    window.addEventListener('resize', this.getSize)
  },
  computed: {
    imagePosition() {
      if (!this.imageSize || !this.containerSize) return;
      const extraWidth = this.imageSize.width - this.containerSize.width;
      const extraHeight = this.imageSize.height - this.containerSize.height;
      const left = -extraWidth / this.containerSize.width * this.mouseX;
      const top = -extraHeight / this.containerSize.height * this.mouseY;
      return {
        transform: `translate(${left}px, ${top}px)`,
      };
    },
    mouseCenter() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      }
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.getSize)
  },
  methods: {
    textWords() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      this.$refs.title.clientWidth;
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = `${this.titleWidth}px`;

      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      this.$refs.desc.clientWidth;
      this.$refs.desc.style.transition = "1s 1.2s";
      this.$refs.desc.style.width = `${this.descWidth}px`;
    },
    handleMouseMove(e) {
      // console.log(e)
      const imageSize = this.$refs.image.getBoundingClientRect();
      this.mouseX = e.clientX - imageSize.left;
      this.mouseY = e.clientY - imageSize.top;
      // console.log(this.mouseX, this.mouseY);
    },
    handleMouseLeave() {
      this.mouseX = this.mouseCenter.x;
      this.mouseY = this.mouseCenter.y;
    },
    getSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      this.imageSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight,
      };
      console.log(this.containerSize, this.imageSize);
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.carousel-item-container {
  height: 100%;
  width: 100%;
  // background-color: #fff;
  color: #fff;
  position: relative;
  overflow: hidden;
}
.carousel-image {
  width: 110%;
  height: 110%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -2;
  transition: 0.3s;
}
.title,
.desc {
  position: absolute;
  left: 30px;
  color: #fff;
  letter-spacing: 3px;
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
  text-shadow: 1px 0px 0px rgba(0, 0, 0, 0.5), -1px 0px 0px rgba(0, 0, 0, 0.5), 0px 1px 0px rgba(0, 0, 0, 0.5), 0px -1px 0px rgba(0, 0, 0, 0.5);
}
.title {
  top: calc(50% - 40px);
  font-size: 2em;
}
.desc {
  top: calc(50% + 20px);
  font-size: 1.2em;
}
</style>
