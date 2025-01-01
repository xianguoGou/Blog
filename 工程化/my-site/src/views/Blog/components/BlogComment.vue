<template>
  <div class="blog-comment-container">
    <MessageArea
      title="评论列表"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData";
import { getBlogComment, postBlogComment } from "@/api/blog";
export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  computed: {
    hasMore() {
      return this.data.rows.length < this.data.total;
    }
  },
  created() {
    this.$bus.$on("mainScroll", this.handleMainScroll)
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleMainScroll)
  },
  methods: {
    handleMainScroll(dom) {
      if (this.isLoading || !dom) return;
      const range = 100;
      const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      if (dec <= range) {
        console.log("fetchMore")
        this.fetchMore();
      }
      // console.log(dom)
    },
    async fetchData() {
      return await getBlogComment(this.$route.params.id, this.page, this.limit);
    },
    async fetchMore() {
      if(!this.hasMore) return;
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;

    },
    async handleSubmit(formData, callback) {
      const resData = await postBlogComment({
        blogId: this.$route.params.id,
        ...formData,
      });
      this.data.rows.unshift(resData);
      this.data.total++;
      callback("评论成功");
      console.log(resData);
    },
  },
};
</script>

<style scoped lang="less">
.blog-comment-container {
  margin: 30px 0;
}
</style>
