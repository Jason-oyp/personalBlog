<template>
    <div class="show-comments" id="comments">
        <div class="title">
            Laravel5.4安装passport时遇到的一些问题:{{+count === 0?"本文章暂时无留言":"目前"+count+"条留言" }}
        </div>
        <div class="comment" v-for="item in commentList" :key="item.id">
            <div class="name-date">
                {{item.user_name}}:发表于 {{new Date(item.ctime).toLocaleDateString()}}
            </div>
            <div class="content">
                {{item.comments}}
            </div>
        </div>
    </div>
</template>

<script>
    import {
        queryComments
    } from '../axios/comment'
    import {
        mapState
    } from 'vuex'
    export default {
        async mounted() {
            const blog_id = this.$route.params.id;
            const result = await queryComments(blog_id);
            this.commentList = result.data;
            this.$store.commit('comment/changeCount', result.count);
        },
        data() {
            return {
                commentList: []
            }
        },
        computed: {
            ...mapState('comment', ['count'])
        }
    }
</script>

<style lang="scss" scoped>
    .show-comments {
        width: 100%;
        // border: 1px solid black;
        margin-top: 20px;

        .title {
            margin: 10px 0;
        }

        .comment {
            // border-color: #7ca4c1;
            border-style: dashed;
            border: 1px dashed #7ca4c1;
            padding: 10px;
            margin-bottom: 10px;
            background-color: #d9edf7;
            // border-color: #bce8f1;
            color: #31708f;
        }
    }
</style>