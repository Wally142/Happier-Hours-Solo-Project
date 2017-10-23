var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

router.post('/', function (req, res) {
    console.log('in router post', req.body);
    var text = req.body.comments;
    var userId = req.user.id;
    var happy = req.body.id;
    pool.connect(function (error, client, done) {
        if (error) {
            console.log(error);
            res.sendStatus(404);
        
        // } else {
        //     client.query('SELECT id AS "location_id" FROM happy', function (error, result) {
        //         done();
        //         if ;(error) {
        //             console.log(error);
        //             res.sendStatus(404)
                } else {
                    // var barId = result.rows[0].id;
                    var queryString = 'INSERT INTO comments (comments, user_id, location_id) VALUES ($1, $2, $3);';
                    var item = [text, userId, happy];
                    client.query(queryString, item, function (queryErr, resultObj) {
                        done();
                        if (queryErr) {
                            console.log(queryErr)
                            res.sendStatus(500);
                        } else {

                            res.sendStatus(201);
                        }
                    });
                }
            });
        
    
});// end post


router.get('/:id', function (req, res) {
    console.log('comments.js route');
    console.log('params', req.params.body);
    pool.connect(function (error, client, done) {
        if (error) {
            console.log(error);
            res.sendStatus(404);
        } else {
            var joinQuery = 'SELECT * FROM comments WHERE location_id = $1 ;';
            var value = [req.params.id];
            client.query(joinQuery, value, function (queryErr, resultObj) {
                done();
                if (queryErr) {
                    console.log(queryErr)
                    res.sendStatus(500);
                } else {
                    console.log(resultObj.rows);
                    res.send(resultObj.rows);
                }
            });
        }
    });
});// end GET









module.exports = router;