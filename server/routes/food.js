var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

router.get('/', function(req, res) {
    pool.connect(function(errorConnectingToDatabase, db, done) {
        if(errorConnectingToDatabase) {
            console.log('There was an error connecting to the database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            db.query('SELECT * FROM food;', function(errorMakingQuery, result) {
                done()
                if (errorMakingQuery) {
                    console.log('There was an error making the query', errorMakingQuery);
                    res.sendStatus(500);                    
                } else {
                    res.send(result.rows)
                }
            })
        }
    })
});

module.exports = router;