myApp.controller('UserController', function(UserService) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.happyHour = UserService.happyHour;

//   vm.happyPost = function() {
//     var newList = {
//     Location : vm.locationIn,
//     Day: vm.DayIn,
//     Time: vm.TimeIn,
//     Specials: vm.specialsIn
//   };

//   UserService.postHappy(newList);
// }

  vm.getHappy = function(){
    UserService.getHappy();
  }
});
