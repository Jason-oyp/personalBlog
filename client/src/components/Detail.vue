<template>
    <div class="detail">
        <h3>{{data.title}}</h3>
        <p class="info">
            <span class="meat_span">作者: Jason</span>
            <span class="meat_span">发布于: {{new Date(data.ctime).toLocaleDateString()}}</span>
            <span class="meat_span">浏览({{data.views}})</span>
            <span class="meat_span">
                <a href="#comments">评论({{count}})</a>
            </span>
        </p>
        <div v-html="data.content" class="content"></div>
    </div>
</template>

<script>
    import blog from '../axios/blog'
    import axios from 'axios';
    export default {
        async mounted() {
            const id = this.$route.params.id;
            const data = await blog.getSingleBlog(id);
            this.data = data;
            await axios.post('/updateBlog', {
                id,
                views: data.views + 1
            });
        },
        data() {
            return {
                data: {}
            }
        },
        computed: {
            count() {
                return this.$store.state.comment.count;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .detail {
        padding: 19px;
        box-shadow: 2px 2px 10px #5f5f5f;
        border-radius: 4px;
        background-color: #f5f5f5;
        border: 1px solid #e3e3e3;
        font-size: 14px;

        h3 {
            font-size: 20px;
            margin-bottom: 15px;
        }

        .info {
            border-bottom: 1px solid #ccc;
            padding-bottom: 10px;
        }

        .content {
            margin-top: 20px;
        }
    }
</style>