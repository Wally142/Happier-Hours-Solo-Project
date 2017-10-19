myApp.controller('UserController', function (UserService) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.happyHour = UserService.happyHourTrue;



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

  vm.commentPost = function () { // function for adding comments
    var newComment = {
      comments: vm.commentIn
    };

    UserService.postComment(newComment);
    vm.commentIn = null;
  };// end commentPost

});// end controller

