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

  vm.commentPost = function (comment) { // function for adding comments
    // swal({
      
    //   text: 'Click on a Location to view its Comments.',
    // })
    var newComment = {
      comments: comment,
      id: UserService.what.id
    };
    UserService.postComment(newComment).then(function() {
    UserService.getComments(UserService.what.id)
    });
    
  };// end commentPost

  vm.getComments = function (id, happy) {
    // swal({
    //   title: 'Happy Time!',
    //   text: 'Here is what other people had to say!'
    // }).then(function () {
      console.log(happy);
      UserService.bar = happy;
      UserService.getComments(id);
      $location.path('/barcomments')

    // });
  };

  

});// end controller

