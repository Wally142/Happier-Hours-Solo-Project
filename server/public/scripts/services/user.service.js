myApp.service('UserService', function ($http, $location) {
  console.log('UserService Loaded');
  var self = this;

  self.userObject = {};
  self.happyHour = { list: [] }
  // self.addHappy = {}

  self.getuser = function () {
    console.log('UserService -- getuser');
    $http.get('/user').then(function (response) {
      if (response.data.username) {
        // user has a curret session on the server
        self.userObject.userName = response.data.username;
        console.log('UserService -- getuser -- User Data: ', self.userObject.userName);
      } else {
        console.log('UserService -- getuser -- failure');
        // user has no session, bounce them back to the login page
        $location.path("/home");
      }
    });
  }

  self.logout = function () {
    console.log('UserService -- logout');
    $http.get('/user/logout').then(function (response) {
      console.log('UserService -- logout -- logged out');
      $location.path("/home");
    });
  }

  self.getHappy = function () {
    console.log('In getHappy');
    $http.get('/user/happy').then(function (response) {
      console.log(response);
      self.happyHour.list = response.data;
    })
  }

  self.postHappy = function (list) {
    console.log('Post Happy');
    $http({
      method: 'POST',
      url: '/user/happy',
      data: list
    }).then(function (response) {
      console.log('in service POST with', response);
    })
  }

});


