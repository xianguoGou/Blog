export default function mainScroll(refValue) {
    return {
        mounted() {
            this.$bus.$on('mainSetScroll',this.handleSetMainScroll)
            this.$refs[refValue].addEventListener("scroll", this.handleMainScroll);
        },
        beforeDestroy() {
            this.$bus.$emit('mainScroll')
            this.$bus.$off('mainSetScroll',this.handleSetMainScroll)
            this.$refs[refValue].removeEventListener("scroll", this.handleMainScroll);
        },
        methods: {
            handleSetMainScroll(scrollTop) {
                this.$refs[refValue].scrollTop = scrollTop
            },
            handleMainScroll() {
                this.$bus.$emit("mainScroll", this.$refs[refValue])
              },
        }
    }
}