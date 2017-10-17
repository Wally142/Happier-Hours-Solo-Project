myApp.controller('InfoController', function(UserService) {
  console.log('InfoController created');
  var vm = this;
  // vm.userService = UserService;
  vm.happyPost = function () {
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
  }
});
