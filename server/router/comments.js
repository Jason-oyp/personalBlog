const express = require('express');
const url = require('url');
const router = express.Router();
const commentDao = require('../dao/commentDao');
var svgCaptcha = require('svg-captcha');


router.post('/editComment', async (req, res) => {
    const { blog_id, parent, user_name, comments, email, ctime, utime } = req.body;
    await commentDao.addComment(blog_id, parent, user_name, comments, email, ctime, utime);
    res.send({
        status: "添加成功"
    });
});

router.get('/getCaptcha', (req, res) => {
    const captcha = svgCaptcha.create({
        size: 4,
        noise: 2,
        // color: true,
        width: 100,
        height: 34
    });
    res.type('svg');
    res.status(200).send(captcha);
});

router.get('/queryComments', async (req, res) => {
    const params = url.parse(req.url, true).query;
    const result = await Promise.all([commentDao.queryComments(params.blog_id), commentDao.queryCommentCount(params.blog_id)]);
    res.send({
        data: result[0],
        count: result[1].count
    });
})

router.get('/queryHotComments', async (req, res) => {
    res.send(await commentDao.queryHotComments());
})

module.exports = router;