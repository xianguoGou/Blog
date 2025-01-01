<template>
  <Layout>
    <div ref="mainContainer"  class="main-container" v-loading="isLoading">
      <BlogDetail :blog="data" v-if="data"></BlogDetail>
       <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogToc :toc="data.toc" v-if="data"></BlogToc>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogComment from "./components/BlogComment"
import BlogToc from "./components/BlogTOC";
import fetchData from "@/mixins/fetchData";
import { getBlogDetail } from "@/api/blog";
export default {
  mixins: [fetchData(null)],
  components: {
    Layout,
    BlogDetail,
    BlogToc,
    BlogComment
  },
  mounted() {
    this.$bus.$on('mainSetScroll',this.handleMainSetScroll)
    this.$refs.mainContainer.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    this.$bus.$emit('mainScroll')
    this.$bus.$off('mainSetScroll',this.handleMainSetScroll)
    this.$refs.mainContainer.removeEventListener("scroll", this.handleScroll);
  },
  updated() {
    const hash = location.hash
    location.hash = ""
    setTimeout(() => {
      location.hash = hash
    }, 50)
  },
  methods: {
    async fetchData() {
      return await getBlogDetail(this.$route.params.id);
    },
    handleScroll() {
      this.$bus.$emit("mainScroll", this.$refs.mainContainer)
    },
    handleMainSetScroll(scrollTop) {
      this.$refs.mainContainer.scrollTop = scrollTop
    }
  },
};
</script>

<style scoped lang="less">
.main-container {
  padding: 20px;
  box-sizing: border-box;
  height: 100%;
  overflow-y: scroll;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  scroll-behavior: smooth;
  // background-color: #f5f5f5;
}
.right-container {
  width: 300px;
  height: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
  position: relative;
  padding: 20px;
}
</style>
