<template>
  <div class="image-loader-container">
    <img v-if="!finallyDone" :src="placeholder" class="placeholder" alt="" />
    <img
      :src="src"
      class="origin"
      alt=""
      @load="handleLoad"
      :style="{
        opacity: originOpacity,
        transition: `${duration}ms`,
      }"
    />
  </div>
</template>

<script>
export default {
  name: "ImageLoader",
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      loaded: false,
      finallyDone: false,
    };
  },
  methods: {
    handleLoad() {
      this.loaded = true;
      setTimeout(() => {
        this.finallyDone = true;
        this.$emit("load");
      }, this.duration);
    },
  },
  computed: {
    originOpacity() {
      return this.loaded ? 1 : 0;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixins.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  img {
    .self-full();
  }
  .placeholder {
    filter: blur(2vw);
  }
}
</style>
