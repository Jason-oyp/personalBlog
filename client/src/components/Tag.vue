<template>
    <TemplateSlot>
        随机标签云
        <template v-slot:content>
            <a :href='`/tag/${item.content}/1`' v-for="item in tagList" :key="item.id" :style="item.style">
                {{item.content}}
            </a>

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
                tagList1: ['telnet',
                    'Sunshine Girl',
                    'Rewrite',
                    'win7',
                    '拉登',
                    '五笔',
                    '独立博客',
                    '指针',
                    'C++',
                    '外链',
                    'mac',
                    'git',
                    'php',
                    'python',
                    '蛋疼',
                    '数据结构',
                    'dedecms',
                    'nginx',
                    'seo',
                    'laravel',
                    'php分页',
                    '模拟飞行',
                    'mysql',
                    'SpaceShuttleMission',
                    '摄像头',
                    'cpanel',
                    '树莓派',
                    '音乐',
                    '游戏',
                    '灯泡姑娘',
                    'DCS黑鲨',
                    '模拟航天飞机',
                    'css+div',
                    'E6',
                    '博客',
                    '伤不起',
                    '搞笑',
                    '个人博客',
                    'vagrant',
                    'selenium',
                    '分区',
                    'session',
                    'wordpress',
                    '博客优化',
                    'C语言'
                ],
                tagList: [],
                lastTagName:''
            }
        },
        async mounted() {
            this.lastTagName = this.$route.params.tagName;
            const result = await axios.get('/queryTagAll').then(res => res.data);
            this.tagList = result.sort(() => Math.random() - 0.5).map(item => {
                return {
                    id: item.id,
                    content: item.tag,
                    style: {
                        color: `rgb(${this.getRandom(0,255)},${this.getRandom(0,255)},${this.getRandom(0,255)})`,
                        fontSize: `${this.getRandom(12,20)}px`
                    }
                }
            })
        },
        methods: {
            getRandom(min, max) {
                return Math.floor(Math.random() * (max - min) + min);

            },
            searchBlogsByTag(tagName) {
               if(this.lastTagName === tagName){
                   return;
               }
                this.lastTagName = tagName;
                this.$router.push(`/tag/${tagName}/1`);
            }
        }
    }
</script>

<style lang="scss" scoped>
    a {
        text-decoration: none;
        cursor:pointer;
    }
</style>