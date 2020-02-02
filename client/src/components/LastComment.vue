<template>
    <TemplateSlot>
        最新评论
        <template v-slot:content>
            <ul class="hot-list">
                <li class="list-group-item sidebar-comments-list-item" v-for="item in hotComments" :key="item.id">
                    <div class="list-group-item-heading">
                        <span class="comment-author">{{item.user_name}}</span>
                        <span class="pull-right">[{{item.ctime}}]</span>
                    </div>
                    <div class="list-group-item-text">
                        <a @click.prevent="toDetail(item.blog_id)" title="评论来源: Laravel5.4安装passport时遇到的一些问题"
                            rel="nofollow">{{item.comments}}
                        </a>
                    </div>
                </li>
            </ul>
        </template>
    </TemplateSlot>
</template>

<script>
    import TemplateSlot from './TemplateSlot'
    import {queryHotComments} from '../axios/comment'
    export default {
        components: {
            TemplateSlot
        },
        data() {
            return {
                hotComments: []
            }
        },
        methods: {
            toDetail(id) {
                document.location.href = `/detail/${id}`
            }
        },
        async mounted() {
            let result = await queryHotComments();
            result = result.map((item) => {
                return {
                    ...item,
                    ctime: new Date(item.ctime).toLocaleDateString()
                }
            });

            this.hotComments = result;
        }
    }
</script>

<style lang="scss" scoped>
    .hot-list li {
        height: 40px;
        line-height: 30px;
        border-bottom: 1px solid #292929;
        font-size: 14px;
        padding-bottom: 15px;

        >div {
            height: 20px;

            span {
                color: #eee;
                font-weight: 700;
            }
        }

        a {
            cursor: pointer;
            color: #777;

            &:hover {
                color: #337ab7;
            }
        }
    }
</style>