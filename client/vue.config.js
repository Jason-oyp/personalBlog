module.exports = {
    devServer: {
        proxy: {
            "/editEveryDay": {
                "target": "http://127.0.0.1:9527"
            },
            "/getBlogsByPage": {
                "target": "http://127.0.0.1:9527"
            },
            "/getSingleBlog": {
                "target": "http://127.0.0.1:9527"
            },
            "/editComment": {
                "target": "http://127.0.0.1:9527"
            },
            "/getCaptcha": {
                "target": "http://127.0.0.1:9527"
            },
            "/queryComments": {
                "target": "http://127.0.0.1:9527"
            },
            "/queryBlogsBytitle": {
                "target": "http://127.0.0.1:9527"
            },
            "/updateBlog": {
                "target": "http://127.0.0.1:9527"
            },
            "/queryHotComments": {
                "target": "http://127.0.0.1:9527"
            },
            "/queryTagAll": {
                "target": "http://127.0.0.1:9527"
            },
            "/queryBlogsByPageByTag": {
                "target": "http://127.0.0.1:9527"
            },
            "/queryBlogBySearch": {
                "target": "http://127.0.0.1:9527"
            }
        }
    }

}