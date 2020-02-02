<template>
    <div class="article-lis">
        <Article v-for="item in articles" :key="item.id" :article="item" />
    </div>
</template>

<script>
    import Article from './Article'
    export default {
        components: {
            Article
        },
        data() {
            return {
                articleList: [{
                    title: "Laravel5.4安装passport时遇到的一些问题",
                    content: `安装时可能不支持高版本，我使用了composer require laravel/passport ~4.0安装后执行迁移时nothing to
                        migrate，需要手动注册Provider，
                        在config/app.php中providers中添加Laravel\Passport\PassportServiceProvider::class。执行php artisan
                        passport:install时提示“There are no commands defined in the “passport” namespace.”
                        需要执行cache:clear和config:cache
                        更新缓存。...`,
                    date: "2019-12-06",
                    views: "2,778",
                    tags: "laravel",
                    id: 1
                }, {
                    title: "Laravel5.4安装passport时遇到的一些问题",
                    content: `安装时可能不支持高版本，我使用了composer require laravel/passport ~4.0安装后执行迁移时nothing to
                migrate，需要手动注册Provider，
                在config/app.php中providers中添加Laravel\Passport\PassportServiceProvider::class。执行php artisan
                passport:install时提示“There are no commands defined in the “passport” namespace.”
                需要执行cache:clear和config:cache
                更新缓存。...`,
                    date: "2019-12-06",
                    views: "2,778",
                    tags: "laravel",
                    id: 15
                },
                {
                title: "Laravel5.4安装passport时遇到的一些问题",
                content: `安装时可能不支持高版本，我使用了composer require laravel/passport ~4.0安装后执行迁移时nothing to
                migrate，需要手动注册Provider，
                在config/app.php中providers中添加Laravel\Passport\PassportServiceProvider::class。执行php artisan
                passport:install时提示“There are no commands defined in the “passport” namespace.”
                需要执行cache:clear和config:cache
                更新缓存。...`,
                date: "2019-12-06",
                views: "2,778",
                tags: "laravel",
                id: 16
                },
                {
                title: "Laravel5.4安装passport时遇到的一些问题",
                content: `安装时可能不支持高版本，我使用了composer require laravel/passport ~4.0安装后执行迁移时nothing to
                migrate，需要手动注册Provider，
                在config/app.php中providers中添加Laravel\Passport\PassportServiceProvider::class。执行php artisan
                passport:install时提示“There are no commands defined in the “passport” namespace.”
                需要执行cache:clear和config:cache
                更新缓存。...`,
                date: "2019-12-06",
                views: "2,778",
                tags: "laravel",
                id: 17
                }]
            }
        },
        props:['articles']
    }
</script>

<style>

</style>