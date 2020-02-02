const createConnection = require('./dbUtil');

exports.addComment = async (blog_id, parent, username, comments, email, ctime, utime) => {
    return new Promise((resolve, reject) => {
        const connect = createConnection();
        connect.connect();
        const sql = "insert into comments(`blog_id`,`parent`,`user_name`,`comments`,`email`,`ctime`,`utime`) value(?,?,?,?,?,?,?)";
        const params = [blog_id, parent, username, comments, email, ctime, utime];
        connect.query(sql, params, (err, data) => {
            err ? reject(err) : resolve(data);
        });
        connect.end();
    });
}

exports.queryComments = async (blog_id) => {
    return new Promise((resolve, reject) => {
        const connection = createConnection();
        connection.connect();
        const sql = "select * from comments where blog_id=?";
        connection.query(sql, [+blog_id], (err, results) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(results.length === 0 ? null : results);
            }
        })
        connection.end(); //关闭连接
    })
}

exports.queryCommentCount = async (blog_id) => {
    return new Promise((resolve, reject) => {
        const connection = createConnection();
        connection.connect();
        const sql = "select count(1) as count from comments where blog_id=?";
        connection.query(sql, [blog_id], (err, results) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(results[0]);
            }
        })
        connection.end(); //关闭连接
    })
};

exports.queryHotComments = async () => {
    return new Promise((resolve, reject) => {
        const connection = createConnection();
        connection.connect();
        const sql = "select id,blog_id,user_name,ctime,comments from comments order by id desc limit 6";
        connection.query(sql, (err, results) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(results);
            }
        })
        connection.end(); //关闭连接
    })
};

