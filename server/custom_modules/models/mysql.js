var mysql1;
var mysql = { 
  pool:  mysql1.createPool({
    connectionLimit : 10,
    host     : process.env.MYSQL_URL,
    user     : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASS,
    database : process.env.MYSQL_DB,
    debug    :  false
}),
  module: (Mysqlmodule)=>{
      mysql1 = Mysqlmodule;
  }
}
module.exports = mysql;