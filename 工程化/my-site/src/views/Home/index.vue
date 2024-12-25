<template>
  <div v-loading="isLoading" class="home-container" ref="container" @wheel="handleWheel">
    <ul
      class="carousel-container"
      :style="{
        marginTop,
      }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in data" :key="item.id">
        <CarouselItem :carousel="item" />
      </li>
    </ul>
    <div class="icon icon-up" v-show="index >= 1" @click="switchTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div
      class="icon icon-down"
      v-show="index < data.length - 1"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        v-for="(item, i) in data"
        :key="item.id"
        :class="{
          active: index === i,
        }"
        @click="switchTo(i)"
      />
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import { getBanners } from "@/api/banner";
import CarouselItem from "./Carouselitem";
import fetchData from "@/mixins/fetchData";
export default {
  name: "Home",
  components: {
    Icon,
    CarouselItem,
  },
  mixins: [fetchData([])],
  data() {
    return {
      index: 0,
      containerHeight: 0,
      switching: false, // 是否正在滚动
    };
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
  methods: {
    switchTo(i) {
      this.index = i;
    },
    // 鼠标滚轮事件
    handleWheel(e) {
      // console.log(e.deltaY);
      if (this.switching || (e.deltaY >= -5 && e.deltaY <= 5)) return;
      if (e.deltaY > 5 && this.index < this.data.length - 1) {
        // console.log("向下滚动");
        this.switching = true;
        this.index++;
      } else if (e.deltaY < -5 && this.index > 0) {
        // console.log("向上滚动");
        this.switching = true;
        this.index--;
      }
    },
    // 轮播图切换动画结束事件
    handleTransitionEnd() {
      this.switching = false;
    },
    // 窗口大小改变事件
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
    // 获取远程数据
    async fetchData() {
      return await getBanners();
    }
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>

<style scoped lang="less">
@import "~@/styles/reset.less";
@import "~@/styles/mixins.less";
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  // background-color: @words;
  position: relative;
  overflow: hidden;
}
.carousel-container {
  width: 100%;
  height: 100%;
  li {
    width: 100%;
    height: 100%;
  }
  transition: 0.5s;
}
.icon {
  .self-center();
  transform: translateX(-50%);
  font-size: 30px;
  color: @gray;
  cursor: pointer;
  &.icon-up {
    top: 15px;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    top: auto;
    bottom: 15px;
    animation: jump-down 2s infinite;
  }
  @jump: 5px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }
}
.indicator {
  .self-center();
  transform: translateY(-50%);
  left: auto;
  right: 20px;
  li {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: @words;
    cursor: pointer;
    margin-bottom: 10px;
    border: 1px solid #fff;
    box-sizing: border-box;
    &.active {
      background: #fff;
    }
  }
}
</style>
