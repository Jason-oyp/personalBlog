<template>
    <div class="article">
        <router-link :to="{name:'detail',params:{id:article.id}}">{{article.title}}</router-link>
        <p v-html="article.content.length >= 300? article.content.slice(0,300) + `...`:article.content"></p>
        <div class="article-foot">
            发布于{{article.date}} | 浏览({{article.views}}) | Tags：
            <a href="https://www.zh30.com/tag/laravel" rel="tag">{{article.tags}}</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['article']
    }
</script>

<style lang="scss" scoped>
    .article {
        margin-top: 20px;
        border-color: #bfbfbf #8e8e8e #5f5f5f #bfbfbf;
        background-color: #fff;
        border: 1px solid #c3baba;
        border-radius: 4px;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
        box-sizing: border-box;
        padding: 15px;
        padding-bottom: 0px;

        >a {
            color: #13102b;
            text-decoration: none;
            font-size: 20px;
            display: block;
            padding: 5px 0;

            &:hover {
                color: #23527c;
            }
        }

        p {
            font-size: 14px;
            line-height: 1.4;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            color: #333;
            margin: 10px 0px;
        }

        div {
            color: #eee;
            background-color: #1f1f1f;
            margin: 0 -15px;
            padding: 8px 15px;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            font-size: 14px;

            a {
                text-decoration: none;
                color: #fff;
            }
        }
    }
</style>