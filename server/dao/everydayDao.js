const createConnection = require('./dbUtil');

exports.addEveryday = async function (content, ctime) {
    return new Promise((resolve, reject) => {
        const connection = createConnection();
        connection.connect();
        const sql = "insert into every_day(`content`,`ctime`) value(?,?)";
        connection.query(sql, [content, ctime]);
        connection.end(err => {
            if (err) {
                reject(err)
            }
            else {
                resolve();
            }
        }); //关闭连接
    })
}


exports.getEveryday = async ()=>{
    return new Promise((resolve, reject) => {
        const connection = createConnection();
        connection.connect();
        const sql = "select * from every_day order by id desc limit 1;";
        connection.query(sql, (error,res) => {
            if (error) {
                reject(error);
            } else {
                resolve(res[0]);
            }
            
        });
        connection.end(); //关闭连接
    })
}