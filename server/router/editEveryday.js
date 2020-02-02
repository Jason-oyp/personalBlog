const express = require('express');
const router = express.Router();
const everydayDao = require('../dao/everydayDao');

/**
 * 添加每日一句
 */

router.post('/editEveryDay', async (request, response) => {
    await everydayDao.addEveryday(request.body.content, new Date().toLocaleDateString());
    console.log(result);
    response.send({
        status:"添加成功"
    });
});


/**
 * 获取最新每日一句
 */

router.get('/editEveryDay', async (request, response) => {
    const result = await everydayDao.getEveryday();
    delete result.ctime;
    response.send(result);
    
});

module.exports = router;