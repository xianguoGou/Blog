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
import mainScroll from "@/mixins/mainScroll";
import { getBlogDetail } from "@/api/blog";
import { titleController } from "@/utils"
export default {
  mixins: [fetchData(null), mainScroll("mainContainer")],
  components: {
    Layout,
    BlogDetail,
    BlogToc,
    BlogComment
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
      const detail = await getBlogDetail(this.$route.params.id);
      titleController.setRouteTitle(detail.title)
      return detail;
    },
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
