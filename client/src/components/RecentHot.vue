<template>
    <TemplateSlot>
        最近热门
        <template v-slot:content>
            <ul class="hot-list">
                <li v-for="item in hotList" :key="item.id"><a :href="`/detail/${item.id}`">{{item.title}}</a></li>
            </ul>
        </template>
    </TemplateSlot>
</template>

<script>
    import TemplateSlot from './TemplateSlot'
    import axios from 'axios'
    export default {
        components: {
            TemplateSlot
        },
        data() {
            return {
                hotList: []
            }
        },
        async mounted() {
            this.hotList = await axios.get("/queryBlogsBytitle").then(data => data.data);
        }
    }
</script>

<style lang='scss' scoped>
    .hot-list {
        list-style: none;

        li {
            height: 30px;
            line-height: 30px;
            border-bottom: 1px solid #292929;
            font-size: 14px;

            a {
                color: #eee;
            }
        }
    }
</style>