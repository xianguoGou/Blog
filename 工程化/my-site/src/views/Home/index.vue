<template>
  <div class="home-container" ref="container">
    <ul
      class="carousel-container"
      :style="{
        marginTop,
      }"
    >
      <li v-for="item in banners" :key="item.id">
        <CarouselItem />
      </li>
    </ul>
    <div class="icon icon-up" v-show="index >=1" @click="switchTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div class="icon icon-down" v-show="index < banners.length - 1" @click="switchTo(index + 1)">
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        v-for="(item, i) in banners"
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
export default {
  name: "Home",
  components: {
    Icon,
    CarouselItem,
  },
  data() {
    return {
      banners: [],
      index: 1,
      containerHeight: 0,
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
    }
  },
  async created() {
    this.banners = await getBanners();
    console.log(this.banners);
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/reset.less";
@import "~@/styles/mixins.less";
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  background-color: @words;
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
