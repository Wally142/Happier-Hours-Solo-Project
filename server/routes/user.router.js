var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

// Handles Ajax request for user information if user is authenticated
router.get('/', function (req, res) {
  console.log('get /user route');
  // check if logged in
  if (req.isAuthenticated()) {
    // send back user object from database
    console.log('logged in', req.user);
    var userInfo = {
      username: req.user.username
    };
    res.send(userInfo);
  } else {
    // failure best handled on the server. do redirect here.
    console.log('not logged in');
    // should probably be res.sendStatus(403) and handled client-side, esp if this is an AJAX request (which is likely with AngularJS)
    res.send(false);
  }
});

// clear all server session information about this user
router.get('/logout', function (req, res) {
  // Use passport's built-in method to log out the user
  console.log('Logged out');
  req.logOut();
  res.sendStatus(200);
});

router.get('/happy', function (req, res) {
  console.log('happy time');
  pool.connect(function (error, client, done) {
    if (error) {
      console.log(error);
      res.sendStatus(404);
    } else {
      client.query('SELECT * FROM happy WHERE approved = true;', function (queryErr, resultObj) {
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
}); //end get

router.post('/happy', function (req, res) {
  console.log('in router post', req.body);
  var bar = req.body;
  pool.connect(function (error, client, done) {
    if (error) {
      console.log(error);
      res.sendStatus(404);
    } else {
      var queryString = 'INSERT INTO happy (location, day, time, specials) VALUES ($1, $2, $3, $4);';
      var items = [bar.location, bar.day, bar.time, bar.specials];
      client.query(queryString, items, function (queryErr, resultObj) {
        done();
        if (queryErr) {
          console.log(queryErr)
          res.sendStatus(500);
        } else {

          res.sendStatus(201);
        }
      });
    }
  })

}); //end post

module.exports = router;
