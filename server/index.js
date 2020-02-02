const express = require("express");
const path = require("path");
const editEveryday = require("./router/editEveryday");
const editBlog = require("./router/editBlog");
const comments = require("./router/comments");
const tag = require("./router/tag");


const app = new express();



//下面两行代码是为了解决服务端单页应用程序history模式的问题
//详情见：https://www.npmjs.com/package/connect-history-api-fallback
var history = require('connect-history-api-fallback');
app.use(history());

app.use(express.json()); //解析json格式的body
app.use(express.urlencoded({ extended: false })); //解析urlencoded格式的body


app.use(express.static(path.resolve(__dirname, "./pages/")));
app.use(editEveryday);
app.use(editBlog);
app.use(comments);
app.use(tag);

app.listen(9527, () => {
    console.log("server is running");
})