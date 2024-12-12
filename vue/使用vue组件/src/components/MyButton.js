const template = `<div>{{text}}: <button v-on:click="count++">{{count}}</button></div>`
export default {
    props: ["text"],
    data() {
        return {
            count: 0
        }
    },
    template
}