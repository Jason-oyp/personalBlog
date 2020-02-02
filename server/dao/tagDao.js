const createConnection = require('./dbUtil');

exports.addTag = async (tag, ctime, utime) => {
    return new Promise((resolve, reject) => {
        const connection = createConnection();
        connection.connect();
        const sql = "insert into tags(`tag`,`ctime`,`utime`) value(?,?,?)";
        connection.query(sql, [tag, ctime, utime], (err,data) => {
            err ? reject(err) : resolve(data);
        });
        connection.end();
    })
}

exports.queryTag = async (tag) => {
    return new Promise((resolve, reject) => {
        const connection = createConnection();
        connection.connect();
        const sql = "select * from tags where tag = ?";
        connection.query(sql, [tag], (err, data) => {
            // console.log(err, data);
            err ? reject(err) : resolve(data);
        });
        connection.end(); //关闭连接
    })
}

exports.queryTagAll = async () => {
    return new Promise((resolve, reject) => {
        const connection = createConnection();
        connection.connect();
        const sql = "select * from tags";
        connection.query(sql, (err, data) => {
            err ? reject(err) : resolve(data);
        });
        connection.end(); //关闭连接
    })
}
