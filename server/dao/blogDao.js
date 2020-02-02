const createConnection = require('./dbUtil');


exports.addBlog = async (title, content, views, tags, ctime, utime) => {
    return new Promise((resolve, reject) => {
        const connect = createConnection();
        connect.connect();
        const sql = "insert into blog(`title`,`content`,`views`,`tags`,`ctime`,`utime`) value(?,?,?,?,?,?)";
        const params = [title, content, views, tags, ctime, utime];
        connect.query(sql, params, (err, data) => {
            err ? reject(err) : resolve(data);
        });
        connect.end();
    });
}

exports.queryBlogByPage = async (page, pageSize) => {
    return new Promise((resolve, reject) => {
        const connection = createConnection();
        connection.connect();
        const sql = "select * from blog order by `id` desc limit ?,?";
        connection.query(sql, [(page - 1) * pageSize, +pageSize], (err, data) => {
            // console.log(err, data);
            err ? reject(err) : resolve(data);
        });
        connection.end(); //关闭连接
    })
}

exports.queryBlogCount = async () => {
    return new Promise((resolve, reject) => {
        const connection = createConnection();
        connection.connect();
        const sql = "select count(id) as count from blog";
        connection.query(sql, (err, results) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(results[0]);
            }
        })
        connection.end(); //关闭连接
    })
}

exports.querySingleBlog = async (id) => {
    return new Promise((resolve, reject) => {
        const connection = createConnection();
        connection.connect();
        const sql = "select * from blog where id=?";
        connection.query(sql, [+id], (err, results) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(results.length === 0 ? null : results[0]);
            }
        })
        connection.end(); //关闭连接
    })
}

exports.queryBlogsBytitle = async () => {
    return new Promise((resolve, reject) => {
        const connection = createConnection();
        connection.connect();
        const sql = "select id,title from blog order by id desc limit 10";
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
}

exports.updateBlog = async (id, views) => {
    return new Promise((resolve, reject) => {
        var conn = createConnection();
        conn.connect();

        var sql = "update blog set `views`=? where `id`=?";
        conn.query(sql, [views, id], err => {
            if (err) {
                reject(err)
            }
            else {
                resolve();
            }
        })

        conn.end();
    })
};

exports.queryBlogsByPageByTag = async (tagName, page = 1, pageSize = 4) => {
    return new Promise((resolve, reject) => {
        const connection = createConnection();
        connection.connect();
        const sql = 'select * from blog where find_in_set(?,tags) limit ?,?'
        const params = [tagName, (page - 1) * pageSize, +pageSize];
        connection.query(sql, params, (err, data) => {
            err ? reject(err) : resolve(data);
        });
        connection.end();
    });
}

exports.queryBlogsCountByTag = async (tagName) => {
    return new Promise((resolve, reject) => {
        const connection = createConnection();
        connection.connect();
        const sql = "select count(1) as count from blog where find_in_set(?,tags)";
        connection.query(sql, [tagName], (err, results) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(results[0]);
            }
        })
        connection.end(); //关闭连接
    })
}

exports.queryBlogBySearch = async (search, page = 1, pageSize = 4) => {
    return new Promise((resolve, reject) => {
        var sql = "select * from blog where title like concat(concat('%', ?), '%') or content like concat(concat('%', ?), '%') limit ?,?;";
        var params = [search, search, (page - 1) * pageSize, +pageSize];
        var connection = createConnection();
        connection.connect();
        connection.query(sql, params, function (err, data) {
            err ? reject(err) : resolve(data);
        });
        connection.end();
    });
}

exports.queryBlogBySearchCount = async (search) => {
    return new Promise((resolve, reject) => {
        var sql = "select count(1) as count from blog where title like ? or content like ?;";
        var params = ["%" + search + "%", "%" + search + "%"];
        var connection = createConnection();
        connection.connect();
        connection.query(sql, params, function (error, result) {
            if (error) {
                reject(error);
            } else {
                console.log(result[0]);
                resolve(result[0]);
            }
        });
        connection.end();
    });
}