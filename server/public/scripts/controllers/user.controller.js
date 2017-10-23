myApp.controller('UserController', function (UserService, $location) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.happyHour = UserService.happyHourTrue;
  vm.happyComments = UserService.happyHourComments;

  vm.getHappy = function () {
    UserService.getHappy();
  }

  vm.getDay = function (day) {
    if (day === 'weekday') {
      UserService.getWeekdays();
    }

    else if (day === 'everyday') {
      UserService.getWeekend();
    }
    else {
      vm.happyHour.list = [];
    }
  };// end display by day function

  vm.commentPost = function (comment, id) { // function for adding comments
    var newComment = {
      comments: comment,
      id: id

    };

    UserService.postComment(newComment);
  };// end commentPost

  vm.getComments = function (id) {
    UserService.getComments(id);
    $location.path('/barcomments')
  };

});// end controller

