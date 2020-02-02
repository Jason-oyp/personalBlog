const express = require('express');
const router = express.Router();
const tagDao = require('../dao/tagDao');

router.get('/queryTagAll', async (req, res) => {
    res.send(await tagDao.queryTagAll());
})

module.exports = router;