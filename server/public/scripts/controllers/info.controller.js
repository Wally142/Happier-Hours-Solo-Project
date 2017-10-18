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
      time: vm.timeIn,
      specials: vm.specialsIn
    };
  
  UserService.postHappy(newList);
    vm.locationIn = null;
    vm.dayIn = null;
    vm.timeIn = null;
    vm.specialsIn = null;
  }// end happyPost

  vm.getHappy = function () {
    UserService.getApproval();
  }
});
