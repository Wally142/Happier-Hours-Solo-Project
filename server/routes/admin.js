var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

router.get('/', function (req, res) {
    console.log('happy time');
    pool.connect(function (error, client, done) {
        if (error) {
            console.log(error);
            res.sendStatus(404);
        } else {
            client.query('SELECT * FROM happy WHERE approved = false;', function (queryErr, resultObj) {
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

router.delete('/:id', function (req, res) {
    var dbId = req.params.id;
    pool.connect(function (conErr, client, done) {
        if (conErr) {
            console.log(conErr);
            res.sendStatus(500);
        } else {
            client.query('DELETE FROM happy WHERE id = $1;', [dbId], function (queryErr, result) {
                done();
                if (queryErr) {
                    res.sendStatus(500);
                } else {
                    res.sendStatus(202);
                }
            });
        }
    }
    )
});//End router DELETE


module.exports = router;