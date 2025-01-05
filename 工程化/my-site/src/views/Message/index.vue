<template>
  <div class="message-container" ref="messageContainer">
    <MessageArea
      title="留言板"
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
import mainScroll from "@/mixins/mainScroll";
import { getMessages, postMessage } from "@/api/message";

export default {
  name: "Message",
  mixins: [fetchData({ total: 0, rows: [] }), mainScroll("messageContainer")],
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
    this.$bus.$on("mainScroll", this.handleScroll)
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll)
  },
  methods: {
    async fetchData() {
      return await getMessages(this.page, this.limit);
    },
    handleScroll(dom) {
      if (this.isLoading || !dom) return;
      const range = 100;
      const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      if (dec <= range) {
        console.log("fetchMore")
        this.fetchMore();
      }
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
    async handleSubmit(data, callback) {
      const res = await postMessage(data);
      console.log("res:", res);
      this.data.rows.unshift(res);
      this.data.total++;
      callback('留言成功')
    },
  },
};
</script>

<style lang="less" scoped>
.message-container {
  width: 100%;
  height: 100%;
  padding: 20px 0;
  overflow-y: auto;
  scroll-behavior: smooth;
  box-sizing: border-box;
}
.message-area-container {
  width: 700px;
  margin: 0 auto;
}
</style>
