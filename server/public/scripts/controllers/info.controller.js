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
  }

});//end controller
