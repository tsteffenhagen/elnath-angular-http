var pg = require('pg');

var config = {
    database: 'restaurant',//the name of our database
    host: 'localhost',//where is you database (what computer)
    port: 5432,//the port number for your database, 5432 is default
    max: 10, //how many connections at one time
    idleTimeoutMillis: 1000 // 30 seconds to try to connect to our database
};

module.exports = new pg.Pool(config);