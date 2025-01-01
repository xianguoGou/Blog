<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="withListAnchor" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList";
import { debounce } from "@/utils"
export default {
  props: {
    toc: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    RightList,
  },
  data() {
    return {
      activeAnchor: "",
    };
  },
  created() {
    this.setSelectDebounce = debounce(this.setSelect, 50)
    this.$bus.$on("mainScroll", this.setSelectDebounce)
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.setSelectDebounce)
  },
  computed: {
    withListAnchor() {
      const getSelectTOC = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getSelectTOC(t.children),
        }));
      };
      return getSelectTOC(this.toc);
    },
    // 根据toc得到它们对应的元素数组
    doms() {
      let doms = [];
      const addToDoms = (toc = []) => {
        for (const t of toc) {
          // console.log('t', t.anchor)
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length > 0) {
            addToDoms(t.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
    },
  },
  methods: {
    handleSelect(item) {
      location.hash = `#${item.anchor}`;
      console.log(item);
    },
    // 设置activeAnchor为正确的值
    setSelect(scrollDom) {
      if (!scrollDom) return;
      this.activeAnchor = "";
      const range = 100;
      for (const dom of this.doms) {
        if (!dom) continue;
        // 得到元素离视口顶部的距离
        const top = dom.getBoundingClientRect().top;
        // console.log("top", top);
        if (top >= 0 && top <= range) {
          this.activeAnchor = dom.id;
          return;
          // 在规定的范围内
        } else if (top > range) {
          // 在规定范围的下方
          return;
        } else {
          // 在规定范围的上方
          this.activeAnchor = dom.id;
        }
      }
    },
  },
};
</script>

<style></style>
