const connection = require('./dbUtil');

exports.addMapping = async (tagId,blogId,ctime,utime) => {
    return new Promise((res, rej) => {
        const connect = connection();
        connect.connect();
        const sql = "insert into tag_blog_mapping (`tag_id`,`blog_id`,`ctime`,`utime`) value(?,?,?,?)";
        const params = [tagId, blogId, ctime, utime];
        connect.query(sql, params, (err,data) => {
            err ? rej(err) : res(data);
        });
        connect.end();
    });
}