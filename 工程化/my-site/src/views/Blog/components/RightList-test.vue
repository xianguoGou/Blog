<template>
  <RightList :list="list" @select="handleSelect" />
</template>

<script>
import RightList from "./RightList";
export default {
  components: {
    RightList,
  },
  data() {
    return {
      list: [
        {
          name: "a",
          isSelect: false,
          children: [
            { name: "a-1", isSelect: false },
            { name: "a-2", isSelect: false },
            {
              name: "a-3",
              isSelect: true,
              children: [
                { name: "a-3-1", isSelect: false },
                { name: "a-3-2", isSelect: false },
                { name: "a-3-3", isSelect: false },
              ],
            },
          ],
        },
        {
          name: "b",
          isSelect: false,
          children: [
            { name: "b-1", isSelect: false },
            { name: "b-2", isSelect: false },
            { name: "b-3", isSelect: false },
          ],
        },
        { name: "c", isSelect: false },
      ],
    };
  },
  methods: {
    handleSelect(item) {
        console.log(item)
    }
  }
};
</script>
