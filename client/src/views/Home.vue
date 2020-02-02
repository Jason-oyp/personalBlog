<template>
    <div class="home-left">
        <Everyday />
        <ArticleList :articles="articles" />
        <Pager :total="total" :pageSize="pageSize" @handlePage="handlePage" :current="current" />
    </div>
</template>

<script>
    import blog from '../axios/blog'
    import Everyday from '../components/Everyday'
    import ArticleList from '../components/ArticleList'
    import Pager from '../components/Pager'
    export default {
        beforeRouteUpdate(to, from, next) {
            console.log('更新了路由');
            if (to.params.tagName) {
                this.getBlogsByPage(to.params.id, {
                    type: 'queryBlogsByPageByTag',
                    search: to.params.tagName
                })
            } else if (to.query.search) {
                this.getBlogsByPage(to.query.page, {
                    type: 'queryBlogBySearch',
                    search: to.query.search
                });
            } else {
                this.getBlogsByPage(to.params.id, {
                    type: 'getBlogByPage'
                })
            };
            next();
        },
        components: {
            Everyday,
            ArticleList,
            Pager
        },
        data() {
            return {
                current: 1,
                total: 0,
                pageSize: 4,
                articles: []
            }
        },
        methods: {
            handlePage(newPage) {
                if (newPage === this.current) {
                    return;
                }
                this.current = newPage;
                if (this.$route.params.tagName) {
                    this.$router.push(`/tag/${this.$route.params.tagName}/${newPage}`);

                    this.getBlogsByPage(newPage, {
                        type: 'queryBlogsByPageByTag',
                        search: this.$route.params.tagName
                    });
                } else if (this.$route.query.search) {
                    this.$router.push(
                        `/s?page=${newPage}&pageSize=${this.pageSize}&search=${this.$route.query.search}`);
                    this.getBlogsByPage(newPage, {
                        type: 'queryBlogBySearch',
                        search: this.$route.query.search
                    })
                } else {
                    this.$router.push("/page/" + newPage);
                    this.getBlogsByPage(this.$route.params.id, {
                        type: 'getBlogByPage'
                    })
                };



            },
            async getBlogsByPage(newPage, payload) {
                this.current = +newPage;

                let result = null;
                result = await blog[payload.type](newPage, this.pageSize, payload.search);
                console.log(result);
                result.count === 0 ? this.$router.push('/error'):
                result.blogsResult = result.blogsResult.map((item) => {
                    const content = item.content.replace(/<img[\w\W]*">/g, '');
                    const date = new Date(item.ctime).toLocaleDateString();
                    return {
                        ...item,
                        content,
                        date
                    }
                });
                this.articles = result.blogsResult;
                this.total = result.count;
            }
        },
        mounted() {
            if (this.$route.params.tagName) {
                this.getBlogsByPage(this.$route.params.id, {
                    type: 'queryBlogsByPageByTag',
                    search: this.$route.params.tagName
                })
            } else if (this.$route.query.search) {
                this.getBlogsByPage(this.$route.query.page, {
                    type: 'queryBlogBySearch',
                    search: this.$route.query.search
                })
            } else {
                this.getBlogsByPage(this.$route.params.id, {
                    type: 'getBlogByPage'
                })
            };
        }
    }
</script>

<style>
    .home-left {
        float: left;
        width: 60%;
        padding: 15px;
        margin-right: 20px;
    }
</style>