myApp.controller('InfoController', function(UserService) {
  console.log('InfoController created');
  var vm = this;

  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.happyHour = UserService.happyHourFalse;
  
  vm.isAdmin = false
  if(vm.userObject){
    console.log(vm.userObject)
  if(vm.userObject.userName ==='Greg'){
    vm.isAdmin = true;
    }
  } // if statement for Requests Page
  
  
  vm.happyPost = function () { // function for user adding happy hour
    var newList = {
      location: vm.locationIn,
      day: vm.dayIn,
      time: vm.timeIn + '-' + vm.timeOut,
      specials: vm.specialsIn
    };
  
  UserService.postHappy(newList);
    vm.locationIn = null;
    vm.dayIn = null;
    vm.timeIn = null;
    vm.specialsIn = null;
  };// end happyPost

  vm.getHappy = function () {
    UserService.getApproval();//GET that loads on admin page
  };

  vm.delete = function (id) {
    UserService.deleteApproval(id);//delete happy hour request
    vm.getHappy();
  };

  vm.update = function (id, status) {
    UserService.updateHappyHour(id, status); //accepts happy hour request
    vm.getHappy();
  };

  //arrays for Start/End time for happy hour post
  vm.startTime = ['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am'];
  vm.endTime = ['9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12am','1am','2am'];

});//end controller
