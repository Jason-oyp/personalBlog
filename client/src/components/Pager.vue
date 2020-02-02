<template>
    <div class="page-container">
        <a href="/" class="pager-item first" v-show="!(current === 1)" @click.prevent="changePage(1)">首页</a>
        <a href="/" class="pager-item prev" v-show="!(current === 1)" @click.prevent="changePage(current - 1)">上一页</a>
        <a href="/" class="pager-item number" v-for="number in numbers" :key="number"
            :class="number === current ? 'active':''" @click.prevent="changePage(number)">{{number}}</a>
        <a href="/" class="pager-item next" v-show=" !(current === totalPage)"
            @click.prevent="changePage(current + 1)">下一页</a>
        <a href="/" class="pager-item end" v-show="!(current === totalPage)"
            @click.prevent="changePage(totalPage)">尾页</a>
        &nbsp;
        <span class="pager-text" v-show="totalPage">
            <i class="current">{{current}}</i>
            / <i class="total">{{totalPage}}</i>
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            current: {
                type: Number,
                default: 1
            },
            pageSize: {
                type: Number,
                default: 2
            },
            total: {
                type: Number,
                default: 1000
            },
            pagePlane: {
                type: Number,
                default: 6
            }
        },
        computed: {
            totalPage() {
                return Math.ceil(this.total / this.pageSize)
            },
            numbers() {
                let min = this.current - Math.floor(this.pagePlane / 2);
                if (min < 1) {
                    min = 1;
                }
                let max = min + this.pagePlane - 1;
                if (max > this.totalPage) {
                    max = this.totalPage;
                    if (max - this.pagePlane < 0) {
                        min = 1;
                    } else {
                        min = max - this.pagePlane + 1;
                    }
                }
                let arr = [];
                for (let i = min; i <= max; i++) {
                    arr.push(i);
                }
                return arr
            }
        },
        methods:{
            changePage(newPage){
                // console.log(newPage);
                if(newPage<1){
                    newPage = 1;
                }
                if(newPage>this.totalPage){
                    newPage = this.totalPage;
                }
                this.$emit('handlePage',newPage);
            }
        }
    }
</script>

<style lang="scss">
    .page-container {
        margin: 15px;

        .pager-item {
            display: inline-block;
            margin: 0 5px;
            width: 30px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            background-color: aliceblue;
            text-decoration: none;
            color: #080808;

            &.active {
                background-color: #080808;
                color: aliceblue;
            }
        }

        .first,
        .end,
        .prev,
        .next {
            width: 50px;
        }
    }
</style>