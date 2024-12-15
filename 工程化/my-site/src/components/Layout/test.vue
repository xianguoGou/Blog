<template>
  <div class="test-container">
    <Layout>
        <template #left>
            <div class="left-panel">Left</div>
        </template>
        <template #default>
            <main class="center-panel">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non doloremque obcaecati vel inventore nobis! Impedit ullam excepturi nobis voluptas earum nisi itaque deserunt, magni minima totam numquam voluptatum dolorem ipsum similique asperiores quibusdam repellat corrupti deleniti eaque! Sunt illum dolor ducimus reprehenderit et aliquam ipsam autem, cupiditate quos amet laborum voluptatem non consectetur at, nesciunt dolore, ut debitis in laudantium quaerat iste similique molestiae mollitia? Dolorum possimus incidunt, veritatis quae pariatur rerum. Optio soluta ipsam, esse earum facere magni fugit repellat, ad corporis sed quidem possimus rerum exercitationem illo sit ipsa blanditiis iste et sint impedit! Perspiciatis, quisquam inventore. Quidem, quae debitis corrupti eos quisquam aspernatur necessitatibus placeat, voluptates sequi eius tenetur et qui minus temporibus perspiciatis reiciendis impedit officia ipsum repellat. Saepe aut voluptatem voluptates assumenda vitae repellendus magni, aperiam quas, eligendi minima sequi. Quas voluptatem repudiandae odit iure soluta impedit nulla provident quod quos libero, ex at veniam deserunt sed vel dolorum ipsum explicabo iusto nostrum est aliquid dolor quae. Modi rem facere ea enim possimus neque beatae, in earum dolores velit corporis itaque optio eaque id dolore, provident quam reiciendis, sint repudiandae? Eius voluptatem saepe sint excepturi alias nihil molestiae voluptatibus, laborum, error expedita nostrum, minima nisi!
            </main>
        </template>
        <template #right>
            <div class="right-panel">Right</div>
        </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout'
export default {
    components: {
        Layout
    }
}
</script>

<style lang="less" scoped>
.test-container {
    width: 80%;
    height: 400px;
    border: 2px solid;
    .left-panel {
        width: 200px;
        height: 100%;
        background: lightcoral;
    }
    .center-panel {
        width: 100%;
        height: 100%;
        background: lightblue;
        white-space: nowrap;
    }
    .right-panel {
        width: 150px;
        height: 100%;
        background: lightgreen;
    }
}
</style>