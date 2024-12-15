<template>
  <!-- <Pager :current="10" :visibleNumber="20" :total="506" /> -->
  <Pager :current="current" :total="total" @pageChange="handlePageChange" />
</template>

<script>
import Pager from "@/components/Pager";
export default {
  components: {
    Pager,
  },
  data() {
    return {
      current: 3,
      total: 506,
    };
  },
  methods: {
    handlePageChange(page) {
      console.log("page:", page);
      this.current = page;
    },
  },
};
</script>

<style></style>
