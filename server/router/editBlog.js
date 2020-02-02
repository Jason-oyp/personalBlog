const express = require('express');
const url = require('url');
const router = express.Router();
const blogDao = require('../dao/blogDao');
const tagDao = require('../dao/tagDao');
const mappingDao = require('../dao/tag_blog_mappingDao');


router.post('/editBlog', async (req, res) => {
    const params = url.parse(req.url, true).query;
    const tags = params.tags.replace(/ /g, '').replace(/，/g, ',');
    const data = await blogDao.addBlog(params.title, req.body.content, 0, tags, new Date().toLocaleDateString(), new Date().toLocaleDateString());
    // console.log(111, data);
    const blogId = data.insertId;
    const tagList = tags.split(',');
    // console.log(tagList)
    for (let i = 0; i < tagList.length; i++) {
        const result = await tagDao.queryTag(tagList[i]);
        if (result.length === 0) {
            const { insertId } = await tagDao.addTag(tagList[i], new Date().toLocaleDateString(), new Date().toLocaleDateString());
            await mappingDao.addMapping(insertId, blogId, new Date().toLocaleDateString(), new Date().toLocaleDateString());
        } else {
            await mappingDao.addMapping(result[0].id, blogId, new Date().toLocaleDateString(), new Date().toLocaleDateString());
        }
    }
    res.send({
        status: "添加成功"
    });
});

router.get('/getBlogsByPage', async (req, res) => {
    const params = url.parse(req.url, true).query;
    const blogsResult = await blogDao.queryBlogByPage(params.page, params.pageSize);
    const count = await blogDao.queryBlogCount();
    res.send({
        ...count,
        blogsResult
    });
});

router.get('/queryBlogsBytitle', async (req, res) => {
    const result = await blogDao.queryBlogsBytitle();
    res.send(result);
});

router.get('/queryBlogsByPageByTag', async (req, res) => {
    const { tagName, page, pageSize } = req.query;
    const result = await Promise.all([blogDao.queryBlogsByPageByTag(tagName, page, pageSize), blogDao.queryBlogsCountByTag(tagName)]);
    res.send({
        count: result[1].count,
        blogsResult: result[0]
    });
})

router.get('/getSingleBlog/:id', async (req, res) => {
    const result = await blogDao.querySingleBlog(req.params.id);
    res.send(result);
});

router.post("/updateBlog", async (req, res) => {
    const { id, views } = req.body;
    await blogDao.updateBlog(id, views);
    res.send({
        status: '更新成功'
    });
});

router.get('/queryBlogBySearch', async (req, res) => {
    const { search, page, pageSize } = req.query;
    const result = await Promise.all([blogDao.queryBlogBySearch(search, page, pageSize), blogDao.queryBlogBySearchCount(search)]);
    res.send({
        count: result[1].count,
        blogsResult: result[0]
    });
});

module.exports = router;